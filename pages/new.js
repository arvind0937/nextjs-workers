import { useEffect, useRef, useCallback } from 'react';

// import PiWorker from '../123123123123.myworker';

export default function Index() {
  const workerRef = useRef();
  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../123123123123.myworker.js', import.meta.url)
    );
    // workerRef.current = PiWorker();
    workerRef.current.onmessage = (evt) =>
      alert(`WebWorker Response => ${evt.data}`);
    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const handleWork = useCallback(async () => {
    workerRef.current.postMessage(100000);
  }, []);

  return (
    <div>
      <p>Do work in a WebWorker!</p>
      <button onClick={handleWork}>Calculate PI</button>
    </div>
  );
}
