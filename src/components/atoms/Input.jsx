import React, { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Input = forwardRef(({ className, type = "text", error, ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-lg border bg-slate-800 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50",
        error 
          ? "border-red-500 focus:ring-red-500" 
          : "border-slate-600 focus:border-indigo-500 focus:ring-indigo-500",
        className
      )}
      {...props}
    />
  )
})

Input.displayName = "Input"

export default Input