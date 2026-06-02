import { useState, useEffect, useRef } from 'react';

export default function TypeWriter({ text, speed = 60, delay = 0, className, style, onComplete }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setDisplayed('');
    setIndex(0);
    setStarted(false);
  }, [text]);

  useEffect(() => {
    if (started) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay, started, text]);

  useEffect(() => {
    if (!started) return;
    if (index >= text.length) {
      onCompleteRef.current?.();
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, index + 1));
      setIndex(i => i + 1);
    }, speed);
    return () => clearTimeout(timer);
  }, [index, text, speed, started]);

  return (
    <span className={className} style={style}>
      {displayed}
      {started && index < text.length && (
        <span style={{ borderRight: '2px solid currentColor', marginLeft: '1px', animation: 'blink 0.7s step-end infinite' }} />
      )}
    </span>
  );
}
