"use client";
import { useEffect, useState } from "react"
import Link from "next/link"
import { Building, CreditCard, FileText, Home, Menu, MessageSquare, Search, Settings, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import AddRoomForm from "./addRoomForm"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import RoomTabs from "./getRoomsData"



export default function RoomsPage() {
  const [showForm, setShowForm] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminFlag = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminFlag);
  }, []);

  const handleSuccess = () => {
    setShowForm(false)
    // Optionally: refresh room list here
  }

  // useEffect(() => {
  //     const adminFlag = localStorage.getItem('isAdmin') === 'true';
  //     setIsAdmin(adminFlag);
  //   }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/students"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Users className="h-5 w-5" />
                Students
              </Link>
              <Link href="/rooms" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary">
                <Building className="h-5 w-5" />
                Rooms
              </Link>
              <Link
                href="/billing"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <CreditCard className="h-5 w-5" />
                Billing
              </Link>
              <Link
                href="/complaints"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <MessageSquare className="h-5 w-5" />
                Complaints
              </Link>
              <Link
                href="/reports"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <FileText className="h-5 w-5" />
                Reports
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Building className="h-6 w-6" />
          <span className="text-lg font-semibold">Hostel Manager</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/profile">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          </Link>
          <Button size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[250px] flex-col border-r bg-background md:flex">
          <nav className="grid gap-2 p-4 text-sm">
            <Link href="/" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary">
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            {/* <Link
              href="/students"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <Users className="h-5 w-5" />
              Students
            </Link> */}
            <Link
              href="/rooms"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <Building className="h-5 w-5" />
              Rooms
            </Link>
            {/* <Link
              href="/billing"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <CreditCard className="h-5 w-5" />
              Billing
            </Link> */}
            <Link
              href="/complaints"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <MessageSquare className="h-5 w-5" />
              Complaints
            </Link>
            {/* <Link
              href="/reports"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <FileText className="h-5 w-5" />
              Reports
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link> */}
            {isAdmin && (
              <>
                <Link href="/students" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary">
                  <Users className="h-5 w-5" />
                  Students
                </Link>
                <Link href="/billing" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary">
                  <CreditCard className="h-5 w-5" />
                  Billing
                </Link>
                <Link href="/complaints" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary">
                  <MessageSquare className="h-5 w-5" />
                  Complaints
                </Link>
                <Link href="/settings" className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary">
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
              </>
            )}
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Rooms</h1>
              <p className="text-muted-foreground">Manage room allocations and maintenance</p>
            </div>
            <div className="flex items-center gap-2">
              {/* <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search rooms..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[300px]"
                />
              </div> */}
              {isAdmin && (<Button onClick={() => setShowForm(true)}>Add Room</Button>)}
      {showForm && (
        <AddRoomForm onSuccess={handleSuccess} onCancel={() => setShowForm(false)} />
      )}
            </div>
          </div>
          <RoomTabs />
        </main>
      </div>
    </div>
  )
}

interface RoomCardProps {
  roomNumber: string
  floor: string
  capacity: string
  occupants: string
  status: "occupied" | "partially-occupied" | "vacant" | "maintenance"
  maintenanceIssue?: string
}

function RoomCard({ roomNumber, floor, capacity, occupants, status, maintenanceIssue }: RoomCardProps) {
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
        <p className="text-sm text-muted-foreground">{floor}</p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-sm">Capacity:</span>
            <span className="text-sm font-medium">
              {capacity} {Number.parseInt(capacity) > 1 ? "students" : "student"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Occupants:</span>
            <span className="text-sm font-medium">
              {occupants} {Number.parseInt(occupants) > 1 || occupants === "0" ? "students" : "student"}
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
  )
}

