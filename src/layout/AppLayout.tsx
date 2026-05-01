import { Outlet } from "react-router";
import Header from "../component/Header";
import Footer from "../component/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
