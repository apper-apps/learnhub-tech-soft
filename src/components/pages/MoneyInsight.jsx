import React from "react"
import Badge from "@/components/atoms/Badge"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const MoneyInsight = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4">
            FINANCIAL EDUCATION
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Money</span>
            <br />
            <span className="text-slate-100">Insight</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Master your financial future with expert insights, strategies, and tools designed to help content creators and influencers build sustainable wealth.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-4">
                <Badge variant="default" className="mr-3">FEATURED</Badge>
                <span className="text-sm text-slate-400">5 min read</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-100 mb-4">
                The Creator Economy: How to Build Multiple Revenue Streams
              </h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Discover the proven strategies successful creators use to diversify their income and build financial security. From digital products to affiliate marketing, learn how to maximize your earning potential.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <ApperIcon name="User" size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">Sarah Chen</div>
                    <div className="text-xs text-slate-400">Financial Expert</div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read Article
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-xl p-6 card-hover">
              <div className="flex items-center mb-3">
                <Badge variant="default" className="mr-2 text-xs">NEW</Badge>
                <span className="text-xs text-slate-400">3 min read</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Tax Strategies for Digital Creators
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Essential tax tips and deductions every content creator should know.
              </p>
              <Button variant="ghost" size="sm" className="text-xs">
                Read More →
              </Button>
            </div>

            <div className="glass rounded-xl p-6 card-hover">
              <div className="flex items-center mb-3">
                <Badge variant="default" className="mr-2 text-xs">TRENDING</Badge>
                <span className="text-xs text-slate-400">7 min read</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Investment Guide for High Earners
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Smart investment strategies when your income fluctuates month to month.
              </p>
              <Button variant="ghost" size="sm" className="text-xs">
                Read More →
              </Button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">
            Explore Financial Topics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Personal Finance */}
            <div className="glass rounded-xl p-6 card-hover text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="PiggyBank" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Personal Finance</h3>
              <p className="text-sm text-slate-400 mb-4">
                Budgeting, saving, and managing your personal finances as a creator.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <span className="text-xs">12 Articles</span>
              </Button>
            </div>

            {/* Investing */}
            <div className="glass rounded-xl p-6 card-hover text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="TrendingUp" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Investing</h3>
              <p className="text-sm text-slate-400 mb-4">
                Building wealth through smart investment strategies and portfolio management.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <span className="text-xs">8 Articles</span>
              </Button>
            </div>

            {/* Business Finance */}
            <div className="glass rounded-xl p-6 card-hover text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Building" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Business Finance</h3>
              <p className="text-sm text-slate-400 mb-4">
                Managing business expenses, cash flow, and growth strategies.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <span className="text-xs">15 Articles</span>
              </Button>
            </div>

            {/* Tax Planning */}
            <div className="glass rounded-xl p-6 card-hover text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Calculator" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Tax Planning</h3>
              <p className="text-sm text-slate-400 mb-4">
                Maximize deductions and minimize tax liability with expert strategies.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <span className="text-xs">6 Articles</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-100">Latest Insights</h2>
            <Button variant="outline" size="sm">
              View All Articles
            </Button>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: "How to Price Your Digital Products for Maximum Profit",
                excerpt: "Learn the psychology behind pricing strategies and how to position your products for optimal revenue.",
                author: "Mike Rodriguez",
                readTime: "6 min read",
                category: "Business Finance",
                date: "2 days ago"
              },
              {
                title: "Emergency Fund Strategies for Freelancers and Creators",
                excerpt: "Build financial security with these proven emergency fund strategies designed for irregular income.",
                author: "Jessica Park",
                readTime: "4 min read",
                category: "Personal Finance",
                date: "1 week ago"
              },
              {
                title: "Cryptocurrency for Content Creators: A Beginner's Guide",
                excerpt: "Understanding the basics of cryptocurrency investing and how it fits into a creator's portfolio.",
                author: "David Kim",
                readTime: "8 min read",
                category: "Investing",
                date: "2 weeks ago"
              }
            ].map((article, index) => (
              <div key={index} className="glass rounded-xl p-6 card-hover">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge variant="default" className="mr-3 text-xs">{article.category}</Badge>
                      <span className="text-xs text-slate-400">{article.readTime} • {article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">{article.title}</h3>
                    <p className="text-slate-300 mb-4">{article.excerpt}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <ApperIcon name="User" size={14} className="text-white" />
                      </div>
                      <span className="text-sm text-slate-400">{article.author}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button variant="outline" size="sm">
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Mail" size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              Stay Updated with Money Insights
            </h2>
            <p className="text-slate-300 mb-8">
              Get weekly financial tips, market insights, and creator-focused money strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyInsight