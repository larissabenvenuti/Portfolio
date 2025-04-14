"use client";

import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}