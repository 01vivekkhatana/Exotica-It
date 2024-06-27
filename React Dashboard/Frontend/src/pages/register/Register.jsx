import React, { useState } from "react";
import "./register.scss";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // Save email and password to local storage
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    // Optionally, you can also navigate to another page or display a success message
    // window.location.href = '/success'; // Redirect to success page
    alert("Registered successfully!");
  };

  return (
    <div className="register">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
