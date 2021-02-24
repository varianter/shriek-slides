import React, { useState, useEffect } from 'react';

export default function InputDemo() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const down = document.addEventListener('keydown', (e) =>
      setActive(e.key),
    );
    const up = document.addEventListener('keyup', (e) =>
      setActive(''),
    );

    return () => {
      document.removeEventListener('keydown', down);
      document.removeEventListener('keyup', up);
    };
  }, []);

  return <div>{active}</div>;
}
