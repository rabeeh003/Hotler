import type { Metadata } from "next";
import AdminNavbar from "@/component/Bars/AdminNavbar";
import SideBar from "@/component/Bars/SideBar";
import BottumBar from "@/component/Bars/BottumBar";

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
    <main >
      {children}
    </main>
  );
}
