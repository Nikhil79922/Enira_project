import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LoginPage from "./components/Login";
import DashboardContent from "./components/DashboardContent";
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Control_header from "./components/Control_header";
import C_Consumos from "./components/C_Consumos";
import C_Etiquetas from "./components/C_Etiquetas";
import Orden from "./components/Orden";
import Scrap from "./components/Scrap";
import Averias from "./components/Averias";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />


        <Route
          path="/dashboard/*"
          element={
            isAuthenticated ? (
              <div className="flex h-screen bg-gray-200 overflow-auto">
                <div className="w-[15.5vw]">
                  <Sidebar />
                </div>
                <div className="w-[84.5vw] flex flex-col overflow-hidden">
                  <Header />
                  <div className="flex-grow">
                    <Routes>
                      <Route path="/" element={<DashboardContent />} />
                      <Route path="control/*" element={
                        <>
                          <div className="">
                            <Control_header />
                            <div className="">
                              <Routes>
                                <Route path="/orden" element={<Orden />} />
                                <Route path="/Scrap" element={<Scrap />} />
                                <Route path="/Averias" element={<Averias />} />
                                <Route path="/consumos" element={<C_Consumos />} />
                                <Route path="/etiquetas" element={<C_Etiquetas />} />
                              </Routes>
                            </div>
                          </div>


                        </>
                      } />
                    </Routes>
                  </div>
                  <Footer />
                </div>
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
