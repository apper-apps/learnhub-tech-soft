import React, { useState, useRef, useEffect } from "react"
import ApperIcon from "@/components/ApperIcon"
import { cn } from "@/utils/cn"

const DropdownMenu = ({ trigger, children, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200"
      >
        {trigger}
        <ApperIcon 
          name="ChevronDown" 
          size={16} 
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      
      {isOpen && (
        <div className={cn(
          "absolute top-full left-0 mt-1 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50 animate-slide-down glass",
          className
        )}>
          <div className="py-1">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu