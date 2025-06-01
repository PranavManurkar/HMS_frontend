import Link from "next/link"
import {
  Building,
  CreditCard,
  FileText,
  Home,
  Menu,
  MessageSquare,
  Search,
  Settings,
  User,
  Users,
  Filter,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import ComplaintsTable from "./getComplaintsData"
import { Label } from "@/components/ui/label"
import { NewComplaintForm } from "./newComplaintForm"


export default function ComplaintsPage() {
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
              <Link href="/complaints" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary">
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
            <Link href="/complaints" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary">
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
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Complaints & Maintenance</h1>
              <p className="text-muted-foreground">Manage student complaints and maintenance requests</p>
            </div>
            <div className="flex items-center gap-2">
              {/* <Sheet>
                <SheetTrigger asChild>
                  <Button>New Complaint</Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[400px] sm:w-[500px]">
                  <SheetHeader>
                    <SheetTitle>Add New Complaint</SheetTitle>
                  </SheetHeader>
                  <form className="mt-6 flex flex-col gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="student-name">Student Name</Label>
                      <Input id="student-name" placeholder="e.g., John Doe" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="room-number">Room Number</Label>
                      <Input id="room-number" placeholder="e.g., 203" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="issue">Issue</Label>
                      <Textarea id="issue" placeholder="Describe the complaint..." />
                    </div> */}
                    {/* <div className="grid gap-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select>
                        <SelectTrigger id="priority">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}
                    {/* <Button type="submit" className="mt-4">Submit Complaint</Button>
                  </form>
                </SheetContent>
              </Sheet> */}
              <NewComplaintForm />
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Open Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">3 high priority</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">2 maintenance requests</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Resolved This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Avg resolution: 2.3 days</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search complaints..."
                className="w-full rounded-lg bg-background pl-8"
              />
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="mt-6">
            <TabsList>
              <TabsTrigger value="all">All Complaints</TabsTrigger>
              <TabsTrigger value="open">Open</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  {/* <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Student</TableHead>
                        <TableHead>Room</TableHead>
                        <TableHead>Issue</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody> */}
                      {/* <TableRow>
                        <TableCell className="font-medium">C-1001</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>203</TableCell>
                        <TableCell>Broken AC</TableCell>
                        <TableCell>Mar 28, 2025</TableCell>
                        <TableCell>
                          <Badge className="bg-red-500">High</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <span>Open</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                Actions
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Assign Technician</DropdownMenuItem>
                              <DropdownMenuItem>Mark as In Progress</DropdownMenuItem>
                              <DropdownMenuItem>Mark as Resolved</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow> */}
                      {/* <TableRow>
                        <TableCell className="font-medium">C-1002</TableCell>
                        <TableCell>Sarah Johnson</TableCell>
                        <TableCell>105</TableCell>
                        <TableCell>Leaking faucet</TableCell>
                        <TableCell>Mar 27, 2025</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-500">Medium</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-blue-500" />
                            <span>In Progress</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                Actions
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Update Status</DropdownMenuItem>
                              <DropdownMenuItem>Mark as Resolved</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow> */}
                      {/* <TableRow>
                        <TableCell className="font-medium">C-1003</TableCell>
                        <TableCell>Robert Smith</TableCell>
                        <TableCell>310</TableCell>
                        <TableCell>Noisy neighbors</TableCell>
                        <TableCell>Mar 25, 2025</TableCell>
                        <TableCell>
                          <Badge className="bg-green-500">Low</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <span>Open</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                Actions
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Assign Staff</DropdownMenuItem>
                              <DropdownMenuItem>Mark as In Progress</DropdownMenuItem>
                              <DropdownMenuItem>Mark as Resolved</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow> */}
                      {/* <TableRow>
                        <TableCell className="font-medium">C-1004</TableCell>
                        <TableCell>Emily Davis</TableCell>
                        <TableCell>207</TableCell>
                        <TableCell>Broken window</TableCell>
                        <TableCell>Mar 20, 2025</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-500">Medium</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Resolved</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                Actions
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Reopen</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow> */}
                      <ComplaintsTable/>
                    {/* </TableBody>
                  </Table> */}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="open" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">New Complaint</h3>
                      <p className="text-sm text-muted-foreground">Submit a new complaint or maintenance request</p>
                    </div>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="student" className="text-sm font-medium">
                          Student
                        </label>
                        <Select>
                          <SelectTrigger id="student">
                            <SelectValue placeholder="Select student" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="john">John Doe (Room 203)</SelectItem>
                            <SelectItem value="sarah">Sarah Johnson (Room 105)</SelectItem>
                            <SelectItem value="robert">Robert Smith (Room 310)</SelectItem>
                            <SelectItem value="emily">Emily Davis (Room 207)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="category" className="text-sm font-medium">
                          Category
                        </label>
                        <Select>
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plumbing">Plumbing</SelectItem>
                            <SelectItem value="electrical">Electrical</SelectItem>
                            <SelectItem value="furniture">Furniture</SelectItem>
                            <SelectItem value="appliance">Appliance</SelectItem>
                            <SelectItem value="noise">Noise Complaint</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="priority" className="text-sm font-medium">
                          Priority
                        </label>
                        <Select defaultValue="medium">
                          <SelectTrigger id="priority">
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="description" className="text-sm font-medium">
                          Description
                        </label>
                        <Textarea
                          id="description"
                          placeholder="Describe the issue in detail"
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button className="w-full">Submit Complaint</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="in-progress" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Student</TableHead>
                        <TableHead>Room</TableHead>
                        <TableHead>Issue</TableHead>
                        <TableHead>Assigned To</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* <TableRow>
                        <TableCell className="font-medium">C-1002</TableCell>
                        <TableCell>Sarah Johnson</TableCell>
                        <TableCell>105</TableCell>
                        <TableCell>Leaking faucet</TableCell>
                        <TableCell>Mike (Plumber)</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-blue-500" />
                            <span>In Progress</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Update
                          </Button>
                        </TableCell>
                      </TableRow> */}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="resolved" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Student</TableHead>
                        <TableHead>Room</TableHead>
                        <TableHead>Issue</TableHead>
                        <TableHead>Resolved Date</TableHead>
                        <TableHead>Resolution</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {/* <TableRow>
                        <TableCell className="font-medium">C-1004</TableCell>
                        <TableCell>Emily Davis</TableCell>
                        <TableCell>207</TableCell>
                        <TableCell>Broken window</TableCell>
                        <TableCell>Mar 22, 2025</TableCell>
                        <TableCell>Window replaced</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow> */}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

