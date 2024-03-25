/** @format */
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

import jobs from "../jobs.json";

const HomePage = () => {
  const recentJobs = jobs.slice(0, 3);

  return (
    <>
      <Hero
        title='Become a React Dev'
        subtitle='Find the React job that fits your skills and needs'
      />
      <HomeCards />
      <JobListings jobs={recentJobs} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
