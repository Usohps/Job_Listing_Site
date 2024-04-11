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
import EditPage from "./pages/EditPage";
const App = () => {

  const addJob = async (newJob)=>{
    const res = await fetch("/api/job",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJob)
    })
    return
  }
  const deleteJob =(Id)=>{
    const res = fetch(`/api/job/${Id}`,{
      method: "DELETE",
    })
    console.log("delete",Id)
    return
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/job" element={<Jobspage/>} />
        <Route path="/job/:id" element={<JobDetails deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path="/edit-job/:id" element={<EditPage/>} loader={jobLoader}/>
        <Route path="/add-job" element={<AddJobs addJobSubmit={addJob}/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
