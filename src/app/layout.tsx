import type { Metadata } from "next";
import '@radix-ui/themes/styles.css';

import "./globals.css";
import Providers from "@/providers";


export const metadata: Metadata = {
  title: "HooliCRM",
  description: "Powered by Hooli Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
