import React from "react"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const Empty = ({ 
  title = "No data found", 
  description = "There's nothing to show here yet.", 
  actionText = "Get Started",
  onAction,
  icon = "Inbox"
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <ApperIcon name={icon} size={32} className="text-slate-400" />
        </div>
        <h3 className="text-xl font-semibold text-slate-200 mb-2">{title}</h3>
        <p className="text-slate-400 mb-6">{description}</p>
        {onAction && (
          <Button onClick={onAction} variant="primary">
            {actionText}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Empty