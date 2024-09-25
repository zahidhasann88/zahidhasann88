import { Blog, BlogPost } from '../models/global-state.model';

export const BLOGS: ReadonlyArray<Readonly<Blog>> = [
  {
    id: 1,
    title: 'Understanding Asynchronous Programming in JavaScript',
    date: '2024-09-25',
    excerpt:
      'In this post, we delve into asynchronous programming concepts in JavaScript, including callbacks, promises, and async/await.',
    tags: ['JavaScript', 'Asynchronous Programming', 'Web Development'],
    category: 'Web Development',
  },
] as const;

export const BLOG_POSTS: ReadonlyArray<Readonly<BlogPost>> = [
  {
    id: 1,
    title: 'Understanding Asynchronous Programming in JavaScript',
    date: '2024-09-25',
    author: 'Jane Doe',
    readingTime: 10,
    content: `
      <h1>Understanding Asynchronous Programming in JavaScript</h1>
      
      <p>JavaScript's asynchronous nature is one of its most powerful features, allowing developers to create responsive and efficient web applications. In this post, we'll explore the core concepts of asynchronous programming in JavaScript, focusing on callbacks, promises, and the modern async/await syntax.</p>

      <h2>1. The Need for Asynchronous Programming</h2>
      <p>In JavaScript, many operations are asynchronous, meaning they don't block the execution of the rest of your code while waiting for a result. This is crucial for tasks like fetching data from a server or reading files, which can take an unpredictable amount of time.</p>

      <h2>2. Callbacks: The Foundation of Asynchronous JavaScript</h2>
      <p>Callbacks were the original solution to handling asynchronous operations in JavaScript. A callback is a function passed as an argument to another function, to be executed once the asynchronous operation completes.</p>

      <pre><code>
        function fetchData(callback) {
          setTimeout(() => {
            callback('Data received');
          }, 2000);
        }

        fetchData((result) => {
          console.log(result); // Outputs: Data received
        });
      </code></pre>

      <p>While effective, callbacks can lead to complex nested structures when dealing with multiple asynchronous operations.</p>

      <h2>3. Promises: Structuring Asynchronous Code</h2>
      <p>Promises provide a more structured way to handle asynchronous operations. A promise represents a value that may not be available immediately but will be resolved at some point in the future.</p>

      <pre><code>
        function fetchData() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('Data received');
            }, 2000);
          });
        }

      fetchData()
        .then(result => console.log(result))
        .catch(error => console.error(error));
      </code></pre>

      <p>Promises allow for better error handling and make it easier to chain multiple asynchronous operations.</p>

      <h2>4. Async/Await: Synchronous-Style Asynchronous Code</h2>
      <p>Async/await, introduced in ES2017, provides a more intuitive way to work with promises. It allows you to write asynchronous code that looks and behaves like synchronous code.</p>

      <pre><code>
        async function getData() {
          try {
            const result = await fetchData();
            console.log(result);
          } catch (error) {
            console.error(error);
          }
        }

getData();
      </code></pre>

      <p>This syntax makes asynchronous code easier to read and maintain, especially when dealing with multiple asynchronous operations.</p>

      <h2>5. Best Practices for Asynchronous Programming</h2>
      <ul>
        <li>Always handle errors in asynchronous operations</li>
        <li>Use async/await for cleaner, more readable code</li>
        <li>Avoid mixing callbacks and promises</li>
        <li>Consider using libraries like Axios for HTTP requests, which provide a promise-based API</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Understanding asynchronous programming is crucial for any JavaScript developer. While callbacks are still used in some contexts, promises and async/await provide more powerful and intuitive ways to handle asynchronous operations. By mastering these concepts, you'll be better equipped to write efficient, responsive, and maintainable JavaScript code.</p>
    `,
    tags: ['JavaScript', 'Asynchronous Programming', 'Web Development', 'Callbacks', 'Promises', 'Async/Await'],
  },
] as const;