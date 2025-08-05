import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import Button from "@/components/atoms/Button"
import Badge from "@/components/atoms/Badge"
import ApperIcon from "@/components/ApperIcon"

const Home = () => {
  const { user, isAuthenticated } = useAuth()

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              {isAuthenticated && (
                <Badge variant={user?.role} className="mb-4">
                  {user?.role?.toUpperCase()} MEMBER
                </Badge>
              )}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="gradient-text">Master the Art</span>
              <br />
              <span className="text-slate-100">of Influence</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your writing into powerful influence. Join thousands of creators who've unlocked the secrets of persuasive content and built thriving businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!isAuthenticated ? (
                <>
                  <Button size="lg" asChild>
                    <Link to="/signup">
                      <ApperIcon name="Rocket" size={20} className="mr-2" />
                      Start Your Journey
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/program/text-influencer/membership">
                      <ApperIcon name="Eye" size={20} className="mr-2" />
                      Explore Programs
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button size="lg" asChild>
                    <Link to="/program/text-influencer/membership">
                      <ApperIcon name="BookOpen" size={20} className="mr-2" />
                      Continue Learning
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/profile">
                      <ApperIcon name="User" size={20} className="mr-2" />
                      View Profile
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our role-based programs are designed to meet you where you are and take you where you want to go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Membership Program */}
            <div className="glass rounded-2xl p-8 card-hover">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <ApperIcon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Text Influencer Membership
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Perfect for beginners and intermediate writers. Learn the fundamentals of persuasive writing, audience building, and content strategy.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <ApperIcon name="Check" size={16} className="text-green-400 mr-3" />
                  Foundation courses in persuasive writing
                </li>
                <li className="flex items-center text-slate-300">
                  <ApperIcon name="Check" size={16} className="text-green-400 mr-3" />
                  Community access and networking
                </li>
                <li className="flex items-center text-slate-300">
                  <ApperIcon name="Check" size={16} className="text-green-400 mr-3" />
                  Monthly live Q&A sessions
                </li>
              </ul>
              <Badge variant="member" className="mb-4">MEMBER ACCESS REQUIRED</Badge>
              <div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/program/text-influencer/membership">
                    Explore Membership
                  </Link>
                </Button>
              </div>
            </div>

            {/* Master Program */}
            <div className="glass rounded-2xl p-8 card-hover border-purple-500/30">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <ApperIcon name="Crown" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Text Influencer Master
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Advanced training for serious entrepreneurs. Master advanced persuasion techniques, sales psychology, and business scaling strategies.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <ApperIcon name="Check" size={16} className="text-purple-400 mr-3" />
                  Advanced persuasion and psychology
                </li>
                <li className="flex items-center text-slate-300">
                  <ApperIcon name="Check" size={16} className="text-purple-400 mr-3" />
                  1-on-1 coaching sessions
                </li>
                <li className="flex items-center text-slate-300">
                  <ApperIcon name="Check" size={16} className="text-purple-400 mr-3" />
                  Exclusive mastermind group
                </li>
              </ul>
              <Badge variant="master" className="mb-4">MASTER ACCESS REQUIRED</Badge>
              <div>
                <Button className="w-full" asChild>
                  <Link to="/program/text-influencer/master">
                    Explore Master Program
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">10K+</div>
              <div className="text-slate-400">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">95%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">500+</div>
              <div className="text-slate-400">Video Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2">24/7</div>
              <div className="text-slate-400">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Ready to Transform Your Writing?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the community of successful text influencers who've built thriving businesses through the power of words.
          </p>
          {!isAuthenticated && (
            <Button size="xl" asChild>
              <Link to="/signup">
                <ApperIcon name="ArrowRight" size={20} className="mr-2" />
                Get Started Today
              </Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home