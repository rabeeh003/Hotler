import Cart from "@/component/User/Cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shop_name",
  description: "Eat from your fav place.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="cursor-pointer select-none">
      <Cart />
      {children}
    </main>
  );
}
