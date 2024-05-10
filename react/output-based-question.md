## Find what will be printed in console on initial render, then on typing a letter in the Input box and then on click of the button

```javascript
import React, { useState, useEffect } from 'react';

export const App = () => {
  console.log('1. Outside Hooks and Effects');
 
  const [count, setCount] = useState(() => {
    console.log('2. Inside useState callback');
    return 0;
  });
 
  const [text, setText] = useState('');
 
  console.log('3. After useState');
 
  useEffect(() => {
    console.log(
      '4. Inside useEffect (componentDidMount and componentDidUpdate)'
    );
    return () => {
      console.log('8. Inside cleanup function (componentWillUnmount)');
    };
  });
 
  useEffect(() => {
    console.log(
      '5. Inside second useEffect (componentDidMount and componentDidUpdate)'
    );
    return () => {
      console.log('9. Inside second cleanup function (componentWillUnmount)');
    };
  }, [text]); // This useEffect depends on the 'text' state variable.
 
  console.log('6. After useEffect');
 
  const handleClick = () => {
    console.log('7. Inside handleClick');
    setCount(count + 1);
  };
 
  const handleInputChange = event => {
    console.log('10. Inside handleInputChange');
    setText(event.target.value);
  };
 
  console.log('11. Before return');
 
  return (
    <div>
      <p>Count: {count}</p>
      <input type='text' value={text} onChange={handleInputChange} />
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};
```