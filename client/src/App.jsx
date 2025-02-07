import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoute.jsx"; 

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
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
=======
      <AppRoutes />
>>>>>>> 285733e9e9305d3e78b9a25311b738772ef8c233
    </Router>
  );
}

export default App;
