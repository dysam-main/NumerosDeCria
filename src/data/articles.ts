"use client"

export interface Article {
  id: number
  slug: string
  title: string
  summary: string
  content: string
  image: string
  downloadUrl: string
  publishedAt: string
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "understanding-web-development",
    title: "Understanding Modern Web Development",
    summary: "A comprehensive guide to the current state of web development and the tools that power it.",
    content: `
      <h2>The Evolution of Web Development</h2>
      <p>Web development has come a long way since the early days of static HTML pages. Today's web applications are complex, interactive, and often rival native applications in terms of functionality and user experience.</p>
      
      <p>Modern web development is characterized by a rich ecosystem of frameworks, libraries, and tools that help developers build better applications faster. From React and Vue to Next.js and Nuxt, the options are plentiful and constantly evolving.</p>
      
      <h2>Frontend Development</h2>
      <p>Frontend development has seen perhaps the most dramatic evolution. The introduction of JavaScript frameworks like React, Angular, and Vue has revolutionized how we build user interfaces. These frameworks provide a component-based architecture that makes it easier to build and maintain complex UIs.</p>
      
      <p>CSS has also evolved with preprocessors like Sass and Less, and utility-first frameworks like Tailwind CSS have gained popularity for their ability to streamline the styling process.</p>
      
      <h2>Backend Development</h2>
      <p>Backend development has seen a shift towards more lightweight, API-focused architectures. Node.js has enabled JavaScript to run on the server, allowing developers to use the same language throughout their stack.</p>
      
      <p>RESTful APIs and GraphQL have become standard ways of communicating between the frontend and backend, enabling more flexible and efficient data fetching.</p>
      
      <h2>The Future of Web Development</h2>
      <p>As we look to the future, several trends are emerging that will shape the next generation of web development. Server components, edge computing, and AI-assisted development are just a few of the exciting areas to watch.</p>
      
      <p>The web platform itself continues to evolve with new APIs and capabilities, making it possible to build experiences that were once only possible with native applications.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "/downloads/understanding-web-development.pdf",
    publishedAt: "2023-06-15",
  },
  {
    id: 2,
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks",
    summary: "Learn how to leverage React Hooks to write cleaner, more maintainable React components.",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They enable function components to have access to stateful logic that was previously only possible with class components.</p>
      
      <p>Hooks solve many of the problems that developers faced with class components, such as the difficulty of reusing stateful logic between components and the confusion around the 'this' keyword.</p>
      
      <h2>Core Hooks</h2>
      <p>React provides several built-in Hooks that cover most use cases:</p>
      <ul>
        <li><strong>useState</strong>: Allows function components to have local state.</li>
        <li><strong>useEffect</strong>: Performs side effects in function components, similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components.</li>
        <li><strong>useContext</strong>: Subscribes to React context without introducing nesting.</li>
        <li><strong>useReducer</strong>: An alternative to useState for complex state logic.</li>
        <li><strong>useCallback</strong>: Returns a memoized callback function.</li>
        <li><strong>useMemo</strong>: Returns a memoized value.</li>
        <li><strong>useRef</strong>: Returns a mutable ref object that persists for the lifetime of the component.</li>
      </ul>
      
      <h2>Custom Hooks</h2>
      <p>One of the most powerful features of Hooks is the ability to create custom Hooks. Custom Hooks allow you to extract component logic into reusable functions, making your code more modular and easier to test.</p>
      
      <p>For example, you might create a custom Hook to handle form validation, data fetching, or animation logic. These custom Hooks can then be shared across your application or even published as npm packages for others to use.</p>
      
      <h2>Best Practices</h2>
      <p>When working with Hooks, there are several best practices to keep in mind:</p>
      <ul>
        <li>Only call Hooks at the top level of your function components.</li>
        <li>Only call Hooks from React function components or custom Hooks.</li>
        <li>Name custom Hooks starting with "use" to follow convention.</li>
        <li>Use the ESLint plugin for Hooks to enforce these rules.</li>
      </ul>
      
      <p>By following these guidelines, you can ensure that your Hooks work correctly and your components remain maintainable.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "/downloads/mastering-react-hooks.pdf",
    publishedAt: "2023-07-22",
  },
  {
    id: 3,
    slug: "introduction-to-nextjs",
    title: "Introduction to Next.js",
    summary: "Discover why Next.js has become the go-to framework for building React applications.",
    content: `
      <h2>What is Next.js?</h2>
      <p>Next.js is a React framework that enables functionality such as server-side rendering, static site generation, and API routes. It provides a great developer experience with features like fast refresh and zero configuration.</p>
      
