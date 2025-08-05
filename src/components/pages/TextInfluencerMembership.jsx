import React from "react"
import { useAuth } from "@/hooks/useAuth"
import Badge from "@/components/atoms/Badge"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const TextInfluencerMembership = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="member" className="mb-4">
            MEMBERSHIP PROGRAM
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Text Influencer</span>
            <br />
            <span className="text-slate-100">Membership</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Master the fundamentals of persuasive writing and build your influence from the ground up. Perfect for beginners and intermediate writers ready to transform their content.
          </p>
        </div>

        {/* Welcome Message */}
        <div className="glass rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
              <ApperIcon name="Users" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-100">Welcome, {user?.email}!</h2>
              <p className="text-slate-400">You have {user?.role} access to this content</p>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Module 1 */}
          <div className="glass rounded-xl p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Foundation of Influence</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Learn the core principles of persuasive writing and understand the psychology behind influential content.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Introduction to Persuasive Writing (15 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Understanding Your Audience (20 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                The Psychology of Influence (25 min)
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              <ApperIcon name="Play" size={16} className="mr-2" />
              Start Module
            </Button>
          </div>

          {/* Module 2 */}
          <div className="glass rounded-xl p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Content Strategy</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Develop a content strategy that builds trust, engagement, and converts readers into loyal followers.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Content Planning & Calendar (18 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Storytelling Techniques (22 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Building Emotional Connection (19 min)
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              <ApperIcon name="Play" size={16} className="mr-2" />
              Start Module
            </Button>
          </div>

          {/* Module 3 */}
          <div className="glass rounded-xl p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Platform Mastery</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Master different platforms and learn how to adapt your writing style for maximum impact across channels.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Social Media Writing (16 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Email Marketing Copy (24 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Blog & Long-form Content (21 min)
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              <ApperIcon name="Play" size={16} className="mr-2" />
              Start Module
            </Button>
          </div>

          {/* Module 4 */}
          <div className="glass rounded-xl p-6 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Community Building</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Learn how to build and nurture a community of engaged followers who trust your recommendations.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Engagement Strategies (17 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Building Trust & Authority (23 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-green-400 mr-2" />
                Community Management (20 min)
              </li>
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              <ApperIcon name="Play" size={16} className="mr-2" />
              Start Module
            </Button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="glass rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">
            What's Included in Your Membership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="BookOpen" size={16} className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">50+ Video Lessons</h4>
                <p className="text-sm text-slate-400">Comprehensive training modules with actionable insights</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="Users" size={16} className="text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Private Community</h4>
                <p className="text-sm text-slate-400">Connect with fellow members and share experiences</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="Calendar" size={16} className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Monthly Q&A</h4>
                <p className="text-sm text-slate-400">Live sessions with expert instructors</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="Download" size={16} className="text-orange-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Templates & Tools</h4>
                <p className="text-sm text-slate-400">Ready-to-use templates and writing frameworks</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="Award" size={16} className="text-pink-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Completion Certificate</h4>
                <p className="text-sm text-slate-400">Official recognition of your achievement</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="Headphones" size={16} className="text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">24/7 Support</h4>
                <p className="text-sm text-slate-400">Get help whenever you need it</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="glass rounded-xl p-6">
          <h3 className="text-xl font-bold text-slate-100 mb-4">Your Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-300">Overall Completion</span>
                <span className="text-sm text-slate-400">25%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">1/4</div>
                <div className="text-xs text-slate-400">Modules Complete</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">12</div>
                <div className="text-xs text-slate-400">Videos Watched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">3</div>
                <div className="text-xs text-slate-400">Assignments Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">15h</div>
                <div className="text-xs text-slate-400">Time Invested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextInfluencerMembership