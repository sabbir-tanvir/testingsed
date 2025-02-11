import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/main.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      autoLogin(savedUsername, savedPassword);
    }
  }, []);

  const autoLogin = async (savedUsername: string, savedPassword: string) => {
    try {
      const response = await axios.post('https://sendme-backend.vercel.app/login', { username: savedUsername, password: savedPassword });
      const data = response.data as { token: string };
      localStorage.setItem('token', data.token);
      navigate('/main');
    } catch (err: any) {
      console.error('Auto login failed:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://sendme-backend.vercel.app/login', { username, password });
      const data = response.data as { token: string };
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      navigate('/main');
    } catch (err: any) {
      console.log(err);
      setError(err.response?.data?.error || 'Invalid username or password');
    }
  };

  return (
    <div>
      <div className="panda">
        <div className="ear"></div>
        <div className="face">
          <div className="eye-shade"></div>
          <div className="eye-white">
            <div className="eye-ball"></div>
          </div>
          <div className="eye-shade rgt"></div>
          <div className="eye-white rgt">
            <div className="eye-ball"></div>
          </div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"></div>
        <div className="foot">
          <div className="finger"></div>
        </div>
        <div className="foot rgt">
          <div className="finger"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="hand"></div>
        <div className="hand rgt"></div>
        <h1>Welcome</h1>
        {error && <p className="alert" style={{ color: 'red' }}>{error}</p>}
        <div className="form-group">
          <input
            required
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder=" "
            className="form-control"
          />
          <label className="form-label">Username</label>
        </div>
        <div className="form-group">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control"
            placeholder=" "
          />
          <label className="form-label">Password</label>
          <button type="submit" className="btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
