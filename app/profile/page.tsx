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
  Save,
  Camera,
  Lock,
  Bell,
  History,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
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
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">My Profile</h1>
              <p className="text-muted-foreground">Manage your personal information and preferences</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <Card className="md:col-span-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="outline" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                      <Camera className="h-4 w-4" />
                      <span className="sr-only">Change profile picture</span>
                    </Button>
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold">John Smith</h2>
                    <p className="text-sm text-muted-foreground">Administrator</p>
                  </div>
                  <Separator />
                  <nav className="grid w-full gap-1">
                    <Button variant="ghost" className="justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Personal Info
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <Lock className="mr-2 h-4 w-4" />
                      Security
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </Button>
                    <Button variant="ghost" className="justify-start">
                      <History className="mr-2 h-4 w-4" />
                      Activity
                    </Button>
                  </nav>
                </div>
              </CardContent>
            </Card>

            <div className="md:col-span-3">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details and contact information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" defaultValue="John" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" defaultValue="Smith" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="admin@studenthaven.com" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="job-title">Job Title</Label>
                        <Input id="job-title" defaultValue="Hostel Administrator" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          defaultValue="Experienced hostel administrator with over 5 years of experience in student accommodation management."
                          className="min-h-[100px]"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-6">
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="security" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>Manage your account security and authentication methods</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Authenticator App</p>
                            <p className="text-sm text-muted-foreground">
                              Use an authenticator app to generate one-time codes
                            </p>
                          </div>
                          <Button variant="outline">Setup</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">SMS Authentication</p>
                            <p className="text-sm text-muted-foreground">
                              Receive a code via SMS to verify your identity
                            </p>
                          </div>
                          <Button variant="outline">Setup</Button>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Login Sessions</h3>
                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Current Session</p>
                              <p className="text-sm text-muted-foreground">Windows 11 • Chrome • San Francisco, CA</p>
                              <p className="text-xs text-muted-foreground">Started: March 16, 2025 at 10:23 AM</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500"></div>
                              <span className="text-sm font-medium">Active Now</span>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-md border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Previous Session</p>
                              <p className="text-sm text-muted-foreground">macOS • Safari • San Francisco, CA</p>
                              <p className="text-xs text-muted-foreground">March 15, 2025 at 3:45 PM</p>
                            </div>
                            <Button variant="outline" size="sm">
                              Revoke
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-6">
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Security Settings
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                      <CardDescription>Manage how you receive notifications and alerts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Email Notifications</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="email-payments" className="text-base">
                                Payment Notifications
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications about payments and invoices
                              </p>
                            </div>
                            <Switch id="email-payments" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="email-maintenance" className="text-base">
                                Maintenance Requests
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications about maintenance requests
                              </p>
                            </div>
                            <Switch id="email-maintenance" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="email-complaints" className="text-base">
                                Student Complaints
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications about student complaints
                              </p>
                            </div>
                            <Switch id="email-complaints" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="email-system" className="text-base">
                                System Notifications
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Receive notifications about system updates and maintenance
                              </p>
                            </div>
                            <Switch id="email-system" defaultChecked />
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">In-App Notifications</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="app-payments" className="text-base">
                                Payment Notifications
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Receive in-app notifications about payments and invoices
                              </p>
                            </div>
                            <Switch id="app-payments" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="app-maintenance" className="text-base">
                                Maintenance Requests
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Receive in-app notifications about maintenance requests
                              </p>
                            </div>
                            <Switch id="app-maintenance" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="app-complaints" className="text-base">
                                Student Complaints
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Receive in-app notifications about student complaints
                              </p>
                            </div>
                            <Switch id="app-complaints" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="app-system" className="text-base">
                                System Notifications
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Receive in-app notifications about system updates and maintenance
                              </p>
                            </div>
                            <Switch id="app-system" defaultChecked />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-6">
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Notification Preferences
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="activity" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Activity</CardTitle>
                      <CardDescription>View your recent account activity and login history</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-md border">
                          <div className="bg-muted px-4 py-2 font-medium">Today</div>
                          <div className="divide-y">
                            <div className="flex items-center gap-4 p-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <User className="h-4 w-4 text-primary" />
                              </div>
                              <div className="grid gap-1">
                                <p className="text-sm font-medium">Profile updated</p>
                                <p className="text-xs text-muted-foreground">You updated your profile information</p>
                                <p className="text-xs text-muted-foreground">2 hours ago</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 p-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <Lock className="h-4 w-4 text-primary" />
                              </div>
                              <div className="grid gap-1">
                                <p className="text-sm font-medium">Successful login</p>
                                <p className="text-xs text-muted-foreground">Windows 11 • Chrome • San Francisco, CA</p>
                                <p className="text-xs text-muted-foreground">5 hours ago</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-md border">
                          <div className="bg-muted px-4 py-2 font-medium">Yesterday</div>
                          <div className="divide-y">
                            <div className="flex items-center gap-4 p-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <Settings className="h-4 w-4 text-primary" />
                              </div>
                              <div className="grid gap-1">
                                <p className="text-sm font-medium">Settings updated</p>
                                <p className="text-xs text-muted-foreground">You changed your notification settings</p>
                                <p className="text-xs text-muted-foreground">Yesterday at 4:30 PM</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 p-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <Lock className="h-4 w-4 text-primary" />
                              </div>
                              <div className="grid gap-1">
                                <p className="text-sm font-medium">Successful login</p>
                                <p className="text-xs text-muted-foreground">macOS • Safari • San Francisco, CA</p>
                                <p className="text-xs text-muted-foreground">Yesterday at 10:15 AM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-md border">
                          <div className="bg-muted px-4 py-2 font-medium">Last Week</div>
                          <div className="divide-y">
                            <div className="flex items-center gap-4 p-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <Lock className="h-4 w-4 text-primary" />
                              </div>
                              <div className="grid gap-1">
                                <p className="text-sm font-medium">Password changed</p>
                                <p className="text-xs text-muted-foreground">You changed your password</p>
                                <p className="text-xs text-muted-foreground">March 10, 2025 at 2:15 PM</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 p-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <Bell className="h-4 w-4 text-primary" />
                              </div>
                              <div className="grid gap-1">
                                <p className="text-sm font-medium">Notification settings updated</p>
                                <p className="text-xs text-muted-foreground">
                                  You updated your notification preferences
                                </p>
                                <p className="text-xs text-muted-foreground">March 9, 2025 at 11:30 AM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-6 justify-center">
                      <Button variant="outline">View Full Activity Log</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

