"use client"

import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

type Student = {
  id: number
  name: string
  email: string
  phone: string
  room: string | null
}

export default function StudentTable() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/students/")
      .then(async (res) => {
        if (!res.ok) {
          const errText = await res.text()
          throw new Error(`Error fetching students: ${res.status} ${errText}`)
        }
        return res.json()
      })
      .then((data: Student[]) => setStudents(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const handleRemove = async (id: number) => {
    if (!confirm("Really delete this student?")) return

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/students/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // "X-CSRFToken": csrfToken, // if using SessionAuthentication + CSRF
        },
        credentials: "include", // if you need to send cookies
      })

      if (!res.ok) {
        // try parsing JSON, fallback to text
        let errDetail: string
        try {
          const json = await res.json()
          errDetail = json.detail || JSON.stringify(json)
        } catch {
          errDetail = await res.text()
        }
        throw new Error(`Delete failed: ${res.status} ${errDetail}`)
      }

      // Success: remove from local state
      setStudents((current) => current.filter((s) => s.id !== id))
    } catch (err: any) {
      alert(err.message)
    }
  }

  if (loading) {
    return <div className="p-4">Loading students…</div>
  }

  if (students.length === 0) {
    return <div className="p-4">No students found.</div>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Room</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="font-medium">{student.name}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>{student.phone}</TableCell>
            <TableCell>{student.room ?? "-"}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemove(student.id)}
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
