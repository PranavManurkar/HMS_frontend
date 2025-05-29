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

interface Complaint {
  id: number;
  status: "Open" | "In Progress" | "Resolved";
  student_name: string;
  complaint_text: string;
  date_submitted: string;
}

function ComplaintCard({
  status,
  student_name,
  complaint_text,
  date_submitted,
}: Complaint) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>{student_name}</CardTitle>
          {status === "Open" && <Badge className="bg-red-500">Open</Badge>}
          {status === "In Progress" && <Badge className="bg-yellow-500">In Progress</Badge>}
          {status === "Resolved" && <Badge className="bg-green-500">Resolved</Badge>}
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Submitted on {new Date(date_submitted).toLocaleString()}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{complaint_text}</p>
        <div className="flex justify-end">
          <Button size="sm">Manage</Button>
        </div>
      </CardContent>
    </Card>
  );
}

const GetComplaintsData = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <p>Loading complaints...</p>;
  if (error) return <p>Error: {error}</p>;

  const filterComplaints = (status: string) =>
    complaints.filter((c) => status === "all" || c.status === status);

  return (
    <Tabs defaultValue="all" className="mt-6">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="Open">Open</TabsTrigger>
        <TabsTrigger value="In Progress">In Progress</TabsTrigger>
        <TabsTrigger value="Resolved">Resolved</TabsTrigger>
      </TabsList>

      {["all", "Open", "In Progress", "Resolved"].map((status) => (
        <TabsContent key={status} value={status} className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterComplaints(status).map((complaint) => (
              <ComplaintCard key={complaint.id} {...complaint} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default GetComplaintsData;
