"use client";
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const ShopLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        <h2 className="text-2xl font-bold mb-6 text-center">Shop Login</h2>
        <div>
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
          <div className="mb-6">
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
          <p className='text-center text-sm my-2'>
            <a href='shop/reset/'>forgot password ?</a>
          </p>
          <Button onClick={login} className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">
            Login
          </Button>
        </div>
        <p className='text-center my-3'>or</p>
        <div className=' rounded-lg'>
          <Button variant='ghost' className='p-3 w-full rounded-lg'>Google</Button>
        </div>
        <p className='text-center text-sm my-2'>
          <a href='shop/register/'>Create new account</a>
        </p>
      </div>
    </div>
  );
};
export default ShopLogin