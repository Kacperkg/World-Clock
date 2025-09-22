import "~/styles/globals.css";

import { type Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "World Clocl",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Subjectivity = localFont({
  src: [
    {
      path: "../fonts/Subjectivity-Super.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Subjectivity-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Subjectivity-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Subjectivity-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Subjectivity-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${Subjectivity.className}`}>
      <body>{children}</body>
    </html>
  );
}
