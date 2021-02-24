import React, { useRef, useState, useEffect } from 'react';

export default function Peer(props) {
  const { message, setMessage, name } = props;

  useEffect(() => {
    if (message === 'Ping') setMessage('Pong');
  }, message);

  return (
    <div>
      <span>Peer: {name} </span>
      <div>
        <button onClick={() => setMessage('Ping')}>
          Send ping
        </button>
        <p>Melding: {message}</p>
      </div>
    </div>
  );
}
