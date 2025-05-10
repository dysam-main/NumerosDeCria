import React, { useState } from 'react';
import { Button } from '../../../components/ui/button'; // Corrected path
import { Input } from '../../../components/ui/input'; // Corrected path
import { Label } from '../../../components/ui/label'; // Corrected path
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'; // Corrected path
import { Calendar } from '../../../components/ui/calendar'; // Corrected path
import { Popover, PopoverContent, PopoverTrigger } from '../../../components/ui/popover'; // Corrected path
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table'; // Corrected path
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../../lib/utils'; // Corrected path
// Import calculation logic
import { calculateRepaymentSchedule, AmortizationStrategy, RepaymentInstallment } from './loanUtils';


// Define types for schedule (adjust as needed) - Moved type to loanUtils.ts
/* interface RepaymentInstallment {
  installmentNumber: number;
  dueDate: string;
  paymentAmount: number;
  principal: number;
  interest: number;
  remainingBalance: number;
} */

export function LoanSimulator() {
  const [amount, setAmount] = useState<number | ''>('');
  const [rate, setRate] = useState<number | ''>(''); // Annual rate
  const [installmentsCount, setInstallmentsCount] = useState<number | ''>('');
  const [paymentFrequency, setPaymentFrequency] = useState<'monthly' | 'semi-monthly'>('monthly');
  const [amortizationStrategy, setAmortizationStrategy] = useState<string>('french'); // Default to French
  const [firstDueDate, setFirstDueDate] = useState<Date | undefined>(undefined);
  const [repaymentSchedule, setRepaymentSchedule] = useState<RepaymentInstallment[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);
    setRepaymentSchedule([]);

    // Basic validation
    if (!amount || !rate || !installmentsCount || !firstDueDate) {
      setError('Please fill in all required fields.');
      return;
    }
    if (amount <= 0 || rate <= 0 || installmentsCount <= 0) {
        setError('Amount, rate, and number of installments must be positive numbers.');
        return;
    }

    try {
      // Placeholder for calculation logic call
      console.log('Calculating schedule with:', {
        amount,
        rate,
        installmentsCount,
        paymentFrequency,
        amortizationStrategy,
        // Removed duplicate properties below
        firstDueDate,
      });
      const schedule = calculateRepaymentSchedule({
        principal: amount,
        annualRate: rate / 100, // Convert percentage to decimal
        installments: installmentsCount,
        frequency: paymentFrequency,
        strategy: amortizationStrategy as AmortizationStrategy, // Cast string state to type
        startDate: firstDueDate,
      });
      setRepaymentSchedule(schedule);

      // --- Mock Data Removed ---

    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred during calculation.');
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Loan Simulator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Fields */}
        <div className="space-y-2">
          <Label htmlFor="amount">Loan Amount ($)</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="e.g., 10000"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rate">Annual Interest Rate (%)</Label>
          <Input
            id="rate"
            type="number"
            value={rate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRate(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="e.g., 5"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="installments">Number of Installments</Label>
          <Input
            id="installments"
            type="number"
            value={installmentsCount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInstallmentsCount(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="e.g., 12"
            min="1"
            step="1"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="frequency">Payment Frequency</Label>
          <Select value={paymentFrequency} onValueChange={(value: 'monthly' | 'semi-monthly') => setPaymentFrequency(value)}>
            <SelectTrigger id="frequency">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="semi-monthly">Semi-Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="strategy">Amortization Strategy</Label>
          <Select value={amortizationStrategy} onValueChange={(value: string) => setAmortizationStrategy(value)}>
            <SelectTrigger id="strategy">
              <SelectValue placeholder="Select strategy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="french">French System (Constant Installment)</SelectItem>
              <SelectItem value="german">German System (Constant Principal)</SelectItem>
              <SelectItem value="american">American System (Interest-Only)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="firstDueDate">First Due Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !firstDueDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {firstDueDate ? format(firstDueDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={firstDueDate}
                onSelect={setFirstDueDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Button onClick={handleCalculate} className="w-full md:w-auto">Calculate Repayment Schedule</Button>

      {error && <p className="text-red-500">{error}</p>}

      {/* Results Table */}
      {repaymentSchedule.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Repayment Schedule</h2>
          <Table>
            <TableCaption>Detailed loan repayment schedule.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Installment</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead className="text-right">Payment Amount</TableHead>
                <TableHead className="text-right">Principal</TableHead>
                <TableHead className="text-right">Interest</TableHead>
                <TableHead className="text-right">Remaining Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {repaymentSchedule.map((installment) => (
                <TableRow key={installment.installmentNumber}>
                  <TableCell className="font-medium">{installment.installmentNumber}</TableCell>
                  <TableCell>{installment.dueDate}</TableCell>
                  <TableCell className="text-right">{installment.paymentAmount.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{installment.principal.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{installment.interest.toFixed(2)}</TableCell>
                  <TableCell className="text-right">{installment.remainingBalance.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
