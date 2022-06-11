import React from 'react';
import EmailItem from './EmailItem.jsx';

const EmailList = ({ emails, setPreview }) => {
  return (
    <ul id='emailList'>
      <h1>Email List</h1>
      {emails.map((email, i) => (
        <EmailItem
          key={email.from + i}
          setPreview={setPreview}
          id={email.id}
          subject={email.subject}
          from={email.from}
          time={email.time}
        />
      ))}
    </ul>
  );
};

export default EmailList;
