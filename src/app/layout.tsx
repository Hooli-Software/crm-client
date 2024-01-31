import type { Metadata } from "next";
import "./globals.css";


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
      <body>{children}</body>
    </html>
  );
}
