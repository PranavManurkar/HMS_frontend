'use client'
import Link from "next/link"
import {
  Building,
  CreditCard,
  FileText,
  Home,
  Menu,
  MessageSquare,
  Settings,
  User,
  Users,
  Download,
  BarChart,
  PieChart,
  LineChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"

export default function ReportsPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminFlag = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminFlag);
  }, []);
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
              <Link
                href="/rooms"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
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
              <Link href="/reports" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary">
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
          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
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
              <h1 className="text-2xl font-bold">Reports & Analytics</h1>
              <p className="text-muted-foreground">View and generate reports for your hostel</p>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="march">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="january">January 2025</SelectItem>
                  <SelectItem value="february">February 2025</SelectItem>
                  <SelectItem value="march">March 2025</SelectItem>
                  <SelectItem value="april">April 2025</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$87,450</div>
                <p className="text-xs text-muted-foreground">+8% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Maintenance Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,850</div>
                <p className="text-xs text-muted-foreground">-5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="financial" className="mt-6">
            <TabsList>
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="occupancy">Occupancy</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="custom">Custom Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="financial" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Monthly revenue breakdown</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex h-[300px] items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <BarChart className="h-16 w-16 text-muted-foreground" />
                        <h3 className="text-lg font-medium">Revenue Chart</h3>
                        <p className="text-sm text-muted-foreground">
                          Monthly revenue data visualization would appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Status</CardTitle>
                    <CardDescription>Current payment status distribution</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex h-[300px] items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <PieChart className="h-16 w-16 text-muted-foreground" />
                        <h3 className="text-lg font-medium">Payment Status Chart</h3>
                        <p className="text-sm text-muted-foreground">
                          Payment status distribution visualization would appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Financial Summary</CardTitle>
                    <CardDescription>Monthly financial breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">Total Revenue</div>
                          <div className="text-2xl font-bold">$87,450</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">Expenses</div>
                          <div className="text-2xl font-bold">$12,350</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">Net Profit</div>
                          <div className="text-2xl font-bold">$75,100</div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="mb-4 text-sm font-medium">Expense Breakdown</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Maintenance</div>
                            <div className="text-sm font-medium">$3,850 (31%)</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Utilities</div>
                            <div className="text-sm font-medium">$4,200 (34%)</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Staff Salaries</div>
                            <div className="text-sm font-medium">$3,500 (28%)</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Miscellaneous</div>
                            <div className="text-sm font-medium">$800 (7%)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="occupancy" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Occupancy Trend</CardTitle>
                    <CardDescription>Monthly occupancy rate</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex h-[300px] items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <LineChart className="h-16 w-16 text-muted-foreground" />
                        <h3 className="text-lg font-medium">Occupancy Trend Chart</h3>
                        <p className="text-sm text-muted-foreground">
                          Monthly occupancy trend visualization would appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Room Type Distribution</CardTitle>
                    <CardDescription>Occupancy by room type</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex h-[300px] items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <PieChart className="h-16 w-16 text-muted-foreground" />
                        <h3 className="text-lg font-medium">Room Type Chart</h3>
                        <p className="text-sm text-muted-foreground">
                          Room type distribution visualization would appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Occupancy Summary</CardTitle>
                    <CardDescription>Current occupancy statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">Total Rooms</div>
                          <div className="text-2xl font-bold">120</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">Occupied</div>
                          <div className="text-2xl font-bold">104</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">Vacant</div>
                          <div className="text-2xl font-bold">16</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">Occupancy Rate</div>
                          <div className="text-2xl font-bold">87%</div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="mb-4 text-sm font-medium">Floor-wise Occupancy</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm">1st Floor</div>
                            <div className="text-sm font-medium">92% (35/38 rooms)</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">2nd Floor</div>
                            <div className="text-sm font-medium">89% (34/38 rooms)</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">3rd Floor</div>
                            <div className="text-sm font-medium">82% (31/38 rooms)</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">4th Floor</div>
                            <div className="text-sm font-medium">83% (5/6 rooms)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="maintenance" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Maintenance Requests</CardTitle>
                    <CardDescription>Monthly maintenance trends</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex h-[300px] items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <BarChart className="h-16 w-16 text-muted-foreground" />
                        <h3 className="text-lg font-medium">Maintenance Requests Chart</h3>
                        <p className="text-sm text-muted-foreground">
                          Monthly maintenance request visualization would appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Issue Categories</CardTitle>
                    <CardDescription>Breakdown by maintenance type</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex h-[300px] items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-center">
                        <PieChart className="h-16 w-16 text-muted-foreground" />
                        <h3 className="text-lg font-medium">Issue Categories Chart</h3>
                        <p className="text-sm text-muted-foreground">
                          Maintenance issue categories visualization would appear here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Maintenance Summary</CardTitle>
                    <CardDescription>Current maintenance statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">Total Requests</div>
                          <div className="text-2xl font-bold">42</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">Open</div>
                          <div className="text-2xl font-bold">12</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">In Progress</div>
                          <div className="text-2xl font-bold">5</div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-sm font-medium text-muted-foreground">Resolved</div>
                          <div className="text-2xl font-bold">25</div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="mb-4 text-sm font-medium">Issue Categories</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Plumbing</div>
                            <div className="text-sm font-medium">38% (16 requests)</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Electrical</div>
                            <div className="text-sm font-medium">24% (10 requests)</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Furniture</div>
                            <div className="text-sm font-medium">19% (8 requests)</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Other</div>
                            <div className="text-sm font-medium">19% (8 requests)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="custom" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Custom Report Generator</CardTitle>
                  <CardDescription>Create custom reports based on your requirements</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="grid gap-2">
                        <label htmlFor="report-type" className="text-sm font-medium">
                          Report Type
                        </label>
                        <Select>
                          <SelectTrigger id="report-type">
                            <SelectValue placeholder="Select report type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="financial">Financial Report</SelectItem>
                            <SelectItem value="occupancy">Occupancy Report</SelectItem>
                            <SelectItem value="maintenance">Maintenance Report</SelectItem>
                            <SelectItem value="student">Student Report</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="date-range" className="text-sm font-medium">
                          Date Range
                        </label>
                        <Select>
                          <SelectTrigger id="date-range">
                            <SelectValue placeholder="Select date range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="current-month">Current Month</SelectItem>
                            <SelectItem value="last-month">Last Month</SelectItem>
                            <SelectItem value="last-quarter">Last Quarter</SelectItem>
                            <SelectItem value="last-year">Last Year</SelectItem>
                            <SelectItem value="custom">Custom Range</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="data-fields" className="text-sm font-medium">
                        Data Fields
                      </label>
                      <div className="grid gap-2 md:grid-cols-3">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="revenue" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="revenue" className="text-sm">
                            Revenue
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="expenses" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="expenses" className="text-sm">
                            Expenses
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="occupancy" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="occupancy" className="text-sm">
                            Occupancy Rate
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="maintenance" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="maintenance" className="text-sm">
                            Maintenance
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="student-data" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="student-data" className="text-sm">
                            Student Data
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="room-data" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="room-data" className="text-sm">
                            Room Data
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="format" className="text-sm font-medium">
                        Output Format
                      </label>
                      <Select defaultValue="pdf">
                        <SelectTrigger id="format">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="excel">Excel</SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end">
                      <Button>Generate Report</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

