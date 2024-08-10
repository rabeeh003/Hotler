"use client";
import { Button } from '@nextui-org/react';
import { CornerUpLeft } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Updated import
import React from 'react';

function BackBtn() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant="ghost"
      className="min-w-5 p-1 border-none mr-1"
    >
      <CornerUpLeft size={15} className="my-auto" />
    </Button>
  );
}

export default BackBtn;
