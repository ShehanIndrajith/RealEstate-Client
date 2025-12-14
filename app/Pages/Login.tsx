'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AuthLayout } from '../components/auth/AuthLayout'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { MailIcon, LockIcon } from 'lucide-react'

interface LoginResponseDto {
  success: boolean
  message: string
  userId?: number
  userName?: string
}

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const response = await fetch('https://localhost:5001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()

if (!response.ok) {
    setError(data.error || 'Login failed')
    return
}

// Save token or user info if needed
sessionStorage.setItem('token', data.token)
sessionStorage.setItem('role', data.role)
sessionStorage.setItem('fullName', data.fullName)
// Save user id if returned by the API (userId or userID)
if (data.userId) sessionStorage.setItem('userId', String(data.userId))
if (data.userID) sessionStorage.setItem('userId', String(data.userID))


      // Redirect to home page on successful login
      router.push('/views/home')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login')
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Enter your credentials to access your account"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        )}
        <Input
          type="email"
          label="Email Address"
          placeholder="your@email.com"
          icon={<MailIcon size={18} />}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <Input
          type="password"
          label="Password"
          placeholder="••••••••"
          icon={<LockIcon size={18} />}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              disabled={loading}
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <Button type="submit" fullWidth disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link
              href="/views/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Register now
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
export default Login
