import React, { useState } from 'react';
import Peer from './peer';

export default function Peers() {
  // Yeah this is faking PeerJS
  const [message, setMessage] = useState(null);
  const [message2, setMessage2] = useState(null);
  return (
    <div>
      <Peer
        name="A"
        message={message2}
        setMessage={setMessage}
      />
      <Peer
        name="B"
        message={message}
        setMessage={setMessage2}
      />
    </div>
  );
}
