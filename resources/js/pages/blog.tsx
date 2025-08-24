import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Sustainable Palm Oil: The Future of Responsible Production",
    excerpt: "Exploring how sustainable practices in palm oil production are reshaping the industry and creating value for all stakeholders while protecting our environment.",
    image: "/api/placeholder/400/250?text=Sustainable+Palm+Oil",
    date: "March 15, 2024",
    author: "Dr. Sarah Martinez",
    category: "Sustainability",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Global Market Trends: Palm Oil Demand in 2024",
    excerpt: "Analysis of current market dynamics, emerging trends, and future projections for palm oil demand across different regions and industries.",
    image: "/api/placeholder/400/250?text=Market+Analysis",
    date: "March 10, 2024",
    author: "James Chen",
    category: "Market Analysis",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Innovation in Processing: Technology Transforming Palm Oil",
    excerpt: "How cutting-edge technology and innovative processing methods are improving efficiency, quality, and sustainability in palm oil production.",
    image: "/api/placeholder/400/250?text=Technology+Innovation",
    date: "March 5, 2024",
    author: "Dr. Ahmad Rahman",
    category: "Technology",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Supply Chain Excellence: From Plantation to Consumer",
    excerpt: "Understanding the complex journey of palm oil from plantation to end consumer and how we optimize each step for maximum value and quality.",
    image: "/api/placeholder/400/250?text=Supply+Chain",
    date: "February 28, 2024",
    author: "Maria Rodriguez",
    category: "Operations",
    readTime: "8 min read"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold font-serif mb-6">
              Industry Insights & News
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest developments, trends, and insights 
              from the palm oil industry and sustainable agriculture sector.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Featured Article
              </span>
              <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <span>{blogPosts[0].author}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].date}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <button className="btn-primary">
                Read Full Article
              </button>
            </div>
            <div>
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          {/* Categories Filter */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium transition-all duration-300 hover:bg-blue-700">
                All Articles
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white">
                Sustainability
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white">
                Market Analysis
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white">
                Technology
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white">
                Operations
              </button>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="card overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-gray-800 mb-6">
              Stay Updated with Industry News
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest insights, 
              market analysis, and industry updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-800 mb-6">
              Additional Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore more resources to deepen your understanding of the palm oil industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Industry Reports</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive market reports and analysis on palm oil industry trends and forecasts.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                View Reports →
              </a>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Webinar Series</h3>
              <p className="text-gray-600 mb-6">
                Join our educational webinars featuring industry experts discussing key topics.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Watch Webinars →
              </a>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">White Papers</h3>
              <p className="text-gray-600 mb-6">
                In-depth technical papers on sustainable practices and innovation in palm oil.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Download Papers →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}