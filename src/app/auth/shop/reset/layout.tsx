import type { Metadata } from "next";

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
