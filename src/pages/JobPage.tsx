/** @format */
import { useLoaderData } from "react-router-dom";

const jobLoader = async ({ params }: any) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  return await res.json();
};

const JobPage = () => {
  const job: any = useLoaderData();

  return <h1>{job?.title}</h1>;
};

export { JobPage as default, jobLoader };
