import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "홈페이지",
  description: "React 홈페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
