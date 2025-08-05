import React from "react"
import Badge from "@/components/atoms/Badge"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Content Creator",
      rating: 5,
      text: "LearnHub Pro completely transformed my writing. The Text Influencer Master program gave me the psychological insights I needed to create content that truly converts. My engagement increased by 400% in just 3 months!",
      course: "Text Influencer Master",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Marketing Director",
      rating: 5,
      text: "The community aspect is incredible. Being part of the Master program connected me with other high-level entrepreneurs. The 1-on-1 coaching sessions were worth the investment alone.",
      course: "Text Influencer Master",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "David Chen",
      role: "Freelance Writer",
      rating: 5,
      text: "Started with the Membership program and it exceeded all expectations. The foundation modules are incredibly well-structured. I'm now earning 3x more per client thanks to the persuasion techniques I learned.",
      course: "Text Influencer Membership",
      date: "3 weeks ago",
      verified: true
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      role: "E-commerce Owner",
      rating: 5,
      text: "The Money Insight section helped me understand the financial side of content creation. Combined with the Master program, I've built multiple revenue streams and achieved financial independence.",
      course: "Text Influencer Master",
      date: "2 months ago",
      verified: true
    },
    {
      id: 5,
      name: "James Wilson",
      role: "Social Media Manager",
      rating: 4,
      text: "Great value for money. The Membership program covers all the basics and the community is very supportive. Looking forward to upgrading to Master level soon.",
      course: "Text Influencer Membership",
      date: "1 week ago",
      verified: true
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Business Coach",
      rating: 5,
      text: "The psychology modules in the Master program are pure gold. I've implemented these strategies in my coaching business and my client results have improved dramatically. Highly recommend!",
      course: "Text Influencer Master",
      date: "5 days ago",
      verified: true
    }
  ]

  const averageRating = 4.8
  const totalReviews = 2847

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <ApperIcon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-slate-600"}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4">
            STUDENT REVIEWS
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">What Our Students</span>
            <br />
            <span className="text-slate-100">Are Saying</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real stories from real students who have transformed their writing, built their influence, and achieved their financial goals through our programs.
          </p>
        </div>

        {/* Rating Overview */}
        <div className="glass rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black gradient-text mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-slate-400">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-black gradient-text mb-2">{totalReviews.toLocaleString()}</div>
              <div className="text-slate-400">Total Reviews</div>
            </div>
            <div>
              <div className="text-5xl font-black gradient-text mb-2">98%</div>
              <div className="text-slate-400">Recommend to Others</div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {[5, 4, 3, 2, 1].map((stars) => {
              const percentage = stars === 5 ? 85 : stars === 4 ? 12 : stars === 3 ? 2 : stars === 2 ? 1 : 0
              return (
                <div key={stars} className="flex items-center">
                  <div className="flex items-center w-20">
                    <span className="text-sm text-slate-300 mr-2">{stars}</span>
                    <ApperIcon name="Star" size={14} className="text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 bg-slate-700 rounded-full h-2 mx-4">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-slate-400 w-12">{percentage}%</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Review Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button variant="primary" size="sm">All Reviews</Button>
          <Button variant="outline" size="sm">Master Program</Button>
          <Button variant="outline" size="sm">Membership</Button>
          <Button variant="outline" size="sm">5 Stars</Button>
          <Button variant="outline" size="sm">Verified Only</Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="glass rounded-xl p-6 card-hover">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <ApperIcon name="User" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h3 className="font-semibold text-slate-100 mr-2">{review.name}</h3>
                      {review.verified && (
                        <ApperIcon name="CheckCircle" size={16} className="text-green-400" />
                      )}
                    </div>
                    <div className="text-sm text-slate-400">{review.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex mb-1">
                    {renderStars(review.rating)}
                  </div>
                  <div className="text-xs text-slate-400">{review.date}</div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-4">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {review.course}
                </Badge>
                <div className="flex items-center space-x-2">
                  <button className="text-slate-400 hover:text-slate-300 transition-colors">
                    <ApperIcon name="ThumbsUp" size={16} />
                  </button>
                  <span className="text-xs text-slate-400">Helpful</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-12">
          <Button variant="outline" size="lg">
            <ApperIcon name="ChevronDown" size={16} className="mr-2" />
            Load More Reviews
          </Button>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="TrendingUp" size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">$250K</div>
              <div className="text-slate-300 mb-2">Revenue Generated</div>
              <div className="text-sm text-slate-400">
                "Within 6 months of completing the Master program, I generated over $250K in revenue from my content business."
              </div>
              <div className="text-xs text-slate-500 mt-2">- Jennifer L., Business Owner</div>
            </div>

            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Users" size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">100K</div>
              <div className="text-slate-300 mb-2">Followers Gained</div>
              <div className="text-sm text-slate-400">
                "The audience building strategies helped me grow from 5K to 105K followers in just 8 months."
              </div>
              <div className="text-xs text-slate-500 mt-2">- Mark T., Content Creator</div>
            </div>

            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="DollarSign" size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">500%</div>
              <div className="text-slate-300 mb-2">Rate Increase</div>
              <div className="text-sm text-slate-400">
                "My freelance rates increased by 500% after learning the advanced psychology techniques."
              </div>
              <div className="text-xs text-slate-500 mt-2">- Rachel K., Freelancer</div>
            </div>
          </div>
        </div>

        {/* Write a Review CTA */}
        <div className="glass rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              Share Your Success Story
            </h2>
            <p className="text-slate-300 mb-8">
              Have you completed one of our programs? We'd love to hear about your experience and how it helped you achieve your goals.
            </p>
            <Button size="lg">
              <ApperIcon name="Edit" size={20} className="mr-2" />
              Write a Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews