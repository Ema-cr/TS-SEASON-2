export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "admin" | "user"
  createdAt: Date
  updatedAt: Date
}

export interface LoginProps {
  email: string,
  pass: string
}