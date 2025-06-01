import { Blog, BlogPost } from '../models/global-state.model';
import { generateSlug } from './../../utils/slug';

export const BLOGS: ReadonlyArray<Readonly<Blog>> = [
  {
    id: generateSlug("My Go-To Learning Resources: A Developer's Toolkit"),
    title: "My Go-To Learning Resources: A Developer's Toolkit",
    excerpt: "A curated collection of websites and books that have genuinely helped me grow as a programmer. From JavaScript to System Design, these are the resources I actually use and return to.",
    category: "Resources",
    tags: ["learning", "resources", "javascript", "python", "rust", "go", "typescript", "sql", "nodejs", "system-design"],
    date: new Date('2025-05-31'),
    readingTime: 8
  },
  {
    id: generateSlug("Exploring the Depths of TypeScript"),
    title: "Exploring the Depths of TypeScript",
    excerpt: "A deep dive into TypeScript's advanced features, including generics, decorators, and more.",
    category: "Programming",
    tags: ["typescript", "programming", "javascript"],
    date: new Date('2025-06-15'),
    readingTime: 10
  },
] as const;

export const BLOG_POSTS: ReadonlyArray<Readonly<BlogPost>> = [
  {
    id: generateSlug("My Go-To Learning Resources: A Developer's Toolkit"),
    title: "My Go-To Learning Resources: A Developer's Toolkit",
    content: `
      <div class="blog-post">
        <div class="intro-section">
          <p>As a developer, I've learned that the quality of your resources can make or break your learning journey. Over the years, I've curated a collection of websites and books that have genuinely helped me grow as a programmer. These aren't just bookmarks gathering dust—<mark class="highlight">they're resources I actively use and return to</mark> whenever I need to learn something new or refresh my knowledge.</p>
        </div>

        <div class="resource-section">
          <h2>🟨 JavaScript: Building the Foundation</h2>
          <div class="resource-card">
            <div class="resource-header">
              <h3><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer" class="resource-link">JavaScript.info</a></h3>
              <span class="resource-badge">Interactive Learning</span>
            </div>
            <p><strong>JavaScript.info</strong> has been my absolute favorite JavaScript resource. What sets it apart is how it explains complex concepts in simple terms. Whether you're trying to understand <code>closures</code>, <code>promises</code>, or the <code>event loop</code>, this site breaks everything down with practical examples.</p>
            
            <div class="highlight-box">
              <p><strong>💡 Key Feature:</strong> The interactive code samples let you experiment right in the browser, which makes learning stick better than just reading theory.</p>
            </div>

            <p>I particularly love their approach to modern JavaScript features. They don't just tell you what ES6+ features exist—they show you <mark class="highlight">why they matter and when to use them in real projects</mark>.</p>
          </div>
        </div>

        <div class="resource-section">
          <h2>🔷 Go: Learning by Doing</h2>
          <div class="resource-card">
            <div class="resource-header">
              <h3><a href="https://gobyexample.com/" target="_blank" rel="noopener noreferrer" class="resource-link">Go by Example</a></h3>
              <span class="resource-badge">Hands-on Practice</span>
            </div>
            <p><strong>Go by Example</strong> perfectly captures the philosophy of the Go language itself: simple, practical, and to the point. Each concept is demonstrated with a working code example that you can run immediately.</p>
            
            <div class="success-story">
              <p><strong>🚀 Personal Win:</strong> This hands-on approach helped me understand Go's unique features like <code>goroutines</code> and <code>channels</code> much faster than traditional documentation.</p>
            </div>

            <p>The beauty of this resource is that you can jump to any topic and immediately see working code. <mark class="highlight">It's become my quick reference whenever I need to remember Go syntax or patterns</mark>.</p>
          </div>
        </div>

        <div class="resource-section">
          <h2>🦀 Rust: The Deep Dive</h2>
          <div class="resource-card">
            <div class="resource-header">
              <h3><a href="https://doc.rust-lang.org/book/" target="_blank" rel="noopener noreferrer" class="resource-link">The Rust Book</a></h3>
              <span class="resource-badge gold">Best Documentation</span>
            </div>
            <p><strong>The Rust Book</strong> is probably the best programming language documentation I've ever encountered. Rust has a reputation for being difficult, but this book makes it approachable. It doesn't just teach you syntax—<mark class="highlight">it teaches you to think like a Rust programmer</mark>.</p>

            <div class="tip-box">
              <p><strong>💎 Pro Tip:</strong> What impressed me most is how they explain <code>ownership</code> and <code>borrowing</code>. These concepts are unique to Rust and can be confusing, but the book uses real-world analogies and builds up your understanding gradually.</p>
            </div>

            <p>By the time you finish it, you're not just copying code—you actually understand why Rust works the way it does.</p>
          </div>
        </div>

        <div class="resource-section">
          <h2>⚡ TypeScript: JavaScript's Powerful Evolution</h2>
          <div class="resource-card">
            <div class="resource-header">
              <h3><a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" class="resource-link">TypeScript Documentation</a></h3>
              <span class="resource-badge">Well-Organized</span>
            </div>
            <p>The <strong>TypeScript documentation</strong> is incredibly well-organized and practical. TypeScript can seem overwhelming at first because it adds so much to JavaScript, but their docs do a great job of showing you the benefits immediately.</p>

            <div class="feature-highlight">
              <p><strong>🎯 Standout Feature:</strong> I especially appreciate their <a href="https://www.typescriptlang.org/play" target="_blank" rel="noopener noreferrer" class="inline-link">playground feature</a> where you can experiment with TypeScript code and see the compiled JavaScript side by side.</p>
            </div>

            <p><mark class="highlight">This helped me understand what TypeScript was actually doing under the hood</mark>, which made me a better TypeScript developer.</p>
          </div>
        </div>

        <div class="resource-section">
          <h2>🐍 Python: From Beginner to Advanced</h2>
          <div class="resource-grid">
            <div class="resource-card">
              <div class="resource-header">
                <h3><a href="https://realpython.com/" target="_blank" rel="noopener noreferrer" class="resource-link">Real Python</a></h3>
                <span class="resource-badge premium">High Quality</span>
              </div>
              <p><strong>Real Python</strong> has some of the highest-quality Python tutorials I've found. Their articles go deep into topics without being overwhelming. Whether it's understanding <code>decorators</code>, working with APIs, or diving into data science libraries, they provide clear explanations with real-world examples.</p>
            </div>

            <div class="resource-card">
              <div class="resource-header">
                <h3><a href="https://www.fullstackpython.com/" target="_blank" rel="noopener noreferrer" class="resource-link">Full Stack Python</a></h3>
                <span class="resource-badge">Web Development</span>
              </div>
              <p><strong>Full Stack Python</strong> is perfect when you're building web applications. It covers the entire Python web development ecosystem and helps you understand how all the pieces fit together. <mark class="highlight">It's not just about Django or Flask—it's about understanding the whole stack</mark>.</p>
            </div>

            <div class="resource-card">
              <div class="resource-header">
                <h3><a href="https://python.swaroopch.com/" target="_blank" rel="noopener noreferrer" class="resource-link">A Byte of Python</a></h3>
                <span class="resource-badge free">Free Book</span>
              </div>
              <p><strong>"A Byte of Python"</strong> by Swaroop C H is an excellent free book for beginners. It's concise but comprehensive, and the author's writing style makes programming concepts accessible to newcomers.</p>
            </div>
          </div>
        </div>

        <div class="resource-section">
          <h2>🗃️ SQL: Mastering Data</h2>
          <div class="resource-grid">
            <div class="resource-card">
              <div class="resource-header">
                <h3><a href="https://sqlbolt.com/" target="_blank" rel="noopener noreferrer" class="resource-link">SQLBolt</a></h3>
                <span class="resource-badge interactive">Interactive</span>
              </div>
              <p>What I love about <strong>SQLBolt</strong> is how it gamifies learning SQL. <mark class="highlight">Each lesson feels like solving a puzzle</mark>, and you get immediate feedback on your queries.</p>
            </div>

            <div class="resource-card">
              <div class="resource-header">
                <h3><a href="https://sqlzoo.net/wiki/SELECT_basics" target="_blank" rel="noopener noreferrer" class="resource-link">SQL Zoo</a></h3>
                <span class="resource-badge">Real Datasets</span>
              </div>
              <p><strong>SQL Zoo</strong> throws you into real-world scenarios with actual datasets, which helps you understand how SQL is used in practice.</p>
            </div>
          </div>

          <div class="combo-tip">
            <p><strong>🔥 Power Combo:</strong> SQLBolt provides structured lessons that build upon each other, while SQL Zoo offers more varied practice problems. Use them together for maximum impact!</p>
          </div>
        </div>

        <div class="resource-section">
          <h2>🚀 Node.js: Interactive Learning</h2>
          <div class="resource-card">
            <div class="resource-header">
              <h3><a href="https://nodeschool.io/" target="_blank" rel="noopener noreferrer" class="resource-link">NodeSchool</a></h3>
              <span class="resource-badge community">Community Driven</span>
            </div>
            <p><strong>NodeSchool</strong> takes a unique approach to learning. Instead of just reading about Node.js, you install workshops on your local machine and complete challenges.</p>
            
            <div class="learning-benefit">
              <p><strong>📈 Learning Boost:</strong> This hands-on approach helped me understand Node.js concepts like <code>streams</code>, <code>modules</code>, and <code>asynchronous programming</code> much better than traditional tutorials.</p>
            </div>

            <p>The community aspect is great too—<mark class="highlight">there are NodeSchool events worldwide where developers gather to work through workshops together</mark>.</p>
          </div>
        </div>

        <div class="resource-section">
          <h2>🏗️ System Design: Thinking at Scale</h2>
          <div class="resource-card featured">
            <div class="resource-header">
              <h3>System Design Interview by Alex Xu</h3>
              <span class="resource-badge gold">Must Read</span>
            </div>
            <p>The <strong>System Design book by Alex Xu</strong> has been invaluable for understanding how large-scale systems work. It's not just theory—it walks you through real system design problems like designing Twitter, Uber, or a chat system.</p>

            <div class="book-highlight">
              <p><strong>🎯 What Makes It Special:</strong> It approaches problems systematically and teaches you to think about <code>scalability</code>, <code>reliability</code>, and <code>performance</code> from the ground up.</p>
            </div>

            <p><mark class="highlight">Even if you're not interviewing for senior positions, understanding these concepts makes you a better developer</mark>.</p>
          </div>
        </div>

        <div class="why-section">
          <h2>✨ Why These Resources Work</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">🧠</div>
              <h3>Understanding Over Memorization</h3>
              <p>Instead of just showing you syntax, they explain the reasoning behind design decisions.</p>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">💻</div>
              <h3>Hands-on Practice</h3>
              <p>Whether it's interactive examples, coding challenges, or real projects, they get you writing code immediately.</p>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">🔄</div>
              <h3>Always Updated</h3>
              <p>The web development world moves fast, and these resources evolve with it.</p>
            </div>
            
            <div class="benefit-card">
              <div class="benefit-icon">⏰</div>
              <h3>Respect Your Time</h3>
              <p>They're organized in a way that lets you find what you need quickly, whether you're learning from scratch or looking up specific information.</p>
            </div>
          </div>
        </div>

        <div class="strategy-section">
          <h2>🎯 How I Use These Resources</h2>
          <p>I don't try to read everything cover-to-cover. Instead, I use them strategically:</p>

          <div class="strategy-list">
            <div class="strategy-item">
              <div class="strategy-icon">🌱</div>
              <div class="strategy-content">
                <h4>Starting Fresh</h4>
                <p>When starting a new language or technology, I go through the fundamentals systematically</p>
              </div>
            </div>
            
            <div class="strategy-item">
              <div class="strategy-icon">🔧</div>
              <div class="strategy-content">
                <h4>Project Mode</h4>
                <p>When working on projects, I use them as references for specific problems</p>
              </div>
            </div>
            
            <div class="strategy-item">
              <div class="strategy-icon">📚</div>
              <div class="strategy-content">
                <h4>Deep Learning</h4>
                <p>When I want to deepen my knowledge, I explore advanced topics</p>
              </div>
            </div>
            
            <div class="strategy-item">
              <div class="strategy-icon">💼</div>
              <div class="strategy-content">
                <h4>Interview Prep</h4>
                <p>When preparing for interviews, I review system design concepts</p>
              </div>
            </div>
          </div>
        </div>

        <div class="conclusion-section">
          <h2>🎉 Final Thoughts</h2>
          <div class="final-message">
            <p>Good learning resources are like good tools—<mark class="highlight">they make difficult tasks manageable and help you produce better work</mark>. These resources have been my companions throughout my development journey, and I return to them regularly.</p>

            <div class="key-takeaway">
              <p><strong>🔑 Key Takeaway:</strong> The key is not just collecting resources but actually using them. Pick one or two that resonate with your learning style and dive deep. <mark class="highlight">Consistent practice with quality resources beats scattered reading every time</mark>.</p>
            </div>

            <p>What resources have made the biggest difference in your learning journey? I'm always looking for new recommendations to add to my toolkit.</p>
          </div>
        </div>
      </div>

      <style>
        .blog-post {
          max-width: 900px;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .intro-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
        }

        .resource-section {
          margin-bottom: 3rem;
        }

        .resource-section h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid #667eea;
          color: #2d3748;
        }

        .resource-card {
          background: #ffffff;
          border: 2px solid #e1e5e9;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .resource-card:hover {
          border-color: #667eea;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }

        .resource-card.featured {
          border: 2px solid #ffd700;
          background: linear-gradient(135deg, #fff9e6 0%, #fff 100%);
        }

        .resource-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .resource-header h3 {
          margin: 0;
          font-size: 1.2rem;
        }

        .resource-link {
          color: #667eea;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .resource-link:hover {
          border-bottom-color: #667eea;
          color: #333;
        }

        .inline-link {
          color: #667eea;
          text-decoration: underline;
          text-decoration-style: dotted;
        }

        .resource-badge {
          background: #667eea;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          white-space: nowrap;
        }

        .resource-badge.gold {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #333;
        }

        .resource-badge.premium {
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .resource-badge.free {
          background: linear-gradient(135deg, #11998e, #38ef7d);
        }

        .resource-badge.interactive {
          background: linear-gradient(135deg, #fc466b, #3f5efb);
        }

        .resource-badge.community {
          background: linear-gradient(135deg, #fdbb2d, #22c1c3);
          color: #333;
        }

        .resource-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .highlight {
          background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-weight: 500;
        }

        .highlight-box, .success-story, .tip-box, .feature-highlight, 
        .learning-benefit, .book-highlight, .combo-tip {
          padding: 1rem;
          margin: 1rem 0;
          border-radius: 8px;
          border-left: 4px solid;
        }

        .highlight-box {
          background: #f0f9ff;
          border-left-color: #0ea5e9;
        }

        .success-story {
          background: #f0fdf4;
          border-left-color: #22c55e;
        }

        .tip-box {
          background: #fefce8;
          border-left-color: #eab308;
        }

        .feature-highlight {
          background: #fdf4ff;
          border-left-color: #a855f7;
        }

        .learning-benefit {
          background: #fff7ed;
          border-left-color: #ea580c;
        }

        .book-highlight {
          background: #fef2f2;
          border-left-color: #ef4444;
        }

        .combo-tip {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-left-color: #ffd700;
          text-align: center;
          font-weight: 500;
        }

        code {
          background: #f1f5f9;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
          color: #e11d48;
          font-weight: 600;
        }

        .why-section {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 12px;
          margin: 3rem 0;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .benefit-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
        }

        .benefit-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .benefit-card h3 {
          color: #667eea;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .strategy-section {
          margin: 3rem 0;
        }

        .strategy-list {
          display: grid;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .strategy-item {
          display: flex;
          align-items: center;
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          border-left: 4px solid #667eea;
        }

        .strategy-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        .strategy-content h4 {
          margin: 0 0 0.5rem 0;
          color: #667eea;
          font-size: 1.1rem;
        }

        .strategy-content p {
          margin: 0;
          color: #666;
        }

        .conclusion-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px;
          margin-top: 3rem;
        }

        .final-message {
          line-height: 1.7;
        }

        .key-takeaway {
          background: rgba(255,255,255,0.1);
          padding: 1.5rem;
          border-radius: 10px;
          margin: 1.5rem 0;
          border-left: 4px solid #ffd700;
        }

        @media (max-width: 768px) {
          .blog-post {
            padding: 0 1rem;
          }
          
          .resource-grid {
            grid-template-columns: 1fr;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
          .resource-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .intro-section, .conclusion-section {
            padding: 1.5rem;
          }
          
          .why-section {
            padding: 1.5rem;
          }
          
          .strategy-item {
            flex-direction: column;
            text-align: center;
          }
          
          .strategy-icon {
            margin-right: 0;
            margin-bottom: 0.5rem;
          }
        }
      </style>
    `,
    excerpt: "A curated collection of websites and books that have genuinely helped me grow as a programmer. From JavaScript to System Design, these are the resources I actually use and return to.",
    category: "Resources",
    tags: ["learning", "resources", "javascript", "python", "rust", "go", "typescript", "sql", "nodejs", "system-design"],
    date: new Date('2025-05-31'),
    author: "Zahid Hasan",
    readingTime: 8
  },
  {
    id: generateSlug("Exploring the Depths of TypeScript"),
    title: "Exploring the Depths of TypeScript",
    content: `
      <div class="blog-post">
        <h1>Exploring the Depths of TypeScript</h1>
        <p>TypeScript is a powerful language that builds on JavaScript by adding static types. In this post, we'll explore some of its advanced features and how they can help you write better code.</p>
        <h2>Generics</h2>
        <p>Generics allow you to create reusable components that work with any data type. This is particularly useful for building libraries and frameworks.</p>
        <h2>Decorators</h2>
        <p>Decorators are a way to add metadata to classes and methods. They can be used for logging, validation, and more.</p>
        <h2>Conclusion</h2>
        <p>TypeScript's advanced features can greatly enhance your development experience. By leveraging these tools, you can write cleaner, more maintainable code.</p>
      </div>
    `,
    excerpt: "A deep dive into TypeScript's advanced features, including generics, decorators, and more.",
    category: "Programming",
    tags: ["typescript", "programming", "javascript"],
    date: new Date('2025-06-15'),
    author: "Zahid Hasan",
    readingTime: 10
  }
] as const;