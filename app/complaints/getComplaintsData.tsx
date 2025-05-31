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
    <Card className="max-w-sm h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg">{student_name}</CardTitle>
            {status === "Open" && <Badge className="bg-red-500 text-white">Open</Badge>}
            {status === "In Progress" && <Badge className="bg-yellow-500 text-white">In Progress</Badge>}
            {status === "Resolved" && <Badge className="bg-green-500 text-white">Resolved</Badge>}

        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Submitted on {new Date(date_submitted).toLocaleString()}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-sm mb-4 flex-grow">{complaint_text}</p>
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
                <ComplaintCard key={complaint.id} {...complaint} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default GetComplaintsData;
