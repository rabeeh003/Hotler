'use client'
import { Button, Link } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

function AuthButton() {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('shop');
        setToken(storedToken);
    }, []);

    return token ? (
        <Button as={Link} href='/shop' className='bg-gradient-primary text-slate-50' variant="shadow">
            Dashboard
        </Button>
    ) : (
        <>
            <Button as={Link} href='/auth/shop/register' className='bg-gradient-primary hidden md:flex me-1 text-slate-50' variant="shadow">
                Register
            </Button>
            <Button as={Link} href='/auth/shop' className='bg-gradient-primary text-slate-50' variant="shadow">
                Login
            </Button>
        </>
    );
}

export default AuthButton
