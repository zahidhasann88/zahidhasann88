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

  getPost(id: number): BlogPost {
    return {
      id: id,
      title: 'Understanding Asynchronous Programming in JavaScript',
      date: '2023-09-20',
      author: 'Jane Doe',
      authorBio: 'Jane is a senior frontend developer with 10 years of experience in building scalable web applications. She is passionate about JavaScript and loves sharing her knowledge with the community.',
      authorAvatar: 'https://i.pravatar.cc/300',
      readingTime: 5,
      content: `
        <p>Asynchronous programming is a crucial concept in JavaScript, especially when dealing with operations that might take some time to complete, such as fetching data from a server or reading a file.</p>

        <h2>What is Asynchronous Programming?</h2>
        <p>In synchronous programming, tasks are completed one after another. Each task waits for the previous one to complete before starting. However, this can lead to blocking behavior, especially for time-consuming operations.</p>

        <p>Asynchronous programming allows multiple tasks to be processed simultaneously. When an asynchronous operation is initiated, the program continues to run without waiting for the operation to complete. Once the operation finishes, a callback function is triggered to handle the result.</p>

        <h2>Promises in JavaScript</h2>
        <p>Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner way to handle asynchronous code compared to traditional callbacks.</p>

        <pre><code>
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
        </code></pre>

        <h2>Async/Await</h2>
        <p>Async/await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.</p>

        <pre><code>
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData();
        </code></pre>

        <p>By understanding and utilizing these asynchronous programming concepts, you can write more efficient and responsive JavaScript applications.</p>
      `,
      tags: ['JavaScript', 'Asynchronous Programming', 'Promises', 'Async/Await'],
    };
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