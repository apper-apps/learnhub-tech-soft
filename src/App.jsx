import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "@/hooks/useAuth"
import Layout from "@/components/organisms/Layout"
import Home from "@/components/pages/Home"
import TextInfluencerMembership from "@/components/pages/TextInfluencerMembership"
import TextInfluencerMaster from "@/components/pages/TextInfluencerMaster"
import MoneyInsight from "@/components/pages/MoneyInsight"
import Reviews from "@/components/pages/Reviews"
import Profile from "@/components/pages/Profile"
import Login from "@/components/pages/Login"
import Signup from "@/components/pages/Signup"
import ProtectedRoute from "@/components/organisms/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-slate-900">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route 
                path="program/text-influencer/membership" 
                element={
                  <ProtectedRoute requiredRoles={["member", "both"]}>
                    <TextInfluencerMembership />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="program/text-influencer/master" 
                element={
                  <ProtectedRoute requiredRoles={["master", "both"]}>
                    <TextInfluencerMaster />
                  </ProtectedRoute>
                } 
              />
              <Route path="money-insight" element={<MoneyInsight />} />
              <Route path="reviews" element={<Reviews />} />
              <Route 
                path="profile" 
                element={
                  <ProtectedRoute requireAuth={true}>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App