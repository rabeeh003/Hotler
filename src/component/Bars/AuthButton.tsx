'use client'
import { Button, Link } from '@nextui-org/react'
import React from 'react'
import { useSession, signIn } from "next-auth/react"

function AuthButton() {
    const { data: session } = useSession()
    return (
        <>
            {session ? (
                <Button as={Link} href='/shop'  className='bg-gradient-primary text-slate-50' variant="shadow">
                    Dashboard                  
                </Button>
            ) : (
                <Button onClick={()=>signIn()}  className='bg-gradient-primary text-slate-50' variant="shadow">
                    Start
                </Button>
            )}
        </>
    )
}

export default AuthButton
