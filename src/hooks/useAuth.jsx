import React, { createContext, useContext, useState, useEffect } from "react"
import { authService } from "@/services/api/authService"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser()
        setUser(currentUser)
      } catch (error) {
        console.log("No authenticated user")
      } finally {
        setLoading(false)
      }
    }
    
    initAuth()
  }, [])

  const login = async (email, password) => {
    const userData = await authService.login(email, password)
    setUser(userData)
    return userData
  }

  const signup = async (email, password) => {
    const userData = await authService.signup(email, password)
    setUser(userData)
    return userData
  }

  const logout = async () => {
    await authService.logout()
    setUser(null)
  }

  const hasRole = (requiredRoles) => {
    if (!user) return false
    if (!requiredRoles || requiredRoles.length === 0) return true
    return requiredRoles.includes(user.role)
  }

  const value = {
    user,
    login,
    signup,
    logout,
    hasRole,
    loading,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}