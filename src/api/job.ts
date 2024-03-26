/** @format */
import { toast } from "react-toastify";

import { Job } from "../interfaces/Job";

// Add Job
export const addJob = async (newJob: Job) => {
  try {
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    if (response?.ok) {
      toast.success("Job added successfully");
    } else {
      toast.error("Failed to add job. Please try again later.");
    }
  } catch (error) {
    console.error(error);
  }
};

// Delete Job
export const deleteJob = async (jobId: string) => {
  try {
    const response = await fetch(`/api/jobs/${jobId}`, {
      method: "DELETE",
    });

    if (response?.ok) {
      toast.success("Job removed successfully");
    } else {
      toast.error("Failed to remove job. Please try again later.");
    }
  } catch (error) {
    console.error(error);
  }
};

// Edit Job
export const updateJob = async (editedJob: Job) => {
  try {
    const response = await fetch(`/api/jobs/${editedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedJob),
    });

    if (response?.ok) {
      toast.success("Job edited successfully");
    } else {
      toast.error("Failed to edit job. Please try again later.");
    }
  } catch (error) {
    console.error(error);
  }
};
