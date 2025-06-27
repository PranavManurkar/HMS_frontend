'use client'

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddRoomForm({ onSuccess, onCancel }: { onSuccess: () => void, onCancel: () => void }) {
  const [roomNumber, setRoomNumber] = useState("")
  const [capacity, setCapacity] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      await axios.post("http://127.0.0.1:8000/api/rooms/", {
        room_number: roomNumber,
        capacity: Number(capacity),
      })
      onSuccess()
    } catch (err) {
      console.error("Failed to add room", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mt-4 w-full max-w-md">
      <CardHeader>
        <CardTitle>Add Room</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          placeholder="Room Number"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <div className="flex gap-2">
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Adding..." : "Submit"}
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
