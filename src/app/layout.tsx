import "./globals.css";
import { Poppins } from "next/font/google";


const inter = Poppins({ subsets: ["latin", "latin-ext"], weight: "400" });

export const metadata = {
  title: "IPet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100`}>{children}</body>
    </html>
  );
}
