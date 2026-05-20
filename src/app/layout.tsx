import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Classes - Your First Lesson is Free!",
  description:
    "Personalized English classes tailored to your goals. Book your free trial class today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
