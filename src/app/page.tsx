import Image from "next/image";
import { Button } from '@nextui-org/button';
import DefualtNavbar from "@/component/DefualtNavbar";

export default function Home() {
  return (
    <>
      <DefualtNavbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>hello</h2>
        <Button variant="ghost" className="bg-yellow-500">Click me</Button>
      </main>
    </>
  );
}
