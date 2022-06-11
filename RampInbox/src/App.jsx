import React, { useEffect, useRef, useState } from 'react';
import EmailList from './components/EmailList.jsx';
import Preview from './components/Preview.jsx';
import './css/app.css';

const App = () => {
  const [emails, setEmails] = useState([]);
  const [preview, setPreview] = useState(-1);
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/Jsarihan/d5f8cd2d159d676fbfb2fab94750635e/raw/b54cc1bd819b157a93bde00fe059825002f1f602/email.json',
      { method: 'GET' }
    )
      .then((res) => res.json())
      .then((data) => {
        setEmails(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <EmailList emails={emails} setPreview={setPreview} />
      {preview !== -1 ? <Preview email={emails[preview]} /> : []}
    </section>
  );
};

export default App;
