import React, { useRef, useState, useEffect } from 'react';

export default function AudioUserMedia() {
  const canvasRef = useRef(null);
  const gainRef = useRef(null);
  const [gain, setGain] = useState(2);

  useEffect(() => {
    gainRef.current && gainRef.current(gain);
  }, [gain]);

  useEffect(() => {
    let isMounted = true;
    let mediaStream;
    let audioContext;
    async function requestUserMedia() {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia(
          { audio: true },
        );

        audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(
          mediaStream,
        );
        const volumeNode = audioContext.createGain();
        gainRef.current = (g) =>
          volumeNode.gain.setValueAtTime(
            g,
            audioContext.currentTime,
          );
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);
        source.connect(volumeNode).connect(analyser);
        // .connect(audioContext.destination);

        const canvas = canvasRef.current;
        var canvasCtx = canvas.getContext('2d');
        const start = setupDrawCanvas(
          analyser,
          dataArray,
          bufferLength,
          canvasCtx,
          canvas.width,
          canvas.height,
          () => isMounted,
        );
        start();
      } catch (err) {
        console.error(err);
      }
    }

    requestUserMedia();

    return () => {
      isMounted = false;
      mediaStream &&
        mediaStream.getTracks().forEach((t) => t.stop());
      audioContext && audioContext.close();
      mediaStream = null;
      audioContext = null;
      gainRef.current = null;
    };
  }, []);

  return (
    <>
      <div>
        <span>Volum: </span>
        <input
          min={0}
          max={10}
          step={1}
          type="range"
          value={gain}
          onChange={(ev) => setGain(ev.target.value)}
        />
      </div>
      <canvas width={600} height={300} ref={canvasRef} />
    </>
  );
}

function setupDrawCanvas(
  analyser,
  dataArray,
  bufferLength,
  canvasCtx,
  width,
  height,
  shouldDraw,
) {
  return function draw() {
    if (shouldDraw()) requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.fillRect(0, 0, width, height);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

    canvasCtx.beginPath();

    var sliceWidth = (width * 1.0) / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {
      var v = dataArray[i] / 128.0;
      var y = (v * height) / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(width, height / 2);
    canvasCtx.stroke();
  };
}
