import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Register from './components/registration';
import SendEmail from './components/send';
import Login from './components/login';
import Message from './components/message';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/send" element={<SendEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
