import React from "react"
import { Link } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"

const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
        <ApperIcon name="GraduationCap" size={20} className="text-white" />
      </div>
      <span className="text-xl font-bold gradient-text">
        LearnHub Pro
      </span>
    </Link>
  )
}

export default Logo