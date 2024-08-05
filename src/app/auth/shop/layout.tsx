import type { Metadata } from "next";
import AdminNavbar from "@/component/Bars/AdminNavbar";
import SideBar from "@/component/Bars/SideBar";
import BottumBar from "@/component/Bars/BottumBar";

export const metadata: Metadata = {
  title: "reset password",
  description: "Change your password",
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
