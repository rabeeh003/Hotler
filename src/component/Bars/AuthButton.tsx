'use client'
import { Button, Link } from '@nextui-org/react'
import React from 'react'
// import { useSession, signIn } from "next-auth/react"

function AuthButton() {
    // const { data: session } = useSession()
    const session = false
    return (
        <>
            {session ? (
                <Button as={Link} href='/shop'  className='bg-gradient-primary text-slate-50' variant="shadow">
                    Dashboard                  
                </Button>
            ) : (
                <Button  className='bg-gradient-primary text-slate-50' variant="shadow">
                    {/* onClick={()=>signIn()}  */}
                    Start
                </Button>
            )}
        </>
    )
}

export default AuthButton
