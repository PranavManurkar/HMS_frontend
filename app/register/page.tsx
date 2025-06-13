'use client'
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "", 
  })
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage("")

    if (form.password !== form.confirm_password) {
      setMessage("Passwords do not match")
      return
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          password: form.password,
          confirm_password: form.confirm_password,
          username: form.email,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage("Registration successful! Please login.")
      } else {
        const errors = Object.entries(data)
          .map(([field, msgs]) => `${field}: ${(msgs as string[]).join(", ")}`)
          .join(" | ")
        setMessage(errors || "Registration failed")
      }
    } catch (err) {
      setMessage("Error: " + (err as Error).message)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-md rounded-lg bg-background p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="mb-1 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <User className="h-4 w-4" /> Name
            </span>
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Mail className="h-4 w-4" /> Email
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
              <Phone className="h-4 w-4" /> Phone
            </span>
            <Input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 12345 67890"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-muted-foreground">Password</span>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              minLength={6}
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1 text-sm font-medium text-muted-foreground">Confirm Password</span>
            <Input
              type="password"
              name="confirm_password"
              value={form.confirm_password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              minLength={6}
            />
          </label>
          <Button type="submit" className="mt-2">
            Register
          </Button>
        </form>
        {message && (
          <p className="mt-4 rounded bg-red-100 p-2 text-center text-sm text-red-700">{message}</p>
        )}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
