import Navbar from "../components/Navbar";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer/>
    </>
  );
}

export default MainLayout;
