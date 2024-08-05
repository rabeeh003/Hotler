"use client";
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const ShopLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState({ lat: '', long: '' });
  const [phone, setPhone] = useState('')
  console.log("poooodathendi");

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    await axios.post('http://10.4.2.148:3000/api/auth/user-login', email)
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop Register</h2>
        <div>
          <div className="my-2">
            <label className="block text-gray-400 mb-2" htmlFor="name">
              Shop name
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="my-2">
            <label className="block text-gray-400 mb-2" htmlFor="phone">
              Owner phone
            </label>
            <Input
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="my-2">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button onClick={login} className="w-full bg-blue-500 text-white py-2 mt-2 rounded-xl hover:bg-blue-600">
            Register
          </Button>
          <p className='text-center text-sm my-2'>
            <a href='shop/'>I have already an account</a>
          </p>
        </div>

      </div>
    </div>
  );
};
export default ShopLogin