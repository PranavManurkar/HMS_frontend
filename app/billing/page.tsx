// import Link from "next/link"
// import {
//   Building,
//   CreditCard,
//   FileText,
//   Home,
//   Menu,
//   MessageSquare,
//   Search,
//   Settings,
//   User,
//   Users,
//   Download,
//   Filter,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// export default function BillingPage() {
//   return (
//     <div className="flex min-h-screen w-full flex-col bg-muted/40">
//       <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="outline" size="icon" className="shrink-0 md:hidden">
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Toggle navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="flex flex-col">
//             <nav className="grid gap-2 text-lg font-medium">
//               <Link
//                 href="/"
//                 className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//               >
//                 <Home className="h-5 w-5" />
//                 Dashboard
//               </Link>
//               <Link
//                 href="/students"
//                 className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//               >
//                 <Users className="h-5 w-5" />
//                 Students
//               </Link>
//               <Link
//                 href="/rooms"
//                 className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//               >
//                 <Building className="h-5 w-5" />
//                 Rooms
//               </Link>
//               <Link href="/billing" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary">
//                 <CreditCard className="h-5 w-5" />
//                 Billing
//               </Link>
//               <Link
//                 href="/complaints"
//                 className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//               >
//                 <MessageSquare className="h-5 w-5" />
//                 Complaints
//               </Link>
//               <Link
//                 href="/reports"
//                 className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//               >
//                 <FileText className="h-5 w-5" />
//                 Reports
//               </Link>
//               <Link
//                 href="/settings"
//                 className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//               >
//                 <Settings className="h-5 w-5" />
//                 Settings
//               </Link>
//             </nav>
//           </SheetContent>
//         </Sheet>
//         <div className="flex items-center gap-2">
//           <Building className="h-6 w-6" />
//           <span className="text-lg font-semibold">Hostel Manager</span>
//         </div>
//         <div className="ml-auto flex items-center gap-4">
//           <Button variant="outline" size="sm" className="hidden md:flex">
//             <User className="mr-2 h-4 w-4" />
//             Profile
//           </Button>
//           <Button size="sm">
//             <Settings className="mr-2 h-4 w-4" />
//             Settings
//           </Button>
//         </div>
//       </header>
//       <div className="flex flex-1">
//         <aside className="hidden w-[250px] flex-col border-r bg-background md:flex">
//           <nav className="grid gap-2 p-4 text-sm">
//             <Link
//               href="/"
//               className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//             >
//               <Home className="h-5 w-5" />
//               Dashboard
//             </Link>
//             <Link
//               href="/students"
//               className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//             >
//               <Users className="h-5 w-5" />
//               Students
//             </Link>
//             <Link
//               href="/rooms"
//               className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//             >
//               <Building className="h-5 w-5" />
//               Rooms
//             </Link>
//             <Link href="/billing" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary">
//               <CreditCard className="h-5 w-5" />
//               Billing
//             </Link>
//             <Link
//               href="/complaints"
//               className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//             >
//               <MessageSquare className="h-5 w-5" />
//               Complaints
//             </Link>
//             <Link
//               href="/reports"
//               className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//             >
//               <FileText className="h-5 w-5" />
//               Reports
//             </Link>
//             <Link
//               href="/settings"
//               className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
//             >
//               <Settings className="h-5 w-5" />
//               Settings
//             </Link>
//           </nav>
//         </aside>
//         <main className="flex-1 p-4 md:p-6">
//           <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold">Billing & Payments</h1>
//               <p className="text-muted-foreground">Manage student payments and financial records</p>
//             </div>
//             <div className="flex items-center gap-2">
//               <Button variant="outline" className="hidden sm:flex">
//                 <Download className="mr-2 h-4 w-4" />
//                 Export
//               </Button>
//               <Button>Generate Invoice</Button>
//             </div>
//           </div>

