import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Jobspage from "./pages/Jobspage";
import AddJobs from "./pages/AddJobs";
import PageNotFound from "./pages/PageNotFound";
import JobDetails, { jobLoader } from "./pages/JobDetails";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/job" element={<Jobspage/>} />
        <Route path="/job/:id" element={<JobDetails/>} loader={jobLoader}/>
        <Route path="/add-job" element={<AddJobs/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
