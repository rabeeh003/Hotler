import ItemCard from "@/component/User/ItemCard";
import Profile from "@/component/User/Profile";
import { Avatar, Button, Input } from "@nextui-org/react";
import { Search } from "lucide-react";

export default function Page({ params }: { params: { shopId: string, qr: string } }) {
  return (
    <section className="grid relative">
      <Profile />
      <div className="bg-indigo-500 w-full h-36 flex rounded-b-xl justify-between p-2 items-center"></div>
      <div className="absolute top-28 w-full flex justify-center">
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" isBordered radius="full" className="w-20 h-20 text-large" />
      </div>
      <p className="text-xl text-center font-mono font-thin mt-14">{params.shopId}</p>
      <div className="flex flex-col justify-center">
        <div className="sticky z-50 top-0 pt-4 bg-white backdrop-filter shadow-lg backdrop-blur-lg bg-opacity-80 border-b border-gray-200">
          <div className="flex px-3 gap-1 max-w-[500px] m-auto">
            <Input
              type="text"
              placeholder="Tea / food / mandi / jus.."
              labelPlacement="outside"
              startContent={<Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
            />
            <Button variant="faded">Go</Button>
          </div>
          {/* Categories */}
          <div className="flex p-3 gap-3 sm:justify-center w-screen overflow-x-auto">
            {["Tea", "Food", "Mandi", "Juice", "Snacks", "Specials", "Desserts", "Beverages"].map((category, index) => (
              <div key={index} className="flex-shrink-0 text-center p-2">
                <Avatar src={`https://i.pravatar.cc/150?u=a04258114e29026708c${index}`} isBordered radius="full" className="m-auto" />
                <p className="text-small font-thin pt-1">{category}</p>
              </div>
            ))}
          </div>
        </div>
        {/* products */}
        <div className="flex flex-wrap gap-2 mx-auto justify-around p-3 max-w-[600px]">
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
          <ItemCard />
        </div>
      </div>
    </section>
  );
}
