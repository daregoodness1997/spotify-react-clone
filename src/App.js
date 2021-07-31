import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
    console.log('Token= ', token);
  }, [token]);
  return (
    <div className='App'>
      {/* Spotify Logo */}
      {/* Login with spotify button0 */}
      {token ? <h2>I'm Dare</h2> : <Login />}
    </div>
  );
}

export default App;
