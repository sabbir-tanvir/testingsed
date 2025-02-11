import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Assuming you have an App component

// ReactDOM.render(<App />, document.getElementById('root'));


const rootElement = document.getElementById('root');
if (rootElement) {
  // Create a root
  const root = ReactDOM.createRoot(rootElement);

  // Render the App component
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

