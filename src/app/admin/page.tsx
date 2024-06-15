import Countcard from "@/component/Analytics/Countcard";
import Dashboard from "@/component/Dashboard/Dashboard";
import { Button } from "@nextui-org/react";
import { PlusCircle } from "lucide-react";

import Tea from '../../../public/images/tea.png';
import Coffi from '../../../public/images/coffee.jpg';
import Mango from '../../../public/images/mango.png';
import Lime from '../../../public/images/lemon.jpg';

export default function Home() {
  return (
    <main className='w-full text-md font-semibold'>
      <div className='flex justify-between mb-3 py-2 px-3 bg-content1 overflow-visible shadow-small rounded-medium'>
        <h2>Orders</h2>
        <Button variant="shadow" color="success" size="sm" className="text-white p-0 m-0 flex"><PlusCircle /></Button>
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
    </main>
  );
}
