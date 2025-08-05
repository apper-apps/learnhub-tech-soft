import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import { cn } from "@/utils/cn"

const MobileMenu = ({ isOpen, onClose }) => {
  const { user, isAuthenticated } = useAuth()
  const [isProgramOpen, setIsProgramOpen] = useState(false)

  const handleLinkClick = () => {
    onClose()
    setIsProgramOpen(false)
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Mobile Menu */}
      <div className={cn(
        "fixed top-0 left-0 h-full w-80 bg-slate-800 border-r border-slate-700 z-50 transform transition-transform duration-300 md:hidden glass",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <ApperIcon name="GraduationCap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">LearnHub Pro</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <ApperIcon name="X" size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center space-x-3 px-3 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <ApperIcon name="Home" size={20} />
            <span>Home</span>
          </Link>

          {/* Program Dropdown */}
          <div>
            <button
              onClick={() => setIsProgramOpen(!isProgramOpen)}
              className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <ApperIcon name="BookOpen" size={20} />
                <span>Program</span>
              </div>
              <ApperIcon 
                name="ChevronDown" 
                size={16} 
                className={cn(
                  "transition-transform duration-200",
                  isProgramOpen && "rotate-180"
                )}
              />
            </button>
            
            {isProgramOpen && (
              <div className="ml-6 mt-2 space-y-1">
                <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Text Influencer
                </div>
                <Link
                  to="/program/text-influencer/membership"
                  onClick={handleLinkClick}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <ApperIcon name="Users" size={16} />
                  <span>Membership</span>
                </Link>
                <Link
                  to="/program/text-influencer/master"
                  onClick={handleLinkClick}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <ApperIcon name="Crown" size={16} />
                  <span>Master</span>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/money-insight"
            onClick={handleLinkClick}
            className="flex items-center space-x-3 px-3 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <ApperIcon name="DollarSign" size={20} />
            <span>Money Insight</span>
          </Link>

          <Link
            to="/reviews"
            onClick={handleLinkClick}
            className="flex items-center space-x-3 px-3 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <ApperIcon name="Star" size={20} />
            <span>Reviews</span>
          </Link>

          {isAuthenticated && (
            <Link
              to="/profile"
              onClick={handleLinkClick}
              className="flex items-center space-x-3 px-3 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <ApperIcon name="User" size={20} />
              <span>Profile</span>
            </Link>
          )}
        </nav>

        {/* Auth Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
          {!isAuthenticated ? (
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-center" asChild>
                <Link to="/login" onClick={handleLinkClick}>Login</Link>
              </Button>
              <Button variant="primary" size="sm" className="w-full justify-center" asChild>
                <Link to="/signup" onClick={handleLinkClick}>Sign Up</Link>
              </Button>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-sm text-slate-300 mb-2">
                Welcome, {user?.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default MobileMenu