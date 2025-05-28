"use client"; // THIS MAKES THE COMPONENT CLIENT-SIDE

import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Building, CreditCard, FileText, Home, Menu, MessageSquare, Search, Settings, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

type RoomStatus = "occupied" | "partially-occupied" | "vacant" | "maintenance";

const normalizeStatus = (s: string): RoomStatus => {
  const norm = s.toLowerCase().replace(/\s+/g, "-");
  if (
    norm === "occupied" ||
    norm === "partially-occupied" ||
    norm === "vacant" ||
    norm === "maintenance"
  ) {
    return norm;
  }
  // Default fallback
  return "vacant";
};

interface RoomCardProps {
  roomNumber: number | string;
  capacity: number;
  occupants: number;
  status: "occupied" | "partially-occupied" | "vacant" | "maintenance";
  maintenanceIssue?: string;
}


function RoomCard({ roomNumber, capacity, occupants, status, maintenanceIssue }: RoomCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Room {roomNumber}</CardTitle>
          {status === "occupied" && <Badge className="bg-green-500">Occupied</Badge>}
          {status === "partially-occupied" && <Badge className="bg-blue-500">Partially Occupied</Badge>}
          {status === "vacant" && <Badge className="bg-gray-500">Vacant</Badge>}
          {status === "maintenance" && <Badge className="bg-yellow-500">Maintenance</Badge>}
        </div>
        {/* floor removed here */}
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-sm">Capacity:</span>
            <span className="text-sm font-medium">
              {capacity} {capacity > 1 ? "students" : "student"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Occupants:</span>
            <span className="text-sm font-medium">
              {occupants} {occupants > 1 || occupants === 0 ? "students" : "student"}
            </span>
          </div>
          {maintenanceIssue && (
            <div className="flex justify-between">
              <span className="text-sm">Issue:</span>
              <span className="text-sm font-medium">{maintenanceIssue}</span>
            </div>
          )}
          <div className="mt-4 flex justify-end">
            <Button size="sm">Manage</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


type Room = {
  id: number;
  room_number: string;
  capacity: number;
  occupied: number;
  issue: string | null;
  status: string;
};

const RoomTabs = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/rooms/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch rooms");
        return res.json();
      })
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading rooms...</p>;
  if (error) return <p>Error: {error}</p>;

  const filterRooms = (status: string) =>
    rooms.filter((room) => {
      if (status === "all") return true;
      if (status === "maintenance") return room.issue !== null && room.issue !== "";
      return room.status.toLowerCase() === status;
    });

  return (
    <Tabs defaultValue="all" className="mt-6">
      <TabsList>
        <TabsTrigger value="all">All Rooms</TabsTrigger>
        <TabsTrigger value="occupied">Occupied</TabsTrigger>
        <TabsTrigger value="vacant">Vacant</TabsTrigger>
        <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
      </TabsList>

      {["all", "occupied", "vacant", "maintenance"].map((status) => (
        <TabsContent key={status} value={status} className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterRooms(status).map((room) => (
              <RoomCard
                key={room.id}
                roomNumber={room.room_number}
                capacity={room.capacity}
                occupants={room.occupied}
                status={status === "maintenance" ? "maintenance" : normalizeStatus(room.status)}
                maintenanceIssue={room.issue || undefined}
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default RoomTabs;
