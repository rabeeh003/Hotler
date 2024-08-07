import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Auth.",
  description: "This for admin of this website.",
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
