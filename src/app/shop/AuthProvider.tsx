"use client";
import { Button, Spinner } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
        <div className="w-full h-[60vh] flex justify-center items-center">
            <Spinner label="Loading..." color="warning" />
        </div>
    )
  }

  if (!session) {
    return (
      <div className="w-full h-[60vh] flex flex-col  items-center">
        <p className="text-center m-4">You are not signed in.</p>
        <Button variant="ghost" color="warning" className="" onClick={() => signIn()}>Sign In</Button>
      </div>
    );
  }

  return (
    <>
      {children}
    </>
  );
}