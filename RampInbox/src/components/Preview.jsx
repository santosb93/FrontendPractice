import React from 'react';

const Preview = ({ email }) => {
  console.log(email);
  return (
    <section id='preview'>
      <div id='header'>
        <h1>Subject:</h1>
        <p>{email ? email.subject : ''}</p>
        <h3>From:</h3>
        <p>{email ? email.from : ''}</p>
        <h3>time:</h3>
        <p>{email ? email.time : ''}</p>
      </div>
      <div id='body'>
        <h1>Message:</h1>
        <p>{email ? email.message : ''}</p>
      </div>
    </section>
  );
};

export default Preview;
