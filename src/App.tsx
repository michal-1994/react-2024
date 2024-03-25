/** @format */
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
