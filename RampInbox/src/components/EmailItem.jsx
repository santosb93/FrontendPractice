import React from 'react';

const EmailItem = ({ id, subject, from, time, setPreview }) => {
  const handleClick = () => {
    setPreview(id - 1);
    document.getElementById(`${from + id}`).style.backgroundColor = 'lightgrey';
  };
  return (
    <li className='emailItem' id={from + id} onClick={handleClick}>
      <div id='from'>
        <h2 htmlFor='from'>From:</h2>
        <p id='from'>{from}</p>
      </div>
      <div id='info'>
        <h3>Subject:</h3>
        <p>{subject}</p>
        <h3>time:</h3>
        <p>{time}</p>
      </div>
    </li>
  );
};

export default EmailItem;
