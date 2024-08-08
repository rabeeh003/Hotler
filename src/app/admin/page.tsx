"use client";
import axios from 'axios';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    await axios.post('http://10.4.2.148:3000/api/auth/admin-login', email)
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Wellcome</h2>
        <div>
          <h1 className='text-lg'>
            <b>
              Feachers
            </b>
          </h1>
          <ol>
            <li>List shops</li>
            <li>List details page</li>
            <li>subscription adding point</li>
            <li>analizing page</li>
            <br/>
            <li>admin loged devices</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
