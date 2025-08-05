import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import Logo from "@/components/molecules/Logo"
import NavigationItem from "@/components/molecules/NavigationItem"
import DropdownMenu from "@/components/molecules/DropdownMenu"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import MobileMenu from "@/components/organisms/MobileMenu"

const Header = () => {
  const { user, isAuthenticated } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-700 glass">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavigationItem to="/">Home</NavigationItem>
              
              <DropdownMenu 
                trigger={<span>Program</span>}
                className="w-64"
              >
                <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Text Influencer
                </div>
                <Link
                  to="/program/text-influencer/membership"
                  className="flex items-center px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <ApperIcon name="Users" size={16} className="mr-2" />
                  Membership
                </Link>
                <Link
                  to="/program/text-influencer/master"
                  className="flex items-center px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <ApperIcon name="Crown" size={16} className="mr-2" />
                  Master
                </Link>
              </DropdownMenu>
              
              <NavigationItem to="/money-insight">Money Insight</NavigationItem>
              <NavigationItem to="/reviews">Reviews</NavigationItem>
              
              {isAuthenticated && (
                <NavigationItem to="/profile">Profile</NavigationItem>
              )}
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {!isAuthenticated ? (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button variant="primary" size="sm" asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-300">
                    Welcome, {user?.email}
                  </span>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <ApperIcon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}

export default Header