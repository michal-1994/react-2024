/** @format */
import { useEffect, useState } from "react";

import JobListing from "./JobListing";
import Spinner from "./Spinner";

import { API_URL } from "../constatns/api";
import { Job } from "../interfaces/Job";

interface JobListingsProps {
  isHome: boolean;
}

const JobListings = ({ isHome }: JobListingsProps) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const jobsQuery = isHome ? "?_limit=3" : "";

    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_URL}/jobs${jobsQuery}`);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job: Job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
