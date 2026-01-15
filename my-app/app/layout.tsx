import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "PriceMatrix",
  description: "",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
