import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toDateString());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date().toDateString());
    });
    return () => {
      clearInterval(intervalID);
    };
  }, []);


  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className='container'>
      <h1>Current Time and Date:</h1>
      <p>{time}</p>
      <p>{date}</p>
    </div>
  );
}
export default Clock;