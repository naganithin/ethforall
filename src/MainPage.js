import React, { useState } from 'react';
import './App.css';
import Logo from './logo.svg';
import Main from './assets/main.jpg';

function App() {
  const [isUPIChecked, setIsUPIChecked] = useState(false);
  const [isCryptoChecked, setIsCryptoChecked] = useState(false);
  const [primaryCryptoAddress, setPrimaryCryptoAddress] = useState('');
  const [primaryDebitUPIAddress, setPrimaryDebitUPIAddress] = useState('');
  const [primaryCreditUPIAddress, setPrimaryCreditUPIAddress] = useState('');

  const connectWallet = async () => {
    try {
      // Check if Metamask is installed
      if (typeof window.ethereum !== 'undefined') {
        // Connect to Metamask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to Metamask');
      } else {
        alert('Metamask is not installed');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="React Logo" className="logo" />
        </div>
        <div className="navbar-right">
          <button className="button connect-upi">Connect UPI</button>
          <button className="button connect-wallet" onClick={connectWallet}>Connect Wallet</button>
        </div>
      </nav>
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black'}}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', backgroundColor: 'black' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'normal', flexDirection: 'column' }}>
            <h2 style={{ color: 'blue', marginTop: '20%' }}>Binary</h2>
            <p style={{ color: 'grey', marginTop: '10%', textAlign: 'center', marginLeft: '20%', marginRight: '20%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros euismod, auctor sapien eu, aliquam lorem. Sed gravida, tellus ut varius dictum, ante sapien faucibus urna, in vestibulum felis felis non nulla. Proin placerat eros vel odio posuere bibendum. Nulla facilisi. Fusce ut mi urna. Ut imperdiet leo vel purus finibus, eget pellentesque ipsum feugiat. Nam porta nisi ut mauris luctus, vel venenatis libero maximus.</p>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'normal', flexDirection: 'column' }}>
            <img src={Main} alt="Sample Logo" style={{ width: '100%', height: '100%', marginRight: "10%" }} />
          </div>
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          backgroundColor: 'black',
          height: 'calc(100vh - 68px)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  height: '60%',
  width: '40%',
  borderRadius: '20px',
  padding: '20px',
}}>
  <h2 style={{ color: 'blue' }}>Settings</h2>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px'}}>
  <label style={{marginLeft:'40%'}}>UPI
        <input 
          type="checkbox" 
          checked={isUPIChecked} 
          onChange={() => setIsUPIChecked(!isUPIChecked)} 
        />
      </label>
      <label style={{marginLeft:'30%', amrginTop:'15%'}}>Crypto
        <input 
          type="checkbox" 
          checked={isCryptoChecked} 
          onChange={() => setIsCryptoChecked(!isCryptoChecked)} 
        />
      </label>
    <label style={{marginTop:'10%'}}>Your Primary Crypto address</label>
    <select style={{ width: '100%', height: '40px' }} value={primaryCryptoAddress} onChange={(e) => setPrimaryCryptoAddress(e.target.value)}>
      <option value="" disabled selected>Select an option</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px'}}>
    <label>Your primary debit UPI address</label>
    <select style={{ width: '100%', height: '40px' }} value={primaryDebitUPIAddress} onChange={(e) => setPrimaryDebitUPIAddress(e.target.value)}>
      <option value="" disabled selected>Select an option</option>
      <option value="upid1">upid1</option>
      <option value="upid2">upid2</option>
    </select>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '20px'}}>
    <label>Your primary credit UPI address</label>
    <select style={{ width: '100%', height: '40px' }} value={primaryCreditUPIAddress} onChange={(e) => setPrimaryCreditUPIAddress(e.target.value)}>
      <option value="" disabled selected>Select an option</option>
      <option value="upic1">upic1</option>
      <option value="upic2">upic2</option>
    </select>
  </div>
</div>
</div>
</div>
</div>
  );
}

export default App;