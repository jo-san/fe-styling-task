import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata = {
  title: "Front End Assignment",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
