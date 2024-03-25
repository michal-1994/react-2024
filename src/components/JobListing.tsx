/** @format */

import { useState } from "react";
import { Job } from "../interfaces/Job";

interface JobListingProps {
  job: Job;
}

const JobListing = ({ job }: JobListingProps) => {
  const { id, type, title, salary, description, location } = job;
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);

  let descriptionContent = description;

  if (!showFullDescription) {
    descriptionContent = description.substring(0, 90) + "...";
  }

  const toggleDescriptionHandler = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  return (
    <div key={id} className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'>{type}</div>
          <h3 className='text-xl font-bold'>{title}</h3>
        </div>

        <div className='mb-5'>{descriptionContent}</div>

        <button
          onClick={toggleDescriptionHandler}
          className='text-indigo-500 mb-5 hover:text-indigoo-600'
        >
          Show {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className='text-indigo-500 mb-2'>{salary} / Year</h3>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>
            <i className='fa-solid fa-location-dot text-lg'></i>
            {location}
          </div>
          <a
            href={`/job/${id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
