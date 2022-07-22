import React, { useState } from 'react';
import './style.css';
import MyName from './components/MyName';

export default function App() {
  const [title, setTitle] = useState('Hello');
  const changeTitle = (e) => {
    console.log('changed');
    console.log(e.target.value);
    setTitle(e.target.value);
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>Good morning</p>
      <p></p>
      <MyName changeTitle={changeTitle} title={title} />
    </div>
  );
}
