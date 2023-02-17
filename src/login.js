import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha)
      .then((confirmationResult) => {
        const verificationCode = window.prompt('Enter verification code');
        confirmationResult.confirm(verificationCode)
          .then(() => {
            history.push('/main');
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <button type="submit">Sign In</button>
      </form>
      <div id="recaptcha-container"></div>
    </div>
  );
}

export default LoginPage;