      <p>Created by Vercel, Next.js has gained widespread adoption in the React community for its ability to simplify the development of complex applications while providing excellent performance out of the box.</p>
      
      <h2>Key Features</h2>
      <p>Next.js comes with several key features that make it stand out:</p>
      <ul>
        <li><strong>Hybrid Rendering</strong>: Choose between static site generation (SSG), server-side rendering (SSR), and client-side rendering on a per-page basis.</li>
        <li><strong>File-based Routing</strong>: Create routes by adding files to the pages directory, with support for dynamic routes.</li>
        <li><strong>API Routes</strong>: Build API endpoints as Node.js serverless functions.</li>
        <li><strong>Image Optimization</strong>: Automatically optimize images with the built-in Image component.</li>
        <li><strong>CSS Support</strong>: Built-in support for CSS Modules, Sass, and other styling solutions.</li>
        <li><strong>Fast Refresh</strong>: See changes instantly without losing component state.</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Getting started with Next.js is straightforward. You can create a new project using create-next-app, which sets up everything automatically for you:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <p>This command creates a new Next.js project with a default directory structure and configuration. From there, you can start building your application by adding pages, components, and styles.</p>
      
      <h2>Deployment</h2>
      <p>Next.js applications can be deployed to any hosting provider that supports Node.js. However, deploying to Vercel provides the best experience, with features like preview deployments, analytics, and edge functions.</p>
      
      <p>Other popular hosting options include Netlify, AWS Amplify, and traditional Node.js hosts like Heroku or DigitalOcean.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js has established itself as a powerful framework for building React applications. Its combination of developer experience, performance optimizations, and flexibility makes it an excellent choice for projects of all sizes.</p>
      
