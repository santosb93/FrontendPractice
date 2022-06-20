import React, { useEffect, useRef, useState } from 'react';
import './css/styles.css';
import Message from './components/Message.js';

export default function App() {
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [message, setMessage] = useState({
    show: false,
    type: '',
    body: '',
  });
  const handleFirstNameChange = (e) => {
    setMessage({ show: false });
    setFormInput({ ...formInput, firstName: e.target.value });
  };
  const handleLastNameChange = (e) => {
    setMessage({ show: false });
    setFormInput({ ...formInput, lastName: e.target.value });
  };
  const handleEmailChange = (e) => {
    setMessage({ show: false });
    setFormInput({ ...formInput, email: e.target.value });
  };

  const handleSubmit = (e) => {
    const map = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'email',
    };
    e.preventDefault();
    for (let input in formInput) {
      if (!formInput[input]) {
        const badInput = document.getElementById(`form-input--${input}`);
        badInput.focus();
        setMessage({
          show: true,
          type: 'failure',
          body: `Please enter in a ${map[input]}`,
        });
        return;
      }
    }
    setFormInput({
      firstName: '',
      lastName: '',
      email: '',
    });
    setMessage({
      show: true,
      type: 'success',
      body: 'Success! Your information has been submitted',
    });
  };
  return (
    <div className='App'>
      <div className='form-container'>
        {message.show ? (
          <Message type={message.type} message={message.body} />
        ) : (
          <></>
        )}
        <form>
          <input
            id='form-input--firstName'
            onChange={handleFirstNameChange}
            value={formInput.firstName}
            placeholder='First Name'
            required
          />
          <input
            id='form-input--lastName'
            value={formInput.lastName}
            onChange={handleLastNameChange}
            placeholder='Last Name'
            required
          />
          <input
            id='form-input--email'
            value={formInput.email}
            onChange={handleEmailChange}
            placeholder='Email'
            required
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}
