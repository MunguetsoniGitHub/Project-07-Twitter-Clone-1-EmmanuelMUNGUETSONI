
import React, { useContext, useState } from 'react';


export default function Login(onLoginSubmit) {

  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(usernameInput, passwordInput);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
