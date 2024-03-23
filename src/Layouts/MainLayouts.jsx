import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className="h-16">
         <Navbar></Navbar>
         </div>
         <div className="min-h-[calc(100vh-116px)]">
         <Outlet></Outlet>
         </div>
         <Footer></Footer>
    </div>
  );
};

export default MainLayouts;