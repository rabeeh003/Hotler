import { Button, Link, Tooltip } from "@nextui-org/react";
import { CircleCheckBig, ClipboardList, CornerUpLeft, Plus, Printer, Trash } from "lucide-react";
import ItemsList from "@/component/OrderCreate/ItemsList";
import BackBtn from "@/component/OrderCreate/backBtn";

export default function Home() {
  return (
    <main className='w-full text-md font-semibold'>
      <div className="mb-3 py-2 px-3 bg-content1 overflow-visible shadow-small rounded-medium">
        <div className='flex  justify-between overflow-x-scroll md:scrollbar-hide'>
          <div className="flex gap-1 items-center">
            <BackBtn/>
            <span className="cursor-pointer text-gray-500 select-none flex-none flex ms-1 pr-2 pb-1 rounded-br-lg border-r-1 border-b-1 border-gray-300 font-sans text-sm"><ClipboardList size={15} className="my-auto" /> New order</span>
            <span className="cursor-pointer text-gray-500 select-none flex-none flex ms-1 pr-2 pb-1 rounded-br-lg border-r-1 border-b-1 border-gray-300 font-sans text-sm"><ClipboardList size={15} className="my-auto" /> New order</span>
            <span className="cursor-pointer text-gray-500 select-none flex-none flex ms-1 pr-2 pb-1 rounded-br-lg border-r-1 border-b-1 border-gray-300 font-sans text-sm"><ClipboardList size={15} className="my-auto" /> New order</span>
            <span className="cursor-pointer text-gray-500 select-none flex-none flex ms-1 font-sans text-sm"><Plus size={18} className="my-auto" /></span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mt-2 items-center">
          {/* <User className="hidden md:flex text-gray-400 text-xl"/> */}
          <div className="flex flex-wrap gap-1">
            <input type="text" className="max-w-sm p-1 border-1 border-gray-200 rounded-md" placeholder="Customer name" />
            <input type="text" className="max-w-sm p-1 border-1 border-gray-200 rounded-md" placeholder="Phonee number" />
          </div>
          <div className="sm:w-auto flex justify-end gap-1">
          <Tooltip showArrow={true} color="danger" content="Remove this order"><Button variant="ghost" color="danger" className="min-w-10 p-1 border-none "> <Trash size={15} className='my-auto' /> </Button></Tooltip>
            <Tooltip showArrow={true} color="success" content="Print bill"><Button variant="ghost" color="success" className="min-w-10 p-1 border-none "> <Printer size={15} className='my-auto' /> </Button></Tooltip>
            <Tooltip showArrow={true} color="success" content="Completed"><Button variant="ghost" color="success" className="min-w-10 p-1 border-none "> <CircleCheckBig size={15} className='my-auto' /> </Button></Tooltip>
          </div>
        </div>
      </div>
      <div className='flex flex-col-reverse lg:flex-row gap-2'>
        <ItemsList />
      </div>
    </main >
  );
}
