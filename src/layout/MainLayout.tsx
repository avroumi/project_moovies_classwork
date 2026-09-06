import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";

const MainLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
};

export default MainLayout;
