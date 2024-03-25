/** @format */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../components/Spinner";
import { Job } from "../interfaces/Job";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  return loading ? <Spinner loading={loading} /> : <h1>{job?.title}</h1>;
};

export default JobPage;
