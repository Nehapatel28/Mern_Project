import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareTalk - Next Gen Video Conferencing Software",
  description:
    "Our NextJS-based video conferencing app offers features similar to Zoom, enabling team meetings, screen sharing, and voice calls. It enhances remote collaboration with high-quality video and audio.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/logo.png",
            socialButtonsVariant: "iconButton",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2 `}>
          {children} <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
