"use client";

import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

interface Complaint {
  id: number;
  status: "Open" | "In Progress" | "Resolved";
  student_name: string;
  complaint_text: string;
  date_submitted: string;
}

// function ComplaintCard({
//   status,
//   student_name,
//   complaint_text,
//   date_submitted,
// }: Complaint) {
//   return (
//     <Card className="max-w-sm h-full flex flex-col">
//       <CardHeader className="pb-2">
//         <div className="flex items-center justify-between gap-2">
//           <CardTitle className="text-lg">{student_name}</CardTitle>
//             {status === "Open" && <Badge className="bg-red-500 text-white">Open</Badge>}
//             {status === "In Progress" && <Badge className="bg-yellow-500 text-white">In Progress</Badge>}
//             {status === "Resolved" && <Badge className="bg-green-500 text-white">Resolved</Badge>}

//         </div>
//         <p className="text-xs text-muted-foreground mt-1">
//           Submitted on {new Date(date_submitted).toLocaleString()}
//         </p>
//       </CardHeader>
//       <CardContent className="flex flex-col flex-grow">
//         <p className="text-sm mb-4 flex-grow">{complaint_text}</p>
//         <div className="flex justify-end">
//           <Button size="sm">Manage</Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// Add this prop to allow refreshing UI after PATCH
// interface ComplaintCardProps extends Complaint {
//   onStatusChange: (id: number, newStatus: Complaint["status"]) => void;
// }

interface ComplaintCardProps extends Complaint {
  onStatusChange: (id: number, newStatus: Complaint["status"]) => void;
  isAdmin: boolean;
}


function ComplaintCard({
  id,
  status,
  student_name,
  complaint_text,
  date_submitted,
  onStatusChange,
}: ComplaintCardProps) {
  const updateStatus = async (newStatus: Complaint["status"]) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/complaints/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      onStatusChange(id, newStatus);
    } catch (error) {
      alert("Error updating status.");
      console.error(error);
    }
  };
  // Check if the user is an admin
  // const isAdmin = true; // For testing purposes, you can set this to true  
  
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    // You can change this logic depending on how you detect admin role
    const adminFlag = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminFlag);
  }, []);

  return (
    <Card className="max-w-sm h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg">{student_name}</CardTitle>
          {status === "Open" && (
            <Badge className="bg-red-500 text-white">Open</Badge>
          )}
          {status === "In Progress" && (
            <Badge className="bg-yellow-500 text-white">In Progress</Badge>
          )}
          {status === "Resolved" && (
            <Badge className="bg-green-500 text-white">Resolved</Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Submitted on {new Date(date_submitted).toLocaleString()}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-sm mb-4 flex-grow">{complaint_text}</p>
        <div className="flex justify-end">
        {isAdmin && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => updateStatus("Open")}>
                Mark as Open
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateStatus("In Progress")}>
                Mark as In Progress
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => updateStatus("Resolved")}>
                Mark as Resolved
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        </div>
      </CardContent>
    </Card>
  );
}


const GetComplaintsData = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    // You can change this logic depending on how you detect admin role
    const adminFlag = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminFlag);
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/complaints/")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch complaints");
        return res.json();
      })
      .then((data) => {
        setComplaints(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-8">Loading complaints...</p>;
  if (error) return <p className="text-center py-8 text-red-500">Error: {error}</p>;

  const filterComplaints = (status: string) =>
    complaints.filter((c) => status === "all" || c.status === status);

  return (
    <div className="container mx-auto px-4 py-6">
      <Tabs defaultValue="all" className="mt-6">
        <TabsList className="flex-wrap justify-center">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="Open">Open</TabsTrigger>
          <TabsTrigger value="In Progress">In Progress</TabsTrigger>
          <TabsTrigger value="Resolved">Resolved</TabsTrigger>
        </TabsList>

        {["all", "Open", "In Progress", "Resolved"].map((status) => (
          <TabsContent key={status} value={status} className="mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filterComplaints(status).map((complaint) => (
                // <ComplaintCard key={complaint.id} {...complaint} />
                <ComplaintCard
                  key={complaint.id}
                  isAdmin={isAdmin}
                  {...complaint}
                  onStatusChange={(id, newStatus) => {
                    setComplaints(prev =>
                      prev.map(c => (c.id === id ? { ...c, status: newStatus } : c))
                    );
                  }}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default GetComplaintsData;
