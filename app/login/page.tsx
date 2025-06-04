// pages/login.tsx
'use client'
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Lock } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" })
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")

    try {
      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok) {
        setMessage("Login successful! Token: " + data.tokens.access)
        // TODO: Save token, redirect etc.
      } else {
        setMessage(data.detail || "Login failed")
      }
    } catch (err) {
      setMessage("Error: " + (err as Error).message)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-md rounded-lg bg-background p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="mb-1 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <User className="h-4 w-4" /> Email
            </span>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Lock className="h-4 w-4" /> Password
            </span>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </label>
          <Button type="submit" className="mt-2">
            Sign In
          </Button>
        </form>
        {message && (
          <p className="mt-4 rounded bg-red-100 p-2 text-center text-sm text-red-700">{message}</p>
        )}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
