import React, { useState } from 'react';

function CreateAccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try {
      
      const response = await fetch('http://localhost:5000/api/create-account', { // Update the URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        // Account creation successful
        console.log('Account created successfully');
        // Optionally, redirect to another page or show a success message
      } else {
        // Handle server errors or validation errors
        console.error('Account creation failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };
   
  return (
    <div>
      <h2>Create New Account</h2>
      <form onSubmit={handleCreateAccount}>
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccountPage;
