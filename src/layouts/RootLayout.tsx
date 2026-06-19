import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import ScrollToHash from "../components/ScrollToHash";
// import Grain from "../components/Grain";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen bg-dots">
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
        <MobileHeader />
      </header>

      <ScrollToHash />

      <main className="pt-24">
        <Outlet />
      </main>

      <Footer />

      {/* <Grain /> */}
    </div>
  );
};

export default RootLayout;
