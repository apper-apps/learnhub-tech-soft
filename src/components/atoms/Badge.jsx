import React, { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Badge = forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-slate-700 text-slate-100 border-slate-600",
    free: "bg-gray-600 text-gray-100 border-gray-500",
    member: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-400",
    master: "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400",
    both: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-indigo-400",
    admin: "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-400"
  }
  
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})

Badge.displayName = "Badge"

export default Badge