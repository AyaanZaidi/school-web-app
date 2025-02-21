import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Liveclasses from "./pages/liveClasses/LiveClasses";
import RecordedLectures from "./component/RecordLectures";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/DashBoard";

function App() {
  const location = useLocation(); // Current page ka path get karne ke liye

  const hideNavbarFooter = location.pathname === "/login" || location.pathname === "/signup" || location.pathname.includes("/dashboard"); 

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavbarFooter && (
        <>
          <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} openLogin={() => setLoginOpen(true)} />
        </>
      )}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<>
            <header className="text-center py-16 bg-gradient-to-r from-red-500 to-orange-400 text-white">
              <h1 className="text-4xl font-bold mt-4">Welcome to <span className="text-yellow-300">School Name</span></h1>
              <p className="text-xl mt-2">Your Gateway to Quality Online Education</p>
            </header>
            <Hero />
            <Features />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login isOpen={loginOpen} closeLogin={() => setLoginOpen(false)} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/liveClasses" element={<Liveclasses />} />
          <Route path="/recorded-lectures" element={<RecordedLectures />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>

      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;

{/* {!isDashboard && <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} openLogin={() => setLoginOpen(true)} />} */}
{/* {!isDashboard && <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />} */}
{/* {!isDashboard && <Footer />} */}
