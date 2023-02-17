import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import Login from './login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <h1>Welcome, {user.displayName}!</h1>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
