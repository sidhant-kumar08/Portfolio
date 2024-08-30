import React, { useState, useEffect } from 'react';

function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedTime = dateTime.toLocaleTimeString();
  const formattedDate = dateTime.toLocaleDateString(undefined, dateOptions);

  return (
    <footer className="bottom-0 left-0 right-0 text-black p-4 text-center">
      <div className=' text-black'>
        <span>{formattedDate}</span>
        {` `}
        <span>{formattedTime}</span>
      </div>
      <div>
      ©2024 <span className='text-orange-500'>Sidhant Kumar</span> || All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
