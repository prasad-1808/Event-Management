import "./App.css";
import Navbar from "./../src/Components/Navbar";
import HomePage from "./Pages/HomePage";
import UserLogin from "./Pages/UserPages/UserLogin";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check if employee token exists
    const token = localStorage.getItem("employeeToken");
    setIsLoggedIn(!!token);

    // Check if admin token exists
    const adminToken = localStorage.getItem("adminToken");
    setIsAdminLoggedIn(!!adminToken);
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
            {/* You can add more routes here as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
