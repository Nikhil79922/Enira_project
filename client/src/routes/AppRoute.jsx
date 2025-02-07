import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar.jsx";
import Header from "../components/layout/Header.jsx";
import LoginPage from "../components/authentication/Login.jsx";
import DashboardContent from "../components/layout/DashboardContent.jsx";
import Footer from "../components/layout/Footer.jsx";
import ForgotPassword from "../components/authentication/ForgotPassword.jsx";
import ResetPassword from "../components/authentication/ResetPassword.jsx";
import Control_header from "../components/Control/Control_header.jsx";
import C_Consumos from "../components/Control/C_Consumos.jsx";
import C_Etiquetas from "../components/Control/C_Etiquetas.jsx";
import Orden from "../components/Control/Orden.jsx";
import Scrap from "../components/Control/Scrap.jsx";
import Averias from "../components/Control/Averias/Averias.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Authentication Routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Dashboard Routes */}
      <Route
        path="/dashboard/*"
        element={
          <div className="flex h-screen bg-gray-200 overflow-auto">
            <div className="w-[0vw] lg:w-[15.5vw]">
              <Sidebar />
            </div>
            <div className="w-[100vw] lg:w-[84.5vw] flex flex-col overflow-x-hidden overflow-y-scroll">
              <Header />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<DashboardContent />} />
                  <Route
                    path="control/*"
                    element={
                      <>
                        <Control_header />
                        <Routes>
                          <Route path="/orden" element={<Orden />} />
                          <Route path="/Scrap" element={<Scrap />} />
                          <Route path="/Averias" element={<Averias />} />
                          <Route path="/consumos" element={<C_Consumos />} />
                          <Route path="/etiquetas" element={<C_Etiquetas />} />
                        </Routes>
                      </>
                    }
                  />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        }
      />
    </Routes>
  );
}
