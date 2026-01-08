'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { AuthLayout } from '../components/auth/AuthLayout'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import {
  MailIcon,
  LockIcon,
  UserIcon,
  PhoneIcon,
  BuildingIcon,
  UploadIcon,
} from 'lucide-react'
import Image from 'next/image'
type UserRole = 'Agent' | 'Builder' | null
const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState<UserRole>(null)
  const [profileImage, setProfileImage] = useState<File | null>(null)
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("FullName", name);
  formData.append("Email", email);
  formData.append("Password", password);
  formData.append("Role", role ?? "");
  formData.append("PhoneNumber", phone);

  if (profileImage) {
    formData.append("ProfileImage", profileImage); // MUST match backend DTO property
  }

  try {
    const res = await fetch("https://localhost:5001/api/users/register", {
      method: "POST",
      body: formData, // ❗ No headers. Browser will set correct boundaries automatically.
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Registration failed:", err);
      alert("Registration failed: " + (err.error ?? "Unknown error"));
      return;
    }

    const data = await res.json();
    console.log("User registered successfully:", data);

    alert("Registration successful");
    window.location.href = "/views/login";

  } catch (error) {
    console.error("Network/server error:", error);
    alert("Server Error: " + error);
  }
};
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0])
    }
  }
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join our platform to connect with properties and clients"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Role Selection */}
        <div className="mb-6">
          <label className="block mb-3 text-sm font-medium text-gray-700">
            I am a:
          </label>
          <div className="grid grid-cols-2 gap-4">
            <Card
              selectable
              selected={role === 'Agent'}
              onClick={() => setRole('Agent')}
              className="flex flex-col items-center py-4"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <UserIcon size={24} className="text-blue-600" />
              </div>
              <h3 className="font-medium">Agent</h3>
              <p className="text-xs text-gray-500 text-center mt-1">
                List and sell properties
              </p>
            </Card>
            <Card
              selectable
              selected={role === 'Builder'}
              onClick={() => setRole('Builder')}
              className="flex flex-col items-center py-4"
            >
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <BuildingIcon size={24} className="text-blue-600" />
              </div>
              <h3 className="font-medium">Builder</h3>
              <p className="text-xs text-gray-500 text-center mt-1">
                Showcase developments
              </p>
            </Card>
          </div>
        </div>
        {/* Profile Picture */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-300">
              {profileImage ? (
                <Image
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile Preview"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              ) : (
                <UserIcon size={40} className="text-gray-400" />
              )}
            </div>
            <label
              htmlFor="profile-upload"
              className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1.5 cursor-pointer shadow-md"
            >
              <UploadIcon size={16} className="text-white" />
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Upload profile picture (optional)
          </p>
        </div>
        {/* Personal Information */}
        <Input
          type="text"
          label="Full Name"
          placeholder="John Doe"
          icon={<UserIcon size={18} />}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          label="Email Address"
          placeholder="your@email.com"
          icon={<MailIcon size={18} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="tel"
          label="Phone Number"
          placeholder="(123) 456-7890"
          icon={<PhoneIcon size={18} />}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Input
          type="password"
          label="Password"
          placeholder="••••••••"
          icon={<LockIcon size={18} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="••••••••"
          icon={<LockIcon size={18} />}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          fullWidth
          disabled={!role || password !== confirmPassword}
        >
          Create Account
        </Button>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              href="/views/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
export default Register
