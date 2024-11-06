import "./App.css";
import Navbar from "./../src/Components/Navbar";
import HomePage from "./Pages/HomePage";
import UserLogin from "./Pages/UserPages/UserLogin";
import UserRegister from "./Pages/UserPages/UserRegister";
import UserDashboard from "./Pages/UserPages/UserDashboard";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          isAdminLoggedIn={isAdminLoggedIn}
          setIsAdminLoggedIn={setIsAdminLoggedIn}
          className="Navbar"
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route
              path="/dashboard"
              element={
                isLoggedIn ? <UserDashboard /> : <Navigate to="/login" />
              }
            />
            {/* You can add more routes here as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
