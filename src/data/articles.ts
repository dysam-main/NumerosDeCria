export interface Article {
  id: number
  slug: string
  title: string
  summary: string
  content: string
  image: string
  downloadUrl: string
  downloadUrl2: string
  download2: string
  publishedAt: string
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "los-numeros-de-la-cria",
    title: "Los Números de la Cría",
    summary: "Una guía para entender la relación entre las variables productivas y económicas en los sistemas de cría bovina.",
    content: `<h2>¿Qué es "Los Números de la Cría"?</h2>
            <p>
              Este libro es una guía técnico-económica que busca responder a una pregunta fundamental: 
              ¿cómo se traduce el manejo productivo en resultados económicos dentro de los sistemas de cría bovina?
            </p>

            <p>
              A través de un enfoque claro y práctico, se abordan los principales indicadores que definen la eficiencia del sistema: 
              mortandad y morbilidades expresadas por el porcentaje de preñez; porcentaje y peso de destete de los terneros; 
              y peso de las madres. El análisis asume que la carga animal es adecuada a la situación forrajera, para aislar el efecto 
              de las variables productivas sin superposición con factores de manejo forrajero. Cada uno de estos indicadores se 
              interpreta no solo desde su impacto biológico, sino también desde su efecto directo en los números del negocio ganadero.
            </p>

            <p>
              <strong>Diferencias entre ediciones:</strong> en la primera edición se incluía como apéndice el capítulo con las planillas para 
              la evaluación de procreos. En la segunda edición, estas se han eliminado del cuerpo del libro y se encuentran como 
              un capítulo aparte, descargable de forma independiente.
            </p>

            <h2>¿Por qué es importante entender estos números?</h2>
            <p>
              Porque en un entorno productivo con márgenes muy variables (como se muestra en el gráfico respectivo), 
              conocer el impacto económico de cada decisión técnica es fundamental. Este libro propone que la eficiencia 
              reproductiva y el manejo del rodeo no pueden analizarse por separado de los resultados económicos.
            </p>

            <h2>Contenidos principales</h2>
            <ul>
              <li><strong>Conceptos clave:</strong> explicación de los indicadores productivos fundamentales, con especial énfasis en la dinámica del rodeo y su cálculo.</li>
              <li><strong>Modelos económicos:</strong> estimaciones numéricas utilizando el Margen Bruto de la actividad, sin entrar en detalles específicos de análisis de empresas.</li>
              <li><strong>Simulaciones:</strong> escenarios comparativos que visualizan los efectos de distintas estrategias de manejo, comparando un modelo base con sus variaciones.</li>
              <li><strong>Tablas y gráficos:</strong> herramientas visuales para interpretar los datos de forma clara e intuitiva.</li>
            </ul>

            <h2>¿A quién está dirigido?</h2>
            <p>
              A productores ganaderos, asesores técnicos, estudiantes de ciencias agropecuarias y a toda persona interesada 
              en comprender la lógica económica detrás de las decisiones productivas en la cría de bovinos. No se requieren 
              conocimientos avanzados de economía para aprovechar sus contenidos.
            </p>

            <h2>Lo que vas a encontrar</h2>
            <ul>
              <li>Una base conceptual sólida pero accesible.</li>
              <li>Ejemplos prácticos de simulaciones numéricas.</li>
              <li>Una visión integradora entre producción y economía.</li>
            </ul>`,
    image: "/img/los-numeros-de-la-cria.png?height=400&width=600",
    downloadUrl: "/downloads/los-numeros-de-la-cria.pdf",
    downloadUrl2:"",
    download2:"",
    publishedAt: "2023-06-15",
  },
  {
    id: 2,
    slug: "planillas-de-trabajo",
    title: "Manual de Uso y Planillas",
    summary: "Guía detallada para la correcta utilización de las planillas electrónicas que evalúan la eficiencia reproductiva del rodeo.",
    content: `
                <h2>Instrucciones de Uso y Planillas</h2>
            <p>Guía detallada para la correcta utilización de las planillas electrónicas que evalúan la eficiencia reproductiva del rodeo.</p>
            <p>Para usar las planillas de evaluación de procreos, consultar el capítulo específico. El mismo contiene dos archivos: <strong>“apéndice.pdf”</strong> y <strong>“instrucciones resumen.pdf”</strong>, uno más detallado que el otro.</p>

            <h2>¿Qué es este manual?</h2>
            <p>Este documento es una guía exhaustiva para el uso de las planillas electrónicas <strong>Procreos Completos.xls</strong>, una herramienta diseñada para evaluar el desempeño reproductivo del rodeo desde el servicio hasta el destete.</p>

            <h2>Objetivo</h2>
            <p>Brindar a técnicos y productores una metodología clara y sistematizada para registrar y analizar los datos reproductivos del rodeo, permitiendo identificar distintas pérdidas, que nos ayuden a sospechar su origen, y tomar decisiones informadas para mejorar la eficiencia.</p>

            <h2>Temas abordados</h2>
            <ul>
              <li><strong>Diferenciación entre evaluación biológica y económica:</strong> cómo interpretar correctamente indicadores con dos resultados diferentes.</li>
              <li><strong>Importancia de los datos reales:</strong> evita inferencias basadas en existencias administrativas o contables.</li>
              <li><strong>Identificación de pérdidas reproductivas:</strong> detección de abortos, malpartos, mortalidad de madres y terneros.</li>
              <li><strong>Uso de planillas auxiliares:</strong> recomendaciones para el trabajo de campo, según el tipo de registro que se desee realizar.</li>
              <li><strong>Interpretación de resultados:</strong> incluye análisis bio-económico y reproductivo a partir de los datos cargados.</li>
            </ul>

            <h2>Componentes del sistema de planillas</h2>
            <ul>
              <li><strong>Archivo Excel:</strong> <em>“Procreos Completos.xls”</em>, para la carga de datos del rodeo, desde servicio hasta destete.</li>
              <li><strong>Archivos PDF:</strong> <em>“Accesoria2A.pdf”</em> y <em>“Accesoria2B.pdf”</em>, para uso manual durante la parición. Permiten registrar eventos diarios de dos maneras diferentes, pudiendo usarse una u otra según la conveniencia del caso.</li>
              <li><strong>Archivos auxiliares:</strong> <em>“Servicios.xls”</em> y <em>“Pariciones.xls”</em>, para trabajar etapas de forma separada cuando el manejo del campo no permite identificar los rodeos desde el servicio hasta el destete.</li>
            </ul>

            <h2>Requisitos para su correcta utilización</h2>
            <ul>
              <li>Registro preciso y diario de la información en campo.</li>
              <li>Capacitación del personal sobre qué registrar y cómo.</li>
              <li>Evitar la pérdida de identidad del rodeo durante el ciclo reproductivo.</li>
              <li>Completar adecuadamente pesos de madres y terneros para obtener resultados que ayuden a ver la eficiencia global del rodeo.</li>
            </ul>

            <h2>Interpretación de resultados</h2>
            <p>El sistema genera reportes automáticos con análisis desde dos enfoques:</p>
            <ul>
              <li><strong>Eficiencia Global del Rodeo:</strong> kilos de ternero logrados por madre y porcentaje de eficiencia productiva.</li>
              <li><strong>Resumen de Pérdidas Reproductivas:</strong> pérdidas por servicio, gestación y terneros.</li>
              <li><strong>Indicadores reproductivos ajustados:</strong> preñez ajustada según duración del servicio, útil para comparar rodeos con diferentes duraciones de servicios naturales.</li>
            </ul>

            <h2>¿A quién está dirigido?</h2>
            <p>A productores, asesores y técnicos interesados en mejorar la eficiencia reproductiva del rodeo de cría a través de un análisis detallado y profesional de los datos del campo.</p>

            <h2>Conclusión</h2>
            <p>Este manual permite llevar a cabo un control riguroso y útil de la información reproductiva, ofreciendo herramientas para identificar puntos críticos y tomar decisiones acertadas basadas en datos reales. El correcto uso de estas planillas puede marcar una diferencia significativa en los márgenes del sistema de cría.</p>
  
    `,
    image: "/img/manual-de-uso.png?height=400&width=600",
    downloadUrl: "/downloads/manual-de-uso.zip",
    downloadUrl2:"/downloads/planillas-de-trabajo.zip",
    download2:"planillas-de-trabajo",
    publishedAt: "2023-07-22",
  },
  {
    id: 3,
    slug: "descarte-por-edad",
    title: "Descarte por Edad",
    summary: "Análisis del impacto del descarte por edad y su dependencia de otras pérdidas en la reposición de vacas en rodeos de cría.",
    content: `
      <h2>Descarte por Edad en los Rodeos de Cría</h2>
      <p>
        Este artículo analiza el impacto del descarte por edad en los rodeos de cría vacuna, resaltando la importancia de considerar otras pérdidas que afectan la permanencia de las vacas en el sistema productivo. 
        A partir de un trabajo publicado hace 40 años, se expone cómo las decisiones sobre el descarte no deben tomarse de manera aislada, ya que existen múltiples factores —como vacas vacías, secas, mortandad, selección y ventas— 
        que modifican los porcentajes reales de descarte y su correspondiente reposición.
      </p>

      <p>
        Además, se discute la relación entre la longevidad productiva de las vacas y la necesidad de reposición, mostrando cómo extender la vida útil del rodeo puede reducir costos y mejorar la eficiencia. 
        El artículo propone una mirada integral, combinando datos técnicos con conceptos de manejo, para facilitar la toma de decisiones estratégicas en los sistemas de cría.
      </p>
      `,
    image: "/img/descarte-por-edad.png?height=400&width=600",
    downloadUrl: "/downloads/descarte-por-edad.pdf",
    downloadUrl2:"",
    download2:"tablas",
    publishedAt: "2023-08-10",
  },
  {
    id: 4,
    slug: "ev-vacas-cria",
    title: "EV para Vacas de Cría",
    summary: "Análisis del equivalente vaca (EV) para distintas condiciones de manejo en sistemas de cría.",
    content: `
      <h2>EV para Vacas de Cría: Análisis y Simulación</h2>
      <p>
        Este artículo presenta el concepto de Equivalente Vaca (EV) aplicado a sistemas de cría bovina, con el objetivo de ajustar la carga animal a la oferta forrajera. 
        Se consideran tanto los requerimientos nutricionales de la vaca como del ternero durante todo el año, analizando variaciones mensuales y promedios anuales.
      </p>

      <h2>Variaciones de Peso</h2>
      <p>
        El estudio contempla vacas con pesos de 420 kg y 450 kg para mostrar cómo influyen en el cálculo del EV.
      </p>

      <h2>Análisis de Lactancias y Destetes</h2>
      <p>
        Se exploran diferentes duraciones de lactancia, simulando escenarios de destete precoz con duraciones de entre 0 y 6 meses.
      </p>

      <h2>Simulador Interactivo</h2>
      <p>
        Como complemento, se incluye un archivo de Excel interactivo que simula el caso de una vaca promedio de 1 EV anual.
      </p>
      `,
    image: "/img/ev-vacas-cria.png?height=400&width=600",
    downloadUrl: "/downloads/ev-vacas-cria.pdf",
    downloadUrl2:"/downloads/ev-vacas-cria-material.zip",
    download2:"material",
    publishedAt: "2023-09-05",
  },
  {
    id: 5,
    slug: "tamano-vacas-cria",
    title: "Tamaño de Vacas de Cría",
    summary:
      "Propuesta de un tamaño para las madres, con foco en la relación peso al nacer - peso adulto",
    content: `
    <h2>Tamaño ideal para vacas de cría</h2>
    <p>
      La experiencia acumulada en la observación de rodeos de cría llevó a definir un rango de peso adulto ideal para las madres: entre 400 y 430 kg. 
      Aunque el plantel cumple con este criterio, se observa una gran dispersión de pesos al nacer, dependiendo del toro utilizado.
    </p>

    <h2>Peso al nacer como herramienta de selección</h2>
    <p>
      Dado que el tamaño adulto no puede seleccionarse directamente por el tiempo que implica, se utiliza el peso al nacer como indicador, ya que existe una correlación positiva entre este y el peso adulto. 
      La clave es encontrar un equilibrio: terneros con potencial para alcanzar el tamaño buscado, pero sin generar distocias.
    </p>

    <h2>Relación peso ternero - madre</h2>
    <p>
      Un gráfico compartido por Rodolfo Peralta en el grupo veterinario GREVET muestra cómo aumentan las distocias cuando el peso al nacer supera el 7% del peso de la madre. 
      A partir de allí se elaboró una tabla con pesos de referencia para minimizar riesgos.
    </p>

    <h2>Aplicación y limitaciones</h2>
    <p>
      La tabla propuesta permite identificar desviaciones respecto al peso ideal de la madre según el peso del ternero. 
      Aunque es una abstracción fisiológica, su utilidad está en detectar patrones, considerando que factores como la raza, el clima o la nutrición también inciden.
    </p>
    `,
    image: "/img/tamano-vacas-cria.png?height=400&width=600",
    downloadUrl: "/downloads/tamano-vacas-cria.pdf",
    downloadUrl2:"",
    download2:"",
    publishedAt: "2023-10-18",
  },
//   {
//     id: 6,
//     slug: "responsive-design-principles",
//     title: "Responsive Design Principles",
//     summary: "Learn the core principles of responsive web design to create websites that work well on any device.",
//     content: `
//       <h2>What is Responsive Design?</h2>
//       <p>Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It's about creating websites that provide an optimal viewing experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices from desktop computer monitors to mobile phones.</p>
      
//       <p>The term "responsive design" was coined by Ethan Marcotte in 2010 and has since become the standard approach for building websites.</p>
      
// `,
//     image: "/placeholder.svg?height=400&width=600",
//     downloadUrl: "/downloads/responsive-design-principles.pdf",
//     downloadUrl2:"",
//     download2:"",
//     publishedAt: "2023-11-30",
//   },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
