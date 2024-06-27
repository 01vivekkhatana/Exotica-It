import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/Signin";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignInPage />} />
          {/* Use PrivateRoute for the dashboard page */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add other routes as needed */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
