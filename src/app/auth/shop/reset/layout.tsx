import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "sequre your password",
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
