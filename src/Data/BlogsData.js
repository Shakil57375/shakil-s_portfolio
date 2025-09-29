const blogs = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt:
      'Learn how to use React hooks to manage state and side effects in your functional components.',
    fullContent: `React Hooks revolutionized the way we write React components by allowing us to use state and other React features in functional components. In this comprehensive guide, we'll explore the most commonly used hooks and how they can improve your development workflow.

**useState Hook**  
The useState hook is the most fundamental hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it.

**useEffect Hook**  
The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in React class components.

**Custom Hooks**  
One of the most powerful features of React Hooks is the ability to create custom hooks. Custom hooks allow you to extract component logic into reusable functions, making your code more modular and easier to test.

**Best Practices**  
When working with hooks, always follow the rules of hooks: only call hooks at the top level of your React function, and only call hooks from React functions. This ensures that hooks are called in the same order every time the component renders.`,
    author: 'Shakil Hossain',
    date: '2024-01-15',
    readTime: '5 min read',
    image:
      'https://studio.uxpincdn.com/studio/wp-content/uploads/2024/07/React-Hooks-1024x512.webp',
    category: 'React',
    views: 1250,
  },
  {
    id: 2,
    title: 'Advanced CSS Grid Techniques',
    excerpt:
      'Master CSS Grid with advanced techniques for creating complex, responsive layouts.',
    fullContent: `CSS Grid has changed the way we build layouts on the web. Beyond simple row and column arrangements, Grid allows for complex designs that were once only possible with hacks or nested structures.

**Implicit vs Explicit Grids**  
Understanding the difference between implicit and explicit grids is essential. Explicit grids are defined by the developer, while implicit grids are automatically created when items are placed outside of the defined structure.

**Grid Template Areas**  
Named grid areas can simplify complex layouts by making your CSS more readable. They allow you to assign names to different sections of your layout and place items accordingly.

**Responsive Layouts**  
CSS Grid works seamlessly with media queries. You can change the number of columns, rows, or even rearrange entire layouts based on screen size.

**Best Practices**  
Keep your grid definitions clean, use repeat() and minmax() functions for flexibility, and combine Grid with Flexbox for optimal results.`,
    author: 'Shakil Hossain',
    date: '2024-01-10',
    readTime: '8 min read',
    image:
      'https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/CSS-GRID-3.png',
    category: 'CSS',
    views: 980,
  },
  {
    id: 3,
    title: 'Building Scalable Node.js Applications',
    excerpt:
      'Best practices for building and scaling Node.js applications in production environments.',
    fullContent: `Node.js is great for building fast and scalable network applications. However, scaling requires careful planning and architecture.

**Event-Driven Architecture**  
Node.js is inherently event-driven. Use non-blocking I/O and async programming to handle thousands of concurrent requests efficiently.

**Clustering**  
Node.js applications run on a single thread. Use the cluster module to create multiple processes that share the same port, taking advantage of multi-core CPUs.

**Database Optimization**  
Avoid blocking queries by using async database drivers. Caching results with Redis or in-memory stores can drastically improve performance.

**Monitoring & Logging**  
Use tools like PM2 or Docker for process management and logging systems like Winston to track application health.

**Scaling Strategies**  
Start small with horizontal scaling (multiple servers) and grow into microservices when your application requires more modularity.`,
    author: 'Shakil Hossain',
    date: '2024-01-05',
    readTime: '12 min read',
    image:
      'https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png',
    category: 'Node.js',
    views: 2100,
  },
  {
    id: 4,
    title: 'Modern JavaScript ES2024 Features',
    excerpt:
      'Explore the latest JavaScript features and how they can improve your development workflow.',
    fullContent: `JavaScript continues to evolve, with ES2024 introducing powerful features that simplify code and improve performance.

**Pattern Matching**  
Pattern matching provides a cleaner way to check and destructure complex data structures, similar to switch statements but more powerful.

**Pipeline Operator**  
The pipeline operator (|>) allows you to write cleaner, functional-style code by passing the result of one function directly into the next.

**New Array Methods**  
Methods like findLast() and findLastIndex() make working with arrays more intuitive when searching from the end.

**Best Practices**  
Adopt new features gradually. Always ensure browser compatibility or use a transpiler like Babel for backward compatibility.`,
    author: 'Shakil Hossain',
    date: '2023-12-28',
    readTime: '6 min read',
    image:
      'https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png',
    category: 'JavaScript',
    views: 1750,
  },
  {
    id: 5,
    title: 'TypeScript Best Practices',
    excerpt:
      'Learn TypeScript best practices for writing maintainable and type-safe code.',
    fullContent: `TypeScript brings static typing to JavaScript, improving developer productivity and code safety.

**Strict Mode**  
Always enable strict mode. It forces better coding practices by disallowing implicit any types.

**Type Aliases & Interfaces**  
Use interfaces for contracts and type aliases for unions or complex type definitions.

**Avoid Overusing "any"**  
The "any" type defeats the purpose of TypeScript. Use unknown or generic types instead when flexibility is needed.

**Folder Structure**  
Organize your types in a separate folder for reusability and cleaner project structure.

**Best Practices**  
Document your types, use enums sparingly, and prefer readonly for immutable data.`,
    author: 'Shakil Hossain',
    date: '2023-12-20',
    readTime: '10 min read',
    image:
      'https://wearedevelopers.imgix.net/magazine/articles/554/images/hero/odPaQHSbArSIFzZbUzlE-1740483365.jpeg?w=720&auto=compress,format',
    category: 'TypeScript',
    views: 1420,
  },
  {
    id: 6,
    title: 'Web Performance Optimization',
    excerpt:
      'Techniques and tools for optimizing web application performance and user experience.',
    fullContent: `Web performance is a key factor in user experience and SEO ranking. A slow site can cost traffic and revenue.

**Image Optimization**  
Use modern image formats like WebP and compress images without losing quality.

**Lazy Loading**  
Load images and components only when they are needed, reducing initial load time.

**Code Splitting**  
Split your JavaScript bundles to serve only the code required for the current page.

**Caching**  
Leverage browser caching and CDNs to reduce server load and improve performance.

**Monitoring**  
Tools like Lighthouse and WebPageTest help identify bottlenecks and provide actionable insights.`,
    author: 'Shakil Hossain',
    date: '2023-12-15',
    readTime: '9 min read',
    image: 'https://www.xenonstack.com/hubfs/web-performance-optimization.png',
    category: 'Performance',
    views: 1680,
  },
  {
    id: 7,
    title: 'Authentication in MERN Stack',
    excerpt:
      'Step-by-step guide to implementing secure authentication in MERN stack applications.',
    fullContent: `Authentication is a core feature of modern web applications. In the MERN stack, you can build robust authentication systems with ease.

**User Registration**  
Collect basic information and hash passwords securely using bcrypt.

**Login & JWT**  
Use JSON Web Tokens (JWT) for stateless authentication. Store tokens in HTTP-only cookies for security.

**Role-Based Access Control (RBAC)**  
Assign roles like admin, editor, or user to restrict access to certain routes.

**Best Practices**  
Never store passwords in plain text, use HTTPS, and implement refresh tokens for long sessions.`,
    author: 'Shakil Hossain',
    date: '2023-11-20',
    readTime: '14 min read',
    image:
      'https://media.licdn.com/dms/image/v2/D4E12AQG_mMU5HPf4xA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710822104264?e=2147483647&v=beta&t=chbqXkr2AAwlvc8fiqZekajUtaTmPL9EnbU1FJ5ZbBg',
    category: 'MERN',
    views: 2150,
  },
];

export default blogs;