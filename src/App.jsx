import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Jobpage from "./pages/Jobpage";
import AddJobs from "./pages/AddJobs";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobpage/>} />
        <Route path="/add-job" element={<AddJobs/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
