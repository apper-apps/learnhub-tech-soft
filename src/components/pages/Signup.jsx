import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import Button from "@/components/atoms/Button"
import FormField from "@/components/molecules/FormField"
import ApperIcon from "@/components/ApperIcon"
import { toast } from "react-toastify"

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    try {
      await signup(formData.email, formData.password)
      toast.success("Account created successfully! Welcome to LearnHub Pro!")
      navigate("/")
    } catch (error) {
      toast.error(error.message || "Failed to create account")
      setErrors({ general: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="UserPlus" size={24} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">Join LearnHub Pro</h1>
            <p className="text-slate-400">Start your journey to becoming a text influencer</p>
          </div>

          {/* Benefits Preview */}
          <div className="glass rounded-xl p-4 mb-6">
            <h3 className="text-sm font-semibold text-slate-300 mb-3">What you get as a free member:</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center">
                <ApperIcon name="Check" size={12} className="text-green-400 mr-2" />
                Access to community discussions
              </li>
              <li className="flex items-center">
                <ApperIcon name="Check" size={12} className="text-green-400 mr-2" />
                Free content and resources
              </li>
              <li className="flex items-center">
                <ApperIcon name="Check" size={12} className="text-green-400 mr-2" />
                Course previews and samples
              </li>
              <li className="flex items-center">
                <ApperIcon name="Lock" size={12} className="text-amber-400 mr-2" />
                Upgrade anytime for full access
              </li>
            </ul>
          </div>

          {/* Signup Form */}
          <div className="glass rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errors.general && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-center">
                    <ApperIcon name="AlertCircle" size={16} className="text-red-400 mr-2" />
                    <span className="text-sm text-red-400">{errors.general}</span>
                  </div>
                </div>
              )}

              <FormField
                label="Email Address"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Enter your email"
                required
              />

              <FormField
                label="Password"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="Create a password (min. 6 characters)"
                required
              />

              <FormField
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                placeholder="Confirm your password"
                required
              />

              <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
                <div className="flex items-start">
                  <ApperIcon name="Info" size={16} className="text-indigo-400 mr-2 mt-0.5" />
                  <div className="text-sm text-indigo-300">
                    <strong>Default Role:</strong> All new accounts start with "free" access. You can upgrade to member or master tiers anytime for additional features and content.
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <ApperIcon name="Loader2" size={16} className="mr-2 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    <ApperIcon name="UserPlus" size={16} className="mr-2" />
                    Create Free Account
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-xs text-slate-500">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-indigo-400 hover:text-indigo-300">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup