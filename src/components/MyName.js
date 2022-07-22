import React, { useState } from 'react';

export default function MyName(props) {
  // const [userText, setText] = useState('');

  const { changeTitle, title } = props;

  return (
    <div>
      <h2>Welcome to child Component</h2>
      <input type="text" value={title} onChange={changeTitle} />
    </div>
  );
}
