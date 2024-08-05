"use client";
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const AdminLogin: React.FC = () => {
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
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <div className=' rounded-lg'>
            <Button variant='ghost' className='p-3 w-full rounded-lg'>Google</Button>
          </div>
      </div>
    </div>
  );
};
export default AdminLogin