//           <div className="mt-6 grid gap-6 md:grid-cols-3">
//             <Card>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">$87,450</div>
//                 <p className="text-xs text-muted-foreground">+8% from last month</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">$12,450</div>
//                 <p className="text-xs text-muted-foreground">15 students with dues</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-sm font-medium">Overdue Payments</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">$3,850</div>
//                 <p className="text-xs text-muted-foreground">5 students with overdue</p>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
//             <div className="relative flex-1">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input type="search" placeholder="Search payments..." className="w-full rounded-lg bg-background pl-8" />
//             </div>
//             <div className="flex items-center gap-2">
//               <Select defaultValue="all">
//                 <SelectTrigger className="w-[180px]">
//                   <SelectValue placeholder="Payment Status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Statuses</SelectItem>
//                   <SelectItem value="paid">Paid</SelectItem>
//                   <SelectItem value="pending">Pending</SelectItem>
//                   <SelectItem value="overdue">Overdue</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Button variant="outline" size="icon">
//                 <Filter className="h-4 w-4" />
//                 <span className="sr-only">Filter</span>
//               </Button>
//             </div>
//           </div>

//           <Tabs defaultValue="invoices" className="mt-6">
//             <TabsList>
//               <TabsTrigger value="invoices">Invoices</TabsTrigger>
//               <TabsTrigger value="payments">Payments</TabsTrigger>
//               <TabsTrigger value="history">Payment History</TabsTrigger>
//             </TabsList>
//             <TabsContent value="invoices" className="mt-4">
//               <Card>
//                 <CardContent className="p-0">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Invoice #</TableHead>
//                         <TableHead>Student</TableHead>
//                         <TableHead>Room</TableHead>
//                         <TableHead>Amount</TableHead>
//                         <TableHead>Due Date</TableHead>
//                         <TableHead>Status</TableHead>
//                         <TableHead className="text-right">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       <TableRow>
//                         <TableCell className="font-medium">INV-1001</TableCell>
//                         <TableCell>John Doe</TableCell>
//                         <TableCell>203</TableCell>
//                         <TableCell>$850</TableCell>
//                         <TableCell>Apr 1, 2025</TableCell>
//                         <TableCell>
//                           <Badge className="bg-green-500">Paid</Badge>
//                         </TableCell>
//                         <TableCell className="text-right">
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button variant="ghost" size="sm">
//                                 Actions
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuItem>View Invoice</DropdownMenuItem>
//                               <DropdownMenuItem>Download PDF</DropdownMenuItem>
//                               <DropdownMenuItem>Send Reminder</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="font-medium">INV-1002</TableCell>
//                         <TableCell>Sarah Johnson</TableCell>
//                         <TableCell>105</TableCell>
//                         <TableCell>$850</TableCell>
//                         <TableCell>Apr 1, 2025</TableCell>
//                         <TableCell>
//                           <Badge className="bg-green-500">Paid</Badge>
//                         </TableCell>
//                         <TableCell className="text-right">
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button variant="ghost" size="sm">
//                                 Actions
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuItem>View Invoice</DropdownMenuItem>
//                               <DropdownMenuItem>Download PDF</DropdownMenuItem>
//                               <DropdownMenuItem>Send Reminder</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="font-medium">INV-1003</TableCell>
//                         <TableCell>Robert Smith</TableCell>
//                         <TableCell>310</TableCell>
//                         <TableCell>$850</TableCell>
//                         <TableCell>Apr 1, 2025</TableCell>
//                         <TableCell>
//                           <Badge className="bg-yellow-500">Pending</Badge>
//                         </TableCell>
//                         <TableCell className="text-right">
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button variant="ghost" size="sm">
//                                 Actions
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuItem>View Invoice</DropdownMenuItem>
//                               <DropdownMenuItem>Download PDF</DropdownMenuItem>
//                               <DropdownMenuItem>Send Reminder</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="font-medium">INV-1004</TableCell>
//                         <TableCell>Emily Davis</TableCell>
//                         <TableCell>207</TableCell>
//                         <TableCell>$850</TableCell>
//                         <TableCell>Mar 1, 2025</TableCell>
//                         <TableCell>
//                           <Badge className="bg-red-500">Overdue</Badge>
//                         </TableCell>
//                         <TableCell className="text-right">
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button variant="ghost" size="sm">
//                                 Actions
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuItem>View Invoice</DropdownMenuItem>
//                               <DropdownMenuItem>Download PDF</DropdownMenuItem>
//                               <DropdownMenuItem>Send Reminder</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="font-medium">INV-1005</TableCell>
//                         <TableCell>James Wilson</TableCell>
//                         <TableCell>301</TableCell>
//                         <TableCell>$850</TableCell>
//                         <TableCell>Apr 1, 2025</TableCell>
//                         <TableCell>
//                           <Badge className="bg-yellow-500">Pending</Badge>
//                         </TableCell>
//                         <TableCell className="text-right">
//                           <DropdownMenu>
//                             <DropdownMenuTrigger asChild>
//                               <Button variant="ghost" size="sm">
//                                 Actions
//                               </Button>
//                             </DropdownMenuTrigger>
//                             <DropdownMenuContent align="end">
//                               <DropdownMenuItem>View Invoice</DropdownMenuItem>
//                               <DropdownMenuItem>Download PDF</DropdownMenuItem>
//                               <DropdownMenuItem>Send Reminder</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="payments" className="mt-4">
//               <Card>
//                 <CardContent className="p-0">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Payment ID</TableHead>
//                         <TableHead>Student</TableHead>
//                         <TableHead>Invoice #</TableHead>
//                         <TableHead>Amount</TableHead>
//                         <TableHead>Payment Date</TableHead>
//                         <TableHead>Method</TableHead>
//                         <TableHead className="text-right">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       <TableRow>
//                         <TableCell className="font-medium">PMT-2001</TableCell>
//                         <TableCell>John Doe</TableCell>
//                         <TableCell>INV-1001</TableCell>
//                         <TableCell>$850</TableCell>
//                         <TableCell>Mar 28, 2025</TableCell>
//                         <TableCell>Credit Card</TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             View Receipt
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="font-medium">PMT-2002</TableCell>
//                         <TableCell>Sarah Johnson</TableCell>
//                         <TableCell>INV-1002</TableCell>
//                         <TableCell>$850</TableCell>
//                         <TableCell>Mar 25, 2025</TableCell>
//                         <TableCell>Bank Transfer</TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             View Receipt
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="font-medium">PMT-1998</TableCell>
//                         <TableCell>Michael Brown</TableCell>
//                         <TableCell>INV-995</TableCell>
//                         <TableCell>$850</TableCell>
//                         <TableCell>Feb 28, 2025</TableCell>
//                         <TableCell>Cash</TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             View Receipt
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//             <TabsContent value="history" className="mt-4">
//               <Card>
//                 <CardContent className="p-0">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Student</TableHead>
//                         <TableHead>Room</TableHead>
//                         <TableHead>Total Paid</TableHead>
//                         <TableHead>Outstanding</TableHead>
//                         <TableHead>Last Payment</TableHead>
//                         <TableHead className="text-right">Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       <TableRow>
//                         <TableCell className="font-medium">John Doe</TableCell>
//                         <TableCell>203</TableCell>
//                         <TableCell>$2,550</TableCell>
//                         <TableCell>$0</TableCell>
//                         <TableCell>Mar 28, 2025</TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             View History
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="font-medium">Sarah Johnson</TableCell>
//                         <TableCell>105</TableCell>
//                         <TableCell>$2,550</TableCell>
//                         <TableCell>$0</TableCell>
//                         <TableCell>Mar 25, 2025</TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             View History
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="font-medium">Robert Smith</TableCell>
//                         <TableCell>310</TableCell>
//                         <TableCell>$1,700</TableCell>
//                         <TableCell>$850</TableCell>
//                         <TableCell>Feb 28, 2025</TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             View History
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell className="font-medium">Emily Davis</TableCell>
//                         <TableCell>207</TableCell>
//                         <TableCell>$1,700</TableCell>
//                         <TableCell>$850</TableCell>
//                         <TableCell>Feb 1, 2025</TableCell>
//                         <TableCell className="text-right">
//                           <Button variant="ghost" size="sm">
//                             View History
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </main>
//       </div>
//     </div>
//   )
// }
"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CardDescription } from '@/components/ui/card'
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
  Download,
  Filter,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type Billing = {
  id: number
  invoice_number: string
  student_name: string
  room_number: string
  amount: number
  due_date: string
  status: 'Paid' | 'Pending' | 'Overdue'
}

