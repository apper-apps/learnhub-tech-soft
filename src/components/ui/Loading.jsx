import React from "react"

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-slate-600 border-t-indigo-500 rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-slate-200 mb-2">Loading...</h2>
        <p className="text-slate-400">Please wait while we prepare your content</p>
      </div>
    </div>
  )
}

export default Loading