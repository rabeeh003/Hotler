import type { Metadata } from "next";
import AdminNavbar from "@/component/Bars/AdminNavbar";
import SideBar from "@/component/Bars/SideBar";
import BottumBar from "@/component/Bars/BottumBar";
import { AuthProvider } from "./AuthProvider";

export const metadata: Metadata = {
  title: "HM-admin",
  description: "Manage your products and customers",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="static">
      <AdminNavbar />
      <div className="md:invisible md:hidden w-full ">
        <div className="w-[80vw] m-auto px-3 py-2 rounded-xl">
          <BottumBar />
        </div>
      </div>
      <div className="container m-auto md:flex h-full gap-4 px-3 md:pt-2 pb-5 overflow-auto">
        <SideBar />
        <AuthProvider>
          {children}
        </AuthProvider>
      </div>
    </main>
  );
}