type Payment = {
  id: number
  invoice: string
  amount_paid: number
  paid_at: string
}

export default function BillingPage() {
  const usdFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })
  const [invoices, setInvoices] = useState<Billing[]>([])
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)
  const paidInvoices = invoices.filter(inv => inv.status === 'Paid')
  const pendingInvoices = invoices.filter(inv => inv.status === 'Pending')
  const overdueInvoices = invoices.filter(inv => inv.status === 'Overdue')

  // 2. Sum amounts in each group:
  const totalRevenue = paidInvoices.reduce((sum, inv) => sum + inv.amount, 0)
  const pendingAmount = pendingInvoices.reduce((sum, inv) => sum + inv.amount, 0)
  const overdueAmount = overdueInvoices.reduce((sum, inv) => sum + inv.amount, 0)
  useEffect(() => {
    fetchInvoices()
    fetchPayments()
  }, [])

  async function fetchInvoices() {
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billings/`, { cache: 'no-store' })
      if (!res.ok) throw new Error(`Status ${res.status}`)
      const data: Billing[] = await res.json()

      // force numeric amounts here:
      const normalized = data.map(inv => ({
        ...inv,
        amount: Number(inv.amount),           // <-- coerce string to number
        // if inv.amount can be null/undefined, you could do:
        // amount: Number(inv.amount) || 0
      }))
      setInvoices(normalized)
    } catch (err) {
      console.error('fetchInvoices error:', err)
    } finally {
      setLoading(false)
    }
  }

  async function fetchPayments() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/`, { cache: 'no-store' })
      if (!res.ok) return
      const data: Payment[] = await res.json()
      setPayments(data)
    } catch (err) {
      console.error('fetchPayments error:', err)
    }
  }

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
              {/* <Link
                href="/reports"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <FileText className="h-5 w-5" />
                Reports
              </Link> */}
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
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          {/* header, sidebar omitted */}
          <main className="flex-1 p-4 md:p-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Billing & Payments</h1>
              <p className="text-muted-foreground">Manage student payments and financial records</p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Total Revenue */}
              <Card>
                <CardHeader>
                  <CardTitle>Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {usdFormatter.format(totalRevenue)}
                  </div>
                </CardContent>
              </Card>

              {/* Pending Payments */}
              <Card>
                <CardHeader>
                  <CardTitle>Pending Payments</CardTitle>
                  <CardDescription>
                    {pendingInvoices.length} students with dues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {usdFormatter.format(pendingAmount)}
                  </div>
                </CardContent>
              </Card>

              {/* Overdue Payments */}
              <Card>
                <CardHeader>
                  <CardTitle>Overdue Payments</CardTitle>
                  <CardDescription>
                    {overdueInvoices.length} students with overdue
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {usdFormatter.format(overdueAmount)}
                  </div>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="invoices" className="mt-6">
              <TabsList>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
              </TabsList>

              <TabsContent value="invoices" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Invoice #</TableHead>
                          <TableHead>Student</TableHead>
                          <TableHead>Room</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {loading ? (
                          <TableRow>
                            <TableCell colSpan={6}>Loading invoices…</TableCell>
                          </TableRow>
                        ) : invoices.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={6}>No invoices found.</TableCell>
                          </TableRow>
                        ) : (
                          invoices.map(inv => (
                            <TableRow key={inv.id}>
                              <TableCell className="font-medium">{inv.invoice_number}</TableCell>
                              <TableCell>{inv.student_name}</TableCell>
                              <TableCell>{inv.room_number}</TableCell>
                              <TableCell>${inv.amount}</TableCell>
                              <TableCell>{new Date(inv.due_date).toLocaleDateString()}</TableCell>
                              <TableCell>
                                <Badge className={
                                  inv.status === 'Paid'
                                    ? 'bg-green-500'
                                    : inv.status === 'Pending'
                                      ? 'bg-yellow-500'
                                      : 'bg-red-500'
                                }>
                                  {inv.status}
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments" className="mt-4">
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Payment ID</TableHead>
                          <TableHead>Invoice #</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Payment Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={4}>No payments found.</TableCell>
                          </TableRow>
                        ) : (
                          payments.map(pay => (
                            <TableRow key={pay.id}>
                              <TableCell>{pay.id}</TableCell>
                              <TableCell>{pay.invoice}</TableCell>
                              <TableCell>${pay.amount_paid}</TableCell>
                              <TableCell>{new Date(pay.paid_at).toLocaleString()}</TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
      </div>
  )
}



