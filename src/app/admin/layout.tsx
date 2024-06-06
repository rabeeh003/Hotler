import type { Metadata } from "next";
import AdminNavbar from "@/component/AdminNavbar";
import SideBar from "@/component/SideBar";

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
    <main>
      <AdminNavbar />
      <div className="mt-4 md:flex gap-4 px-3">
        <SideBar />
        {children}
      </div>
    </main>
  );
}
