'use client'
import Countcard from "@/component/Analytics/Countcard";
import Dashboard from "@/component/Dashboard/Dashboard";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Input } from "@nextui-org/react";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

import Tea from '../../../public/images/tea.png';
import Coffi from '../../../public/images/coffee.jpg';
import Mango from '../../../public/images/mango.png';
import Lime from '../../../public/images/lemon.jpg';
import ItemCard from "@/component/Dashboard/ItemCard";
import ItemCard2 from "@/component/Dashboard/ItemCard2";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [itemSearch, setItemSearch] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <main className='w-full text-md font-semibold'>
      <div className='flex justify-between mb-3 py-2 px-3 bg-content1 overflow-visible shadow-small rounded-medium'>
        <h2>Orders</h2>
        <Button variant="shadow" onPress={handleOpen} color="success" size="sm" className="text-white p-0 m-0 flex">
          <PlusCircle />
        </Button>
      </div>
      <div className='flex flex-col-reverse lg:flex-row gap-2'>
        <Dashboard />
        <div className='flex gap-2 lg:flex-col lg:w-1/4'>
          <Countcard data={{ item: 'Coffi', image: Coffi, count: 2 }} />
          <Countcard data={{ item: 'Tea', image: Tea, count: 3 }} />
          <Countcard data={{ item: 'Mango', image: Mango, count: 1 }} />
          <Countcard data={{ item: 'Lime', image: Lime, count: 4 }} />
        </div>
      </div>
      <Modal
        size={"5xl"}
        isOpen={isOpen}
        onClose={handleClose}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex gap-1 justify-between">
              <span>Create order</span>
              <Input type="text" size="sm" onChange={(e)=>setItemSearch(e.target.value)} className="max-w-xl mx-2" label="Search" />
            </ModalHeader>
            <ModalBody>
              {itemSearch ? (
                <div className="flex my-2 flex-wrap gap-3 justify-evenly max-h-[70vh]">
                  <ItemCard2 />
                  <ItemCard2 />
                  <ItemCard2 />
                  <ItemCard2 />
                  <ItemCard2 />
                  <ItemCard2 />
                  </div>
              ) : (
                <div className="flex my-2 flex-wrap gap-3 justify-evenly max-h-[70vh]">
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                  <ItemCard />
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={handleClose}>
                Cancel
              </Button>
              <Button color="success" className="text-white" onPress={handleClose}>
                Order now
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </main >
  );
}
