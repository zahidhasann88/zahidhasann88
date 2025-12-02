import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  BlogPost,
  BlogCategory,
  LearningResource,
} from '../models/blog.interfaces';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogPostsSubject = new BehaviorSubject<BlogPost[]>([]);
  private categoriesSubject = new BehaviorSubject<BlogCategory[]>([]);

  constructor() {
    this.initializeData();
  }

  private initializeData(): void {
    // Initialize categories
    const categories: BlogCategory[] = [
      {
        id: 'web-development',
        name: 'Web Development',
        description: 'Frontend and backend web development topics',
        color: '#3B82F6',
        icon: 'CODE',
      },
      {
        id: 'programming-languages',
        name: 'Programming Languages',
        description: 'Learn different programming languages',
        color: '#10B981',
        icon: 'BOOK_OPEN',
      },
      {
        id: 'career-development',
        name: 'Career Development',
        description: 'Tips for advancing your programming career',
        color: '#8B5CF6',
        icon: 'GRADUATION_CAP',
      },
      {
        id: 'tutorials',
        name: 'Tutorials',
        description: 'Step-by-step guides and tutorials',
        color: '#F59E0B',
        icon: 'LIGHTBULB',
      },
      {
        id: 'resources',
        name: 'Learning Resources',
        description: 'Curated lists of learning materials',
        color: '#EF4444',
        icon: 'TROPHY',
      },
    ];

    // Initialize blog posts
    const blogPosts: BlogPost[] = [
      {
        id: '1',
        title: 'Some Useful Resources Which Helped Me Grow My Skills',
        slug: 'useful-resources-for-developers',
        excerpt:
          'A collection of resources that genuinely helped me grow as a developer. These are the materials I keep coming back to for learning and improvement.',
        content: this.getPersonalJourneyContent(),
        author: 'Zahid Hasan',
        publishedDate: new Date('2024-10-11'),
        tags: [
          'learning',
          'resources',
          'journey',
          'javascript',
          'nodejs',
          'go',
          'system-design',
          'career',
          'development',
        ],
        category: 'resources',
        readTime: 12,
        featured: true,
        coverImage: '/assets/images/nodejs-go-resources.png',
        metaDescription:
          'A personal collection of development resources that helped me grow my skills in system design, JavaScript, Node.js, Go, and more.',
      },
    ];

    this.categoriesSubject.next(categories);
    this.blogPostsSubject.next(blogPosts);
  }

  // Public methods
  getBlogPosts(): Observable<BlogPost[]> {
    return this.blogPostsSubject.asObservable();
  }

  getCategories(): Observable<BlogCategory[]> {
    return this.categoriesSubject.asObservable();
  }

  getBlogPostBySlug(slug: string): Observable<BlogPost | undefined> {
    return new BehaviorSubject(
      this.blogPostsSubject.value.find((post) => post.slug === slug)
    ).asObservable();
  }

  getFeaturedPosts(): Observable<BlogPost[]> {
    return new BehaviorSubject(
      this.blogPostsSubject.value.filter((post) => post.featured)
    ).asObservable();
  }

  getPostsByCategory(categoryId: string): Observable<BlogPost[]> {
    return new BehaviorSubject(
      this.blogPostsSubject.value.filter((post) => post.category === categoryId)
    ).asObservable();
  }

  getPostsByTag(tag: string): Observable<BlogPost[]> {
    return new BehaviorSubject(
      this.blogPostsSubject.value.filter((post) => post.tags.includes(tag))
    ).asObservable();
  }

  // Method to add new blog post (for future use)
  addBlogPost(post: BlogPost): void {
    const currentPosts = this.blogPostsSubject.value;
    this.blogPostsSubject.next([...currentPosts, post]);
  }

  // Method to update existing blog post (for future use)
  updateBlogPost(updatedPost: BlogPost): void {
    const currentPosts = this.blogPostsSubject.value;
    const index = currentPosts.findIndex((post) => post.id === updatedPost.id);
    if (index !== -1) {
      currentPosts[index] = updatedPost;
      this.blogPostsSubject.next([...currentPosts]);
    }
  }

  // Personal Learning Journey for the first blog post
  private getPersonalJourneyContent(): string {
    return `
      <div class="blog-content learning-journey">
        <p>Over the years, I've collected a bunch of resources that genuinely helped me grow as a software developer. These aren't just random links I bookmarked and forgot about – these are the ones I keep coming back to. I'm sharing them here in case they help you too.</p>

        <h2>📚 System Design</h2>
        <p>System design used to intimidate me. How do you build systems that can handle millions of users? How do Netflix and Twitter scale their infrastructure?</p>
        
        <h3>My Top Pick:</h3>
        <ul>
          <li><strong>Alex Xu's "System Design Interview"</strong> books – Honestly, these books changed how I think about building systems. They break down complex architectures into understandable chunks with great diagrams.</li>
        </ul>

        <h3>Additional Resources:</h3>
        <ul>
          <li><a href="https://blog.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare Blog</a> – Real-world insights into how a massive CDN handles internet-scale problems</li>
          <li><a href="https://netflixtechblog.com/" target="_blank" rel="noopener noreferrer">Netflix Tech Blog</a> – Learn from one of the best engineering teams in the world</li>
        </ul>
        
        <p>These blogs show you how real companies solve real problems. It's not just theory – it's battle-tested knowledge.</p>

        <h2>🏗️ Software Architecture</h2>
        <p>Architecture is about making decisions that your future self won't regret. It's the difference between code that's easy to maintain and code that becomes a nightmare.</p>
        
        <h3>Resources I recommend:</h3>
        <ul>
          <li><strong>REST API Tutorial</strong> – <a href="https://www.restapitutorial.com/" target="_blank" rel="noopener noreferrer">restapitutorial.com</a> – A solid foundation for understanding RESTful principles</li>
          <li><strong>Tech blogs</strong> mentioned above (Cloudflare, Netflix) – They often discuss architectural decisions and tradeoffs</li>
        </ul>
        
        <p>The best way to learn architecture? Read about other people's mistakes and successes. These resources give you that perspective.</p>

        <h2>💻 Core Technologies</h2>
        
        <h3>JavaScript & Node.js</h3>
        
        <p>As someone who specializes in Node.js, I've spent countless hours with JavaScript. Here are the resources that took me from intermediate to confident:</p>
        
        <h4>JavaScript Fundamentals:</h4>
        <ul>
          <li><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">JavaScript.info</a> – This is THE best JavaScript tutorial out there. Seriously. It covers everything from basics to advanced concepts with clear explanations.</li>
          <li><a href="https://nodeschool.io/" target="_blank" rel="noopener noreferrer">NodeSchool</a> – Interactive workshops that let you learn by doing. Perfect for hands-on learners.</li>
        </ul>
        
        <h4>TypeScript:</h4>
        <ul>
          <li><a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">Official TypeScript Docs</a> – Once you're comfortable with JavaScript, TypeScript adds that type safety we all need. The official docs are surprisingly readable.</li>
        </ul>

        <h3>Golang</h3>
        <p>Go is my secondary language, and I love its simplicity. Here's where I learned it:</p>
        <ul>
          <li><a href="https://gobyexample.com/" target="_blank" rel="noopener noreferrer">Go by Example</a> – Short, practical examples that get straight to the point</li>
          <li><a href="https://appliedgo.com/" target="_blank" rel="noopener noreferrer">Applied Go</a> – More advanced topics explained clearly</li>
        </ul>
        
        <p>Go's beauty is in its simplicity. These resources reflect that philosophy.</p>

        <h2>�️ Database & SQL</h2>
        <p>You can't be a good backend developer without understanding databases. These interactive tutorials made SQL click for me:</p>
        <ul>
          <li><a href="https://sqlzoo.net/wiki/SQL_Tutorial" target="_blank" rel="noopener noreferrer">SQLZoo</a> – Interactive SQL tutorials with instant feedback</li>
          <li><a href="https://sqlbolt.com/" target="_blank" rel="noopener noreferrer">SQLBolt</a> – Another great interactive platform for learning SQL from scratch</li>
        </ul>
        
        <p>Both let you practice queries in your browser. No setup needed.</p>
        <h2>🐧 Linux & DevOps</h2>
        
        <p>Whether you like it or not, you'll be working with Linux servers. Might as well get comfortable with the command line:</p>
        <ul>
          <li><a href="https://labex.io/linuxjourney" target="_blank" rel="noopener noreferrer">Linux Journey (via LabEx)</a> – A gentle introduction to Linux commands and concepts</li>
        </ul>
        
        <p>Start with the basics. You don't need to be a Linux guru, but knowing your way around the terminal makes everything easier.</p>

        <h2>🔧 Developer Tools</h2>
        
        <h3>Regular Expressions</h3>
        
        <p>Regex looks like someone smashed their keyboard, but it's incredibly powerful:</p>
        <ul>
          <li><a href="https://regexr.com/" target="_blank" rel="noopener noreferrer">RegExr</a> – Interactive regex tester with a cheat sheet. This tool has saved me hours of frustration.</li>
        </ul>
        
        <p>Don't memorize regex. Just bookmark this site and refer to it whenever you need to write a pattern.</p>

        <h2>🧠 Data Structures & Algorithms</h2>
        <p>Let's be honest – coding interviews can be tough. Here's what helped me prepare:</p>
        <h3>Blind 75 Problems:</h3>
        <p>These 75 LeetCode problems cover the most common interview patterns. I found this excellent video series that walks through all of them:</p>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=KLlXCFG5TnA&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf" target="_blank" rel="noopener noreferrer">NeetCode's Blind 75 Playlist</a> – Clear explanations with multiple approaches for each problem</li>
        </ul>
        
        <p>Don't try to memorize solutions. Understand the patterns, and you'll be able to solve similar problems.</p>

        <h2>📝 Final Thoughts</h2>
        <p>Learning to code is a marathon, not a sprint. I still refer to these resources regularly, even after years of experience. Some days you'll feel like you're not making progress, and that's okay. Keep at it.</p>
        
        <p>These resources are free (or mostly free), so there's no excuse not to start. Pick one topic, choose a resource, and spend 30 minutes on it today. That's how I started, and that's how you'll grow too.</p>
        
        <p>What are your favorite learning resources? I'm always looking to add more to my list. Feel free to share them!</p>
      </div>
    `;
  }
}