      <p>Whether you're building a simple blog or a complex web application, Next.js provides the tools you need to succeed.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "/downloads/introduction-to-nextjs.pdf",
    publishedAt: "2023-08-10",
  },
  {
    id: 4,
    slug: "css-grid-layout",
    title: "Mastering CSS Grid Layout",
    summary: "Learn how to create complex layouts with CSS Grid, the most powerful layout system available in CSS.",
    content: `
      <h2>Introduction to CSS Grid</h2>
      <p>CSS Grid Layout is a two-dimensional layout system designed specifically for the web. It allows you to create complex grid-based layouts with ease, without having to rely on floats or positioning hacks.</p>
      
      <p>Unlike Flexbox, which is primarily designed for one-dimensional layouts, Grid is designed for two-dimensional layouts, making it ideal for creating entire page layouts or complex components.</p>
      
      <h2>Basic Concepts</h2>
      <p>To use CSS Grid, you need to understand a few key concepts:</p>
      <ul>
        <li><strong>Grid Container</strong>: The element on which display: grid is applied.</li>
        <li><strong>Grid Items</strong>: The direct children of the grid container.</li>
        <li><strong>Grid Lines</strong>: The horizontal and vertical lines that divide the grid.</li>
        <li><strong>Grid Tracks</strong>: The spaces between adjacent grid lines (rows and columns).</li>
        <li><strong>Grid Areas</strong>: Rectangular areas on the grid made up of one or more grid cells.</li>
      </ul>
      
      <h2>Creating a Grid</h2>
      <p>To create a grid, you simply need to set the display property of an element to grid:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}</code></pre>
      
      <p>This creates a grid with three equal-width columns and automatically sized rows, with a 20px gap between grid items.</p>
      
      <h2>Placing Items</h2>
      <p>Grid items can be placed explicitly using properties like grid-column and grid-row:</p>
      <pre><code>.item {
  grid-column: 1 / 3; /* Start at line 1, end at line 3 */
  grid-row: 2 / 4; /* Start at line 2, end at line 4 */
}</code></pre>
      
      <p>Alternatively, you can use grid-template-areas to create a visual representation of your layout:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }</code></pre>
      
      <h2>Responsive Grids</h2>
      <p>CSS Grid makes it easy to create responsive layouts without media queries, thanks to features like minmax() and auto-fill/auto-fit:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}</code></pre>
      
      <p>This creates a grid where columns are at least 250px wide, but will expand to fill available space. The number of columns adjusts automatically based on the container width.</p>
      
      <h2>Conclusion</h2>
      <p>CSS Grid is a powerful tool for creating layouts on the web. With its intuitive syntax and flexible capabilities, it has revolutionized how we approach web layout design.</p>
      
      <p>By mastering CSS Grid, you'll be able to create complex, responsive layouts with less code and greater control than ever before.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "/downloads/css-grid-layout.pdf",
    publishedAt: "2023-09-05",
  },
  {
    id: 5,
    slug: "typescript-essentials",
    title: "TypeScript Essentials",
    summary:
      "A beginner's guide to TypeScript, the typed superset of JavaScript that improves code quality and developer experience.",
    content: `
      <h2>What is TypeScript?</h2>
      <p>TypeScript is a strongly typed programming language that builds on JavaScript. It adds static types to JavaScript, which helps catch errors early in the development process and improves code quality and maintainability.</p>
      
      <p>Developed and maintained by Microsoft, TypeScript has gained widespread adoption in the JavaScript community, particularly for large-scale applications where type safety becomes increasingly important.</p>
      
      <h2>Why Use TypeScript?</h2>
      <p>There are several compelling reasons to use TypeScript:</p>
      <ul>
        <li><strong>Type Safety</strong>: Catch type-related errors at compile time rather than runtime.</li>
        <li><strong>Better IDE Support</strong>: Enjoy improved autocompletion, navigation, and refactoring tools.</li>
        <li><strong>Enhanced Documentation</strong>: Types serve as documentation that stays up-to-date.</li>
        <li><strong>Safer Refactoring</strong>: Make large-scale changes with confidence.</li>
        <li><strong>Modern JavaScript Features</strong>: Use the latest ECMAScript features and compile to older versions for compatibility.</li>
      </ul>
      
      <h2>Basic Types</h2>
      <p>TypeScript includes several basic types that you'll use frequently:</p>
      <pre><code>// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

// String
let color: string = "blue";
let greeting: string = \`Hello, my name is ${name}\`;

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // Generic array type

// Tuple
let x: [string, number] = ["hello", 10];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string";
notSure = false; // okay, definitely a boolean

// Void
function warnUser(): void {
  console.log("This is a warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}

// Object
let obj: object = {};</code></pre>
      
      <h2>Interfaces</h2>
      <p>Interfaces are a powerful way to define contracts within your code and with code outside your project:</p>
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Read-only property
}

function createUser(user: User): User {
  return user;
}

const newUser = createUser({
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date()
});</code></pre>
      
      <h2>Functions</h2>
      <p>TypeScript allows you to specify the types of function parameters and return values:</p>
      <pre><code>function add(x: number, y: number): number {
  return x + y;
}

// Optional and default parameters
function buildName(firstName: string, lastName?: string): string {
  return lastName ? \`\${firstName} \${lastName}\` : firstName;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// Function types
let myAdd: (x: number, y: number) => number = add;</code></pre>
      
      <h2>Getting Started</h2>
      <p>To start using TypeScript, you'll need to install it and set up a configuration file:</p>
      <pre><code>npm install -g typescript
tsc --init</code></pre>
      
      <p>This creates a tsconfig.json file that configures the TypeScript compiler. From there, you can start writing TypeScript files with a .ts extension and compile them to JavaScript using the tsc command.</p>
      
      <h2>Conclusion</h2>
      <p>TypeScript offers significant benefits for JavaScript developers, particularly for larger projects or teams. By adding static types to JavaScript, it helps catch errors earlier in the development process and improves the developer experience with better tooling support.</p>
      
      <p>While there is a learning curve, the investment in learning TypeScript pays off in terms of code quality, maintainability, and developer productivity.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "/downloads/typescript-essentials.pdf",
    publishedAt: "2023-10-18",
  },
  {
    id: 6,
    slug: "responsive-design-principles",
    title: "Responsive Design Principles",
    summary: "Learn the core principles of responsive web design to create websites that work well on any device.",
    content: `
      <h2>What is Responsive Design?</h2>
      <p>Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It's about creating websites that provide an optimal viewing experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices from desktop computer monitors to mobile phones.</p>
      
      <p>The term "responsive design" was coined by Ethan Marcotte in 2010 and has since become the standard approach for building websites.</p>
      
      <h2>Core Principles</h2>
      <p>Responsive design is built on several core principles:</p>
      <ul>
        <li><strong>Fluid Grids</strong>: Using relative units like percentages instead of fixed units like pixels for layout elements.</li>
        <li><strong>Flexible Images</strong>: Ensuring images scale within their containing elements.</li>
        <li><strong>Media Queries</strong>: Applying different styles based on device characteristics, particularly the viewport width.</li>
        <li><strong>Mobile-First Approach</strong>: Designing for mobile devices first, then progressively enhancing the design for larger screens.</li>
      </ul>
      
      <h2>Fluid Grids</h2>
      <p>Fluid grids are a fundamental aspect of responsive design. Instead of using fixed-width layouts, fluid grids use relative units to ensure that the layout adjusts to the viewport size:</p>
      <pre><code>.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.column {
  width: 33.333%;
  float: left;
  padding: 0 15px;
}</code></pre>
      
      <p>Modern CSS layout techniques like Flexbox and Grid make it even easier to create fluid layouts:</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}</code></pre>
      
      <h2>Flexible Images</h2>
      <p>Images need to scale with their containing elements to avoid overflow issues on smaller screens. This can be achieved with a simple CSS rule:</p>
      <pre><code>img {
  max-width: 100%;
  height: auto;
}</code></pre>
      
      <p>For more complex scenarios, you might use the picture element or the srcset attribute to provide different image sources based on the viewport size or pixel density.</p>
      
      <h2>Media Queries</h2>
      <p>Media queries allow you to apply different styles based on the characteristics of the device, most commonly the viewport width:</p>
      <pre><code>/* Base styles for mobile */
.nav {
  display: none;
}

/* Styles for tablets and up */
@media (min-width: 768px) {
  .nav {
    display: block;
  }
  .mobile-menu-button {
    display: none;
  }
}</code></pre>
      
      <p>Common breakpoints include:</p>
      <ul>
        <li>320px - 480px: Mobile devices</li>
        <li>481px - 768px: iPads, tablets</li>
        <li>769px - 1024px: Small screens, laptops</li>
        <li>1025px - 1200px: Desktops, large screens</li>
        <li>1201px and more: Extra large screens, TV</li>
      </ul>
      
      <h2>Mobile-First Approach</h2>
      <p>The mobile-first approach involves designing for mobile devices first, then progressively enhancing the design for larger screens. This approach has several advantages:</p>
      <ul>
        <li>It forces you to focus on the essential content and functionality.</li>
        <li>It generally results in faster-loading websites, as the base styles are simpler.</li>
        <li>It aligns with the growing trend of mobile internet usage.</li>
      </ul>
      
      <p>In practice, this means writing your base CSS for mobile devices and then using min-width media queries to add styles for larger screens:</p>
      <pre><code>/* Base styles for mobile */
.container {
  padding: 20px;
}

/* Styles for tablets */
@media (min-width: 768px) {
  .container {
    padding: 40px;
  }
}

/* Styles for desktops */
@media (min-width: 1024px) {
  .container {
    padding: 60px;
    max-width: 1200px;
    margin: 0 auto;
  }
}</code></pre>
      
      <h2>Testing Responsive Designs</h2>
      <p>Testing is a crucial part of responsive design. You should test your website on a variety of devices and browsers to ensure it works well everywhere. Tools that can help include:</p>
      <ul>
        <li>Browser developer tools, which include device em</li>
        <li>Real devices for testing</li>
        <li>Online services like BrowserStack or Responsively App</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Responsive design is no longer optional—it's a necessity for providing a good user experience across the wide range of devices used to access the web today. By following the principles of fluid grids, flexible images, media queries, and a mobile-first approach, you can create websites that work well on any device.</p>
      
      <p>As web technologies continue to evolve, the specific techniques used for responsive design may change, but the core principles remain the same: creating websites that adapt to the user's device and provide an optimal experience regardless of how they access your content.</p>
    `,
    image: "/placeholder.svg?height=400&width=600",
    downloadUrl: "/downloads/responsive-design-principles.pdf",
    publishedAt: "2023-11-30",
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
