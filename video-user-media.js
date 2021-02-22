import React, { useRef, useEffect } from 'react';

export default function VideoUserMedia() {
  const videoRef = useRef(null);

  useEffect(() => {
    let mediaStream;
    async function requestUserMedia() {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia(
          { video: true },
        );

        videoRef.current.srcObject = mediaStream;
      } catch (err) {
        console.error(err);
      }
    }

    requestUserMedia();

    return () =>
      mediaStream &&
      mediaStream.getTracks().forEach((t) => t.stop());
  }, []);

  return (
    <video
      width={800}
      height={600}
      ref={videoRef}
      autoPlay
    />
  );
}
