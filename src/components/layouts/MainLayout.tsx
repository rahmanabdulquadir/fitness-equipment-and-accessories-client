import { Outlet } from "react-router-dom";
import Header from "../ui/home/Header";
import Footer from "../ui/home/Footer";


const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;