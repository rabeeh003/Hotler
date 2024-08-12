import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "login page",
  description: "login using email and password",
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
