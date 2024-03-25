/** @format */
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AddJobPage from "./pages/AddJobPage";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import { Job } from "./interfaces/Job";

const App = () => {
  const addJob = (newJob: Job) => {
    console.log(newJob);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
