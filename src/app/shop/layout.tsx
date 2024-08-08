"use client";
import AdminNavbar from "@/component/Bars/AdminNavbar";
import SideBar from "@/component/Bars/SideBar";
import { AuthProvider } from "./AuthProvider";
import { useEffect } from "react";
import { fetchShopData } from "../../../lib/redux/reduceres/shop";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { RootState } from "../../../lib/redux/store";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const dispatch = useAppDispatch();
  const { profile, name, username, loading, error } = useAppSelector(
    (state: RootState) => state.shop
  );
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchShopData());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      router.push("/auth/shop");
    }
  }, [error, router]);

  if (loading) return <p className="text-center">Loading...</p>;
  // if (username) {
    return (
      <main className="static">
        <AdminNavbar />
        <div className="container m-auto md:flex h-full gap-4 px-3 md:pt-2 pb-5 overflow-auto">
          <SideBar />
          <AuthProvider>
            {children}
          </AuthProvider>
        </div>
      </main>
    );
  // }
}
