import React from "react"
import { NavLink } from "react-router-dom"
import { cn } from "@/utils/cn"

const NavigationItem = ({ to, children, className, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2",
          isActive
            ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30"
            : "text-slate-300 hover:text-white hover:bg-slate-700",
          className
        )
      }
    >
      {children}
    </NavLink>
  )
}

export default NavigationItem