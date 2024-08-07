import type { Metadata } from "next";

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
