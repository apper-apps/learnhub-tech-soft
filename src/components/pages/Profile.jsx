import React from "react"
import { useAuth } from "@/hooks/useAuth"
import Badge from "@/components/atoms/Badge"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import { toast } from "react-toastify"

const Profile = () => {
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
      toast.success("Successfully logged out")
    } catch (error) {
      toast.error("Failed to logout")
    }
  }

  const membershipData = {
    free: {
      title: "Free Member",
      description: "Limited access to basic content",
      features: ["Access to home page", "Basic content preview", "Community access"],
      limitations: ["No access to premium courses", "Limited support"]
    },
    member: {
      title: "Membership Access",
      description: "Full access to Text Influencer Membership program",
      features: ["50+ Video Lessons", "Private Community", "Monthly Q&A Sessions", "Templates & Tools", "Completion Certificate", "24/7 Support"],
      limitations: ["No access to Master-level content"]
    },
    master: {
      title: "Master Access",
      description: "Full access to advanced Text Influencer Master program",
      features: ["Advanced Psychology Modules", "1-on-1 Coaching", "Mastermind Group", "Case Study Library", "AI Tools Access", "Performance Analytics", "Revenue Guarantee"],
      limitations: []
    },
    both: {
      title: "Complete Access",
      description: "Full access to all programs and content",
      features: ["All Membership Benefits", "All Master Benefits", "Priority Support", "Exclusive Content", "Beta Feature Access"],
      limitations: []
    }
  }

  const currentMembership = membershipData[user?.role] || membershipData.free

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant={user?.role} className="mb-4">
            YOUR PROFILE
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Profile</span>
            <br />
            <span className="text-slate-100">Dashboard</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Manage your account, track your progress, and access your learning materials.
          </p>
        </div>

        {/* User Info Card */}
        <div className="glass rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-6">
                <ApperIcon name="User" size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-100">{user?.email}</h2>
                <div className="flex items-center mt-2">
                  <Badge variant={user?.role} className="mr-3">
                    {user?.role?.toUpperCase()}
                  </Badge>
                  {user?.is_admin && (
                    <Badge variant="admin" className="text-xs">
                      ADMIN
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-slate-400 mt-1">
                  Member since {new Date(user?.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button variant="danger" onClick={handleLogout}>
              <ApperIcon name="LogOut" size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Membership Details */}
        <div className="glass rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-100 mb-6">Membership Details</h3>
          
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className={`w-3 h-3 rounded-full mr-3 ${
                user?.role === 'free' ? 'bg-gray-500' :
                user?.role === 'member' ? 'bg-blue-500' :
                user?.role === 'master' ? 'bg-purple-500' :
                'bg-gradient-to-r from-indigo-500 to-purple-500'
              }`}></div>
              <h4 className="text-xl font-semibold text-slate-100">{currentMembership.title}</h4>
            </div>
            <p className="text-slate-300 mb-4">{currentMembership.description}</p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-slate-100 mb-3 flex items-center">
                <ApperIcon name="Check" size={16} className="text-green-400 mr-2" />
                What You Have Access To
              </h5>
              <ul className="space-y-2">
                {currentMembership.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-slate-300">
                    <ApperIcon name="Dot" size={12} className="text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {currentMembership.limitations.length > 0 && (
              <div>
                <h5 className="font-semibold text-slate-100 mb-3 flex items-center">
                  <ApperIcon name="X" size={16} className="text-red-400 mr-2" />
                  Limitations
                </h5>
                <ul className="space-y-2">
                  {currentMembership.limitations.map((limitation, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-400">
                      <ApperIcon name="Dot" size={12} className="text-red-400 mr-2" />
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-100 mb-6">Quick Actions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {user?.role === 'free' && (
              <Button variant="primary" className="w-full justify-start" asChild>
                <a href="/signup">
                  <ApperIcon name="Upgrade" size={16} className="mr-3" />
                  Upgrade Membership
                </a>
              </Button>
            )}
            
            {(user?.role === 'member' || user?.role === 'both') && (
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="/program/text-influencer/membership">
                  <ApperIcon name="BookOpen" size={16} className="mr-3" />
                  Continue Learning
                </a>
              </Button>
            )}

            {(user?.role === 'master' || user?.role === 'both') && (
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="/program/text-influencer/master">
                  <ApperIcon name="Crown" size={16} className="mr-3" />
                  Master Program
                </a>
              </Button>
            )}

            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/money-insight">
                <ApperIcon name="DollarSign" size={16} className="mr-3" />
                Money Insights
              </a>
            </Button>

            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="/reviews">
                <ApperIcon name="Star" size={16} className="mr-3" />
                View Reviews
              </a>
            </Button>

            <Button variant="ghost" className="w-full justify-start">
              <ApperIcon name="Settings" size={16} className="mr-3" />
              Account Settings
            </Button>
          </div>
        </div>

        {/* Learning Progress (Mock Data) */}
        <div className="glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-100 mb-6">Learning Progress</h3>
          
          {user?.role === 'free' ? (
            <div className="text-center py-8">
              <ApperIcon name="Lock" size={48} className="text-slate-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-slate-300 mb-2">Upgrade to Track Progress</h4>
              <p className="text-slate-400 mb-4">
                Unlock detailed progress tracking and personalized learning insights with a membership upgrade.
              </p>
              <Button variant="primary" asChild>
                <a href="/signup">Upgrade Now</a>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {user?.role === 'member' || user?.role === 'both' ? '25' : '65'}%
                  </div>
                  <div className="text-sm text-slate-400">Overall Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">
                    {user?.role === 'member' || user?.role === 'both' ? '12' : '28'}
                  </div>
                  <div className="text-sm text-slate-400">Videos Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {user?.role === 'member' || user?.role === 'both' ? '3' : '7'}
                  </div>
                  <div className="text-sm text-slate-400">Assignments Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">
                    {user?.role === 'member' || user?.role === 'both' ? '15' : '45'}h
                  </div>
                  <div className="text-sm text-slate-400">Time Invested</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-300">Current Course Progress</span>
                    <span className="text-sm text-slate-400">
                      {user?.role === 'member' || user?.role === 'both' ? '25' : '65'}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        user?.role === 'master' || user?.role === 'both'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                          : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                      }`}
                      style={{
                        width: user?.role === 'member' || user?.role === 'both' ? '25%' : '65%'
                      }}
                    ></div>
                  </div>
                </div>

                {(user?.role === 'master' || user?.role === 'both') && (
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4">
                    <div className="flex items-center">
                      <ApperIcon name="Trophy" size={20} className="text-yellow-400 mr-3" />
                      <div>
                        <h4 className="font-semibold text-slate-100">Master Level Achievement</h4>
                        <p className="text-sm text-slate-400">You're in the top 10% of all students!</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile