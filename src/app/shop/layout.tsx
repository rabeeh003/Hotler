"use client";
import AdminNavbar from "@/component/Bars/AdminNavbar";
import SideBar from "@/component/Bars/SideBar";
import { AuthProvider } from "./AuthProvider";
import { useEffect, useState } from "react";
import { fetchShopData } from "../../../lib/redux/reduceres/shop";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { RootState } from "../../../lib/redux/store";
import { Card, Skeleton } from "@nextui-org/react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { email, loading, error } = useAppSelector(
    (state: RootState) => state.shop
  );
  const router = useRouter();

  useEffect(() => {
    console.log("feching data again");
    dispatch(fetchShopData());
  }, [dispatch]);

  useEffect(() => {
    if (error === "network") {
      setErrorMessage("Check your network or server is down.");
    } else if (error === '404') {
      router.push("/auth/shop");
    } else if (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  }, [error, router]);

  if (loading) return <div className="flex flex-col h-screen w-full items-center text-center ">
    <div className="w-[90vw] my-2 space-y-5 p-4" >
      <div className="flex justify-between">
        <div className="max-w-[300px] w-full flex items-center gap-3">
          <div>
            <Skeleton className="flex rounded-full w-10 h-10" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-5 w-3/5 rounded-lg" />
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <Skeleton className="flex rounded-full w-16 h-10" />
          </div>
          <div>
            <Skeleton className="flex rounded-full w-12 h-10" />
          </div>
        </div>
      </div>
      <div>
        <Skeleton className="rounded-lg">
          <div className="h-10 w-[80vh] rounded-lg bg-default-300"></div>
        </Skeleton>
        <div className="space-y-3 mt-2">
          <Skeleton className="rounded-lg">
            <div className="h-[60vh] w-[80vh] rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
    </div>
  </div>;
  if (errorMessage) {
    <div>
      <p>{errorMessage}</p>
      <p>somthing wrong</p>
    </div>
  }
  if (email) {
    return (
      <main className="relative">
        <AdminNavbar />
        <div className="container m-auto md:flex h-full gap-4 px-3 md:pt-2 pb-5">
          <div className="sticky top-16 self-start">
            <SideBar />
          </div>
          {children}
        </div>
      </main>

    );
  }
}
