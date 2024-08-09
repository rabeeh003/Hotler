import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import StoreProvider from "../../lib/redux/StoreProvider";


export const metadata: Metadata = {
  title: "Hotler",
  description: "Manage your products and customers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Providers>
            {children}
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
