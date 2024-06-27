import React, { useState } from "react";

function SignInPage({ onNavigateToCreateAccount }) {
  // State to hold user inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handler for sign-in form submission
  // const handleSignIn = async (e) => {
  //   e.preventDefault(); // Prevent default form submission

  //   const token = Math.random().toString(36).substr(2);
  //   localStorage.setItem('token', token);

  //   // Create a request body object
  //   const requestBody = {
  //     email: email,
  //     password: password
  //   };

  //   try {
  //     const response = await fetch('http://localhost:5000/api/signin', {
  //       method: 'POST',
  //       headers: {

  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(requestBody)
  //     });

  //     if (!response.ok) {
  //       // Handle the case where the response status is not okay
  //       console.error('Sign-in failed ho raha hai:', response.statusText);
  //       return;
  //     }

  //     // Attempt to parse the JSON response
  //     let data;
  //     try {
  //       data = await response.json();
  //     } catch (error) {
  //       // Handle the case where the response is not in valid JSON format
  //       console.error('Error parsing JSON response:', error);
  //       return;
  //     }

  //     // Check if the sign-in was successful
  //     console.log('Sign-in successful:', data.message);
  //     window.location.href = './dashboard';
  //   } catch (error) {
  //     console.error('Error signing in:', error);
  //   }
  // };

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create a request body object
    const requestBody = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        // Handle the case where the response status is not okay
        console.error("Sign-in failed:", response.statusText);
        return;
      }

      // Attempt to parse the JSON response
      const responseData = await response.json();

      // Extract token from response data
      const token = responseData.token;

      // Store the token in local storage
      localStorage.clear(); // Clear any existing tokens
      localStorage.setItem("token", token);

      // Redirect to the dashboard after successful sign-in
      window.location.href = "./dashboard";
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
