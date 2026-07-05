import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nick & Prab | Premium Real Estate",
  description:
    "Nick & Prab Real Estate — proven results, record-breaking success, and premium property outcomes across Auckland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-surface-bright text-ink">
        {children}
      </body>
    </html>
  );
}
