import React from 'react';
import EmailItem from './EmailItem.jsx';

const EmailList = ({ emails, setPreview }) => {
  return (
    <div id='emailList'>
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
    </div>
  );
};

export default EmailList;
