import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickTap — Tap Once. Connect Instantly.",
  description: "Meet QuickTap NFC cards. Share your digital profile with one tap.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
