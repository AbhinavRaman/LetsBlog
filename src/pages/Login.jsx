import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../assets/NavBar';

const Login = () => {
  const { login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const credential = await login(email, password);
      const signedInUser = credential.user;
      if (!signedInUser.emailVerified) {
        await logout();
        setError('Please verify your email before logging in. Check your inbox.');
        return;
      }
      setSuccess('Logged in successfully! Redirecting to dashboard...');
      setTimeout(() => navigate('/profile'), 1200);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#151414] text-white">
      <NavBar />
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="bg-[#222] p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          {error && <div className="mb-4 text-red-400">{error}</div>}
          {success && <div className="mb-4 text-green-400">{success}</div>}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded bg-[#181818] border border-gray-700 text-white focus:outline-none"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 rounded bg-[#181818] border border-gray-700 text-white focus:outline-none"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition-colors">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 