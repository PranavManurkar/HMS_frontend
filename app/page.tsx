'use client'

import Link from "next/link"
import { Building, CreditCard, FileText, Home, Menu, MessageSquare, Settings, User, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Dashboard() {
  const [rowCount, setRowCount] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminFlag = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminFlag);
  }, []);

  
  useEffect(() => {
    const fetchTableInfo = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/students/table_info/");
        setRowCount(response.data.rows); // 👈 coming from DRF table_info
      } catch (error) {
        console.error("Error fetching table info:", error);
      }
    };

    fetchTableInfo();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {isAdmin && (
              <>
             <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {rowCount !== null ? rowCount : "Loading..."} {/* 👈 Handle loading */}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Room Occupancy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,450</div>
                <p className="text-xs text-muted-foreground">15 students with dues</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Maintenance Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">3 high priority</p>
              </CardContent>
            </Card> 
            </>)}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isAdmin && 
            (<Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest events in the hostel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">New student registered</p>
                      <p className="text-xs text-muted-foreground">John Doe has been assigned to Room 203</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">Payment received</p>
                      <p className="text-xs text-muted-foreground">Sarah Johnson paid $850 for monthly rent</p>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">Maintenance request</p>
                      <p className="text-xs text-muted-foreground">Room 105 reported a leaking faucet</p>
                      <p className="text-xs text-muted-foreground">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <X className="h-4 w-4 text-primary" />
                    </div>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">Student checkout</p>
                      <p className="text-xs text-muted-foreground">Michael Brown has checked out from Room 310</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Scheduled events and activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Hostel Inspection</p>
                    <p className="text-xs text-muted-foreground">March 15, 2025 • 10:00 AM</p>
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Maintenance Day</p>
                    <p className="text-xs text-muted-foreground">March 20, 2025 • All Day</p>
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Student Council Meeting</p>
                    <p className="text-xs text-muted-foreground">March 22, 2025 • 4:00 PM</p>
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Rent Due Date</p>
                    <p className="text-xs text-muted-foreground">April 1, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}