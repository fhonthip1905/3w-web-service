// src/app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your App",
  description: "Description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* เราจะใส่ Bootstrap JS ผ่าน client component แทน */}
      </body>
    </html>
  );
}
