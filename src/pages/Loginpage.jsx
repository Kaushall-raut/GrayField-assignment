import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import '../styles/login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://fakestoreapi.com/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      navigate('/products');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
