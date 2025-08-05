import React from "react"
import { useAuth } from "@/hooks/useAuth"
import Badge from "@/components/atoms/Badge"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const TextInfluencerMaster = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="master" className="mb-4">
            MASTER PROGRAM
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Text Influencer</span>
            <br />
            <span className="text-slate-100">Master</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Advanced training for serious entrepreneurs. Master psychological triggers, advanced persuasion techniques, and scaling strategies used by the world's top influencers.
          </p>
        </div>

        {/* Welcome Message */}
        <div className="glass rounded-2xl p-8 mb-12 max-w-4xl mx-auto border-purple-500/30">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
              <ApperIcon name="Crown" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-100">Welcome to Master Level, {user?.email}!</h2>
              <p className="text-slate-400">You have {user?.role} access to this advanced content</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 mt-4">
            <p className="text-slate-300 text-sm">
              <ApperIcon name="Star" size={16} className="inline text-yellow-400 mr-2" />
              You're part of an exclusive group of advanced learners. This program contains our most powerful strategies.
            </p>
          </div>
        </div>

        {/* Advanced Modules */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Module 1 */}
          <div className="glass rounded-xl p-6 card-hover border-purple-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Psychology of Persuasion</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Deep dive into the psychological triggers that drive human behavior and decision-making in digital environments.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Cognitive Biases in Marketing (25 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Scarcity & Urgency Psychology (30 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Social Proof Mastery (28 min)
              </li>
            </ul>
            <Button size="sm" className="w-full">
              <ApperIcon name="Play" size={16} className="mr-2" />
              Start Advanced Module
            </Button>
          </div>

          {/* Module 2 */}
          <div className="glass rounded-xl p-6 card-hover border-purple-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Sales Psychology</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Master the art of selling through words. Learn advanced techniques used by top sales professionals and marketers.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                The Psychology of Buying (32 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Objection Handling Techniques (27 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Closing Psychology (29 min)
              </li>
            </ul>
            <Button size="sm" className="w-full">
              <ApperIcon name="Play" size={16} className="mr-2" />
              Start Advanced Module
            </Button>
          </div>

          {/* Module 3 */}
          <div className="glass rounded-xl p-6 card-hover border-purple-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Scaling Strategies</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Learn how to scale your influence and build systems that work without your constant involvement.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Automation & Systems (35 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Team Building & Delegation (31 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Revenue Optimization (33 min)
              </li>
            </ul>
            <Button size="sm" className="w-full">
              <ApperIcon name="Play" size={16} className="mr-2" />
              Start Advanced Module
            </Button>
          </div>

          {/* Module 4 */}
          <div className="glass rounded-xl p-6 card-hover border-purple-500/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">Authority Building</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Establish yourself as the go-to authority in your niche through strategic positioning and thought leadership.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Thought Leadership Strategy (26 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Media & PR Opportunities (28 min)
              </li>
              <li className="flex items-center text-slate-300 text-sm">
                <ApperIcon name="Play" size={14} className="text-purple-400 mr-2" />
                Strategic Partnerships (24 min)
              </li>
            </ul>
            <Button size="sm" className="w-full">
              <ApperIcon name="Play" size={16} className="mr-2" />
              Start Advanced Module
            </Button>
          </div>
        </div>

        {/* Exclusive Benefits */}
        <div className="glass rounded-2xl p-8 mb-12 border-purple-500/30">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">
            Master Program Exclusives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="Users2" size={16} className="text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">1-on-1 Coaching</h4>
                <p className="text-sm text-slate-400">Personal guidance from industry experts</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="Crown" size={16} className="text-pink-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Mastermind Group</h4>
                <p className="text-sm text-slate-400">Exclusive network of high-level entrepreneurs</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="FileText" size={16} className="text-indigo-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Case Study Library</h4>
                <p className="text-sm text-slate-400">Real campaigns that generated millions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="Zap" size={16} className="text-amber-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">AI Tools Access</h4>
                <p className="text-sm text-slate-400">Exclusive access to our proprietary AI writing tools</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="TrendingUp" size={16} className="text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Performance Analytics</h4>
                <p className="text-sm text-slate-400">Advanced tracking and optimization tools</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mt-1">
                <ApperIcon name="DollarSign" size={16} className="text-green-400" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Revenue Guarantee</h4>
                <p className="text-sm text-slate-400">Money-back guarantee if you don't see results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Progress Tracking */}
        <div className="glass rounded-xl p-6 border-purple-500/20">
          <h3 className="text-xl font-bold text-slate-100 mb-4">Master Program Progress</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-300">Master Level Completion</span>
                <span className="text-sm text-slate-400">65%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">3/4</div>
                <div className="text-xs text-slate-400">Advanced Modules</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">28</div>
                <div className="text-xs text-slate-400">Deep Dives Watched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400">5</div>
                <div className="text-xs text-slate-400">Coaching Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">45h</div>
                <div className="text-xs text-slate-400">Intensive Training</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4">
              <div className="flex items-center">
                <ApperIcon name="Trophy" size={20} className="text-yellow-400 mr-3" />
                <div>
                  <h4 className="font-semibold text-slate-100">Achievement Unlocked</h4>
                  <p className="text-sm text-slate-400">You're in the top 10% of all Master students!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextInfluencerMaster