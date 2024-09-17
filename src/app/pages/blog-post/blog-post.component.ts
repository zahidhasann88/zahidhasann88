import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
  tags: string[];
  authorBio: string;
  authorAvatar: string;
  readingTime: number;
}

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  post: BlogPost | undefined;
  newComment: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.getPost(id);
  }

//   getPost(id: number): BlogPost {
//     return {
//       id: id,
//       title: 'Understanding Asynchronous Programming in JavaScript',
//       date: '2023-09-20',
//       author: 'Jane Doe',
//       authorBio: 'Jane is a senior frontend developer with 10 years of experience in building scalable web applications. She is passionate about JavaScript and loves sharing her knowledge with the community.',
//       authorAvatar: 'https://i.pravatar.cc/300',
//       readingTime: 5,
//       content: `
//         <p>Asynchronous programming is a crucial concept in JavaScript, especially when dealing with operations that might take some time to complete, such as fetching data from a server or reading a file.</p>

//         <h2>What is Asynchronous Programming?</h2>
//         <p>In synchronous programming, tasks are completed one after another. Each task waits for the previous one to complete before starting. However, this can lead to blocking behavior, especially for time-consuming operations.</p>

//         <p>Asynchronous programming allows multiple tasks to be processed simultaneously. When an asynchronous operation is initiated, the program continues to run without waiting for the operation to complete. Once the operation finishes, a callback function is triggered to handle the result.</p>

//         <h2>Promises in JavaScript</h2>
//         <p>Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner way to handle asynchronous code compared to traditional callbacks.</p>

//         <pre><code>
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     // Simulating an API call
//     setTimeout(() => {
//       const data = { id: 1, name: 'John Doe' };
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchData()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
//         </code></pre>

//         <h2>Async/Await</h2>
//         <p>Async/await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.</p>

//         <pre><code>
// async function getData() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();
//         </code></pre>

//         <p>By understanding and utilizing these asynchronous programming concepts, you can write more efficient and responsive JavaScript applications.</p>
//       `,
//       tags: ['JavaScript', 'Asynchronous Programming', 'Promises', 'Async/Await'],
//     };
//   }

getPost(id: number): BlogPost | undefined {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Mastering Angular: Best Practices for Modern Web Development',
      date: '2024-09-12',
      author: 'John Smith',
      authorBio: 'John is an experienced Angular developer and a passionate teacher.',
      authorAvatar: 'https://i.pravatar.cc/300?img=1',
      readingTime: 7,
      content: `
        <p>Angular is a powerful framework for building dynamic web applications. Here are some of the best practices to follow.</p>
        <h2>Follow Modular Architecture</h2>
        <p>Organizing your application into modules improves scalability and maintainability.</p>
        <h2>Lazy Loading</h2>
        <p>Lazy loading allows you to load modules only when needed, reducing the initial load time.</p>
      `,
      tags: ['Angular', 'Best Practices', 'Web Development']
    },
    {
      id: 2,
      title: 'A Deep Dive into TypeScript for JavaScript Developers',
      date: '2024-08-22',
      author: 'Jane Doe',
      authorBio: 'Jane is a senior developer and a TypeScript enthusiast.',
      authorAvatar: 'https://i.pravatar.cc/300?img=2',
      readingTime: 5,
      content: `
        <p>TypeScript enhances JavaScript by providing static types. Here’s how TypeScript can help JavaScript developers.</p>
        <h2>Types and Interfaces</h2>
        <p>Adding types and interfaces to your code makes it easier to maintain and reduces bugs.</p>
        <h2>Advanced Type Features</h2>
        <p>TypeScript comes with advanced features such as union types, intersection types, and type inference.</p>
      `,
      tags: ['TypeScript', 'JavaScript', 'Programming Languages']
    },
    {
      id: 3,
      title: 'The Future of JavaScript: Emerging Trends and Technologies',
      date: '2024-07-15',
      author: 'Sam Johnson',
      authorBio: 'Sam is a JavaScript expert with a keen interest in the future of web development.',
      authorAvatar: 'https://i.pravatar.cc/300?img=3',
      readingTime: 6,
      content: `
        <p>JavaScript is constantly evolving. Let’s look at some of the trends that will shape the future of JavaScript.</p>
        <h2>WebAssembly</h2>
        <p>WebAssembly allows running high-performance code alongside JavaScript.</p>
        <h2>Server-side Rendering</h2>
        <p>With server-side rendering, JavaScript frameworks like Next.js can boost performance and SEO.</p>
      `,
      tags: ['JavaScript', 'Web Development', 'Trends']
    }
  ];

  return blogPosts.find(post => post.id === id);
}

  share(platform: string) {
    // Implement sharing logic here
    console.log(`Sharing on ${platform}`);
  }

  submitComment() {
    // Implement comment submission logic here
    console.log('Submitting comment:', this.newComment);
    this.newComment = '';
  }
}