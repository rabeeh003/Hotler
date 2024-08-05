import type { Metadata } from "next";
import AdminNavbar from "@/component/Bars/AdminNavbar";
import SideBar from "@/component/Bars/SideBar";
import BottumBar from "@/component/Bars/BottumBar";

export const metadata: Metadata = {
  title: "Register",
  description: "Manage your service and customers with us",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main >
      {children}
    </main>
  );
}
