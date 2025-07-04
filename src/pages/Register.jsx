import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../assets/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Register = () => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      // Register user with Firebase Auth
      const userCredential = await register(email, password);
      const user = userCredential?.user || getAuth().currentUser;

      // Save profile to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        age,
        gender,
        email
      });

      setSuccess(`Account created for ${name} (${gender}, ${age}). You can now log in.`);
      setName('');
      setAge('');
      setGender('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151414] text-white">
      <form onSubmit={handleSubmit} className="bg-[#222] p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        {error && <div className="mb-4 text-red-400">{error}</div>}
        {success && <div className="mb-4 text-green-400">{success}</div>}
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 rounded bg-[#181818] border border-gray-700 text-white focus:outline-none"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          className="w-full mb-4 p-3 rounded bg-[#181818] border border-gray-700 text-white focus:outline-none"
          value={age}
          onChange={e => setAge(e.target.value)}
          min="1"
          required
        />
        <select
          className="w-full mb-4 p-3 rounded bg-[#181818] border border-gray-700 text-white focus:outline-none"
          value={gender}
          onChange={e => setGender(e.target.value)}
          required
        >
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
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
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded transition-colors">Register</button>
      </form>
    </div>
  );
};

export default Register; 