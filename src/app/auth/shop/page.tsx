"use client";
import { Button, Input } from '@nextui-org/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import shopAPI from '../../../../lib/axios/shop';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

const ShopLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});
  const [backendError, setBackendError] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem('shop');
      if (token) {
        router.push('/shop');
      }
    }
  }, [router]);

  const schema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  });

  const login = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      schema.parse({ email, password });
      setErrors({});
      setBackendError(null);
      shopAPI.post('api/auth/shop-login', { email, password })
        .then((res) => {
          console.log(res.data, "responce");
          localStorage.setItem('shop', res.data.token);
          router.push('/shop');
        })
        .catch((err) => {
          if (err.response && err.response.data) {
            setBackendError(err.response.data.message || 'An error occurred');
          } else {
            setBackendError('An error occurred');
          }
          console.log(err);
        });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded md:shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop Login</h2>
        {backendError && (
          <div className="mb-4 text-red-500 text-center">
            {backendError}
          </div>
        )}
        <form onSubmit={login}>
          <div className="my-2">
            <Input
              type="email"
              label="Email"
              variant="bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
              errorMessage={errors.email ? errors.email[0] : ''}
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              label="Password"
              variant="bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
              errorMessage={errors.password ? errors.password[0] : ''}
              className="w-full"
            />
          </div>
          <p className="text-center text-sm my-2">
            <a href="/auth/shop/reset/">Forgot password?</a>
          </p>
          <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">
            Login
          </Button>
        </form>
        <p className="text-center text-sm my-2">
          <a href="/auth/shop/register/">Create new account</a>
        </p>
      </div>
    </div>
  );
};

export default ShopLogin;
