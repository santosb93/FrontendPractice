import React from 'react';

const EmailItem = ({ id, subject, from, time, setPreview }) => {
  const handleClick = () => {
    setPreview(id - 1);
    document.getElementById(`${from + id}`).style.backgroundColor = 'grey';
  };
  return (
    <div className='emailItem' id={from + id} onClick={handleClick}>
      <h1>Subject:</h1>
      <p>{subject}</p>
      <h3>From:</h3>
      <p>{from}</p>
      <h3>time:</h3>
      <p>{time}</p>
    </div>
  );
};

export default EmailItem;
