import mockUsers from "@/services/mockData/users.json"

let currentUser = null
let users = [...mockUsers]

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const authService = {
  async login(email, password) {
    await delay(300)
    
    const user = users.find(u => u.email === email && u.password === password)
    
    if (!user) {
      throw new Error("Invalid email or password")
    }
    
    const { password: _, ...userWithoutPassword } = user
    currentUser = userWithoutPassword
    
    // Store in localStorage for persistence
    localStorage.setItem("auth_user", JSON.stringify(currentUser))
    
    return currentUser
  },

  async signup(email, password) {
    await delay(300)
    
    // Check if user already exists
    const existingUser = users.find(u => u.email === email)
    if (existingUser) {
      throw new Error("User already exists with this email")
    }
    
    // Create new user with default role
    const newUser = {
      Id: Math.max(...users.map(u => u.Id)) + 1,
      email,
      password,
      role: "free",
      is_admin: false,
      created_at: new Date().toISOString()
    }
    
    users.push(newUser)
    
    const { password: _, ...userWithoutPassword } = newUser
    currentUser = userWithoutPassword
    
    // Store in localStorage for persistence
    localStorage.setItem("auth_user", JSON.stringify(currentUser))
    
    return currentUser
  },

  async logout() {
    await delay(200)
    currentUser = null
    localStorage.removeItem("auth_user")
  },

  async getCurrentUser() {
    await delay(200)
    
    // Check localStorage first
    const storedUser = localStorage.getItem("auth_user")
    if (storedUser) {
      currentUser = JSON.parse(storedUser)
      return currentUser
    }
    
    if (!currentUser) {
      throw new Error("No authenticated user")
    }
    
    return currentUser
  },

  async updateUserRole(userId, role) {
    await delay(300)
    
    const userIndex = users.findIndex(u => u.Id === userId)
    if (userIndex === -1) {
      throw new Error("User not found")
    }
    
    users[userIndex].role = role
    
    // Update current user if it's the same user
    if (currentUser && currentUser.Id === userId) {
      currentUser = { ...currentUser, role }
      localStorage.setItem("auth_user", JSON.stringify(currentUser))
    }
    
    return { ...users[userIndex] }
  }
}