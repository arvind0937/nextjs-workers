// This is a module worker, so we can use imports (in the browser too!)
import pi from './utils/pi';

self.addEventListener('message', (event) => {
  postMessage(event.data);
});
