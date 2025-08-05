import React, { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Button = forwardRef(({ className, variant = "primary", size = "md", children, disabled, asChild, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl btn-glow focus:ring-indigo-500",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-100 border border-slate-600 hover:border-slate-500 focus:ring-slate-500",
    outline: "border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white focus:ring-indigo-500",
    ghost: "text-slate-300 hover:text-white hover:bg-slate-700 focus:ring-slate-500",
    danger: "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl focus:ring-red-500"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg"
  }
  
  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button