import type { Metadata } from "next";
import { Providers } from "./provideres";

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
      <Providers>
        {children}
      </Providers>
    </main>
  );
}
