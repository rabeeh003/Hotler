import BottumBar from "@/component/Bars/BottumBar";
import Dashboard from "@/component/Dashboard/Dashboard";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Input } from "@nextui-org/react";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-full text-md font-semibold'>
      <div className="md:invisible md:hidden w-full ">
        <div className="w-[80vw] m-auto px-3 py-2 rounded-xl">
          <BottumBar />
        </div>
      </div>
      <div className='flex justify-between mb-3 py-2 px-3 bg-content1 overflow-visible shadow-small rounded-medium'>
        <h2>Orders</h2>
        <Link href="shop/ordernow" className="text-white p-0 m-0 flex bg-success-500 hover:bg-success-600 px-3 py-2 rounded-md">
          <PlusCircle/><span  className="pl-2">Order</span>
        </Link>
      </div>
      <div className='flex flex-col-reverse lg:flex-row gap-2'>
        <Dashboard />
      </div>
    </main >
  );
}
