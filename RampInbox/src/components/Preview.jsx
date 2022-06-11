import React from 'react';

const Preview = ({ email }) => {
  console.log(email);
  return (
    <div id='preview'>
      <h1>Preview</h1>
      <div id='preview__header'>
        <div>
          <h2>Subject:</h2>
          <p>{email.subject}</p>
        </div>
        <h3>From:</h3>
        <p>{email.from}</p>
        <h3>time:</h3>
        <p>{email.time}</p>
      </div>
      <div id='preview__message'>
        <h2>Message:</h2>
        <p>{email.message}</p>
      </div>
    </div>
  );
};

export default Preview;
