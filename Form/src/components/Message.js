import React from 'react';

export default function Message({ type, message }) {
  let classes = 'message ';
  if (type === 'success') classes += 'message--success ';
  else if (type === 'failure') classes += 'message--failure ';
  return (
    <div className={classes}>
      <p>{message}</p>
    </div>
  );
}
