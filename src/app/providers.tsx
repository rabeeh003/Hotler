'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import StoreProvider from '../../lib/redux/StoreProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <StoreProvider>
          {children}
        </StoreProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}