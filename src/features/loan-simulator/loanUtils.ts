import { addMonths, addDays, format } from 'date-fns';

// Define types
export type AmortizationStrategy = 'french' | 'german' | 'american';
export type PaymentFrequency = 'monthly' | 'semi-monthly';

export interface LoanParams {
  principal: number;
  annualRate: number; // Expect decimal, e.g., 0.05 for 5%
  installments: number;
  frequency: PaymentFrequency;
  strategy: AmortizationStrategy;
  startDate: Date;
}

export interface RepaymentInstallment {
  installmentNumber: number;
  dueDate: string; // Formatted as 'yyyy-MM-dd'
  paymentAmount: number;
  principal: number;
  interest: number;
  remainingBalance: number;
}

// --- Helper Functions ---

function getPeriodicRate(annualRate: number, frequency: PaymentFrequency): number {
  const periodsPerYear = frequency === 'monthly' ? 12 : 24; // Assuming 24 periods for semi-monthly
  return annualRate / periodsPerYear;
}

function getNextDueDate(currentDate: Date, frequency: PaymentFrequency, installmentIndex: number): Date {
    if (installmentIndex === 0) {
        return currentDate; // First due date is the start date
    }
    const previousDueDate = getNextDueDate(currentDate, frequency, installmentIndex - 1);
    if (frequency === 'monthly') {
        return addMonths(previousDueDate, 1);
    } else { // semi-monthly
        // A more robust semi-monthly calculation might be needed depending on exact requirements
        // (e.g., always 15th and last day, or exactly 15 days apart)
        // This simple version adds 15 days.
        return addDays(previousDueDate, 15);
    }
}


// --- Amortization Strategy Implementations ---

function calculateFrenchSchedule(params: LoanParams): RepaymentInstallment[] {
  const { principal, annualRate, installments, frequency, startDate } = params;
  const schedule: RepaymentInstallment[] = [];
  const periodicRate = getPeriodicRate(annualRate, frequency);
  let remainingBalance = principal;

  // Calculate constant payment amount (M)
  // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
  const i = periodicRate;
  const n = installments;
  const paymentAmount = principal * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

  if (!isFinite(paymentAmount)) {
      throw new Error("Calculation resulted in invalid payment amount. Check inputs, especially rate and installments.");
  }


  for (let k = 1; k <= installments; k++) {
    const interest = remainingBalance * periodicRate;
    const principalPayment = paymentAmount - interest;
    remainingBalance -= principalPayment;

    // Ensure balance doesn't go significantly below zero due to floating point issues
    if (k === installments && Math.abs(remainingBalance) < 0.01) {
        remainingBalance = 0;
    }

    const dueDate = getNextDueDate(startDate, frequency, k -1); // k-1 because index starts at 0

    schedule.push({
      installmentNumber: k,
      dueDate: format(dueDate, 'yyyy-MM-dd'),
      paymentAmount: paymentAmount,
      principal: principalPayment,
      interest: interest,
      remainingBalance: remainingBalance,
    });
  }

  return schedule;
}

function calculateGermanSchedule(params: LoanParams): RepaymentInstallment[] {
    const { principal, annualRate, installments, frequency, startDate } = params;
    const schedule: RepaymentInstallment[] = [];
    const periodicRate = getPeriodicRate(annualRate, frequency);
    let remainingBalance = principal;
    const constantPrincipalPayment = principal / installments;

    for (let k = 1; k <= installments; k++) {
        const interest = remainingBalance * periodicRate;
        const paymentAmount = constantPrincipalPayment + interest;
        remainingBalance -= constantPrincipalPayment;

        // Ensure balance doesn't go significantly below zero due to floating point issues
        if (k === installments && Math.abs(remainingBalance) < 0.01) {
            remainingBalance = 0;
        }

        const dueDate = getNextDueDate(startDate, frequency, k - 1);

        schedule.push({
            installmentNumber: k,
            dueDate: format(dueDate, 'yyyy-MM-dd'),
            paymentAmount: paymentAmount,
            principal: constantPrincipalPayment,
            interest: interest,
            remainingBalance: remainingBalance,
        });
    }

    return schedule;
}

function calculateAmericanSchedule(params: LoanParams): RepaymentInstallment[] {
    const { principal, annualRate, installments, frequency, startDate } = params;
    const schedule: RepaymentInstallment[] = [];
    const periodicRate = getPeriodicRate(annualRate, frequency);
    const interestPayment = principal * periodicRate;

    for (let k = 1; k <= installments; k++) {
        const isLastInstallment = k === installments;
        const principalPayment = isLastInstallment ? principal : 0;
        const paymentAmount = interestPayment + principalPayment;
        const remainingBalance = isLastInstallment ? 0 : principal;

        const dueDate = getNextDueDate(startDate, frequency, k - 1);

        schedule.push({
            installmentNumber: k,
            dueDate: format(dueDate, 'yyyy-MM-dd'),
            paymentAmount: paymentAmount,
            principal: principalPayment,
            interest: interestPayment, // Interest is constant until the end
            remainingBalance: remainingBalance,
        });
    }

    return schedule;
}


// --- Main Calculation Function ---

export function calculateRepaymentSchedule(params: LoanParams): RepaymentInstallment[] {
  switch (params.strategy) {
    case 'french':
      return calculateFrenchSchedule(params);
    case 'german':
      return calculateGermanSchedule(params);
    case 'american':
      return calculateAmericanSchedule(params);
    default:
      throw new Error(`Unsupported amortization strategy: ${params.strategy}`);
  }
}
