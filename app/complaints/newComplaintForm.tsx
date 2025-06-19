"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner"; // or your preferred toast lib
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export function NewComplaintForm() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [storedEmail, setStoredEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setStoredEmail(email);
      setValue("student", email); // also set in form
    }
  }, [setValue]);

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/complaints/", {
          // Ensure the student email is used directly
          student_email: storedEmail, // ✅ use email directly
          complaint_text: data.complaint_text,
          status: data.status || "Open",
      });

      toast.success("Complaint submitted!");
      reset();
    } catch (err) {
      toast.error("Failed to submit complaint.");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="student">Student email</Label>
        <Input
          id="student"
          {...register("student", { required: true })}
          placeholder={storedEmail || "Loading..."} // For user display
          type="email"
          readOnly // ✅ non-editable
        />
      </div>

      <div>
        <Label htmlFor="complaint_text">Complaint</Label>
        <Textarea
          id="complaint_text"
          {...register("complaint_text", { required: true })}
          placeholder="Describe the issue..."
        />
      </div>

      {/* <div>
        <Label>Status</Label>
        <Select
          defaultValue="Open"
          onValueChange={(val) => setValue("status", val)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Open">Open</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Resolved">Resolved</SelectItem>
          </SelectContent>
        </Select>
      </div> */}

      <Button type="submit" className="w-full">
        Submit Complaint
      </Button>
    </form>
  );
}
