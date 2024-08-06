import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ShareTalk - Next Gen Video Conferencing Software",
  description:
    "Our NextJS-based video conferencing app offers features similar to Zoom, enabling team meetings, screen sharing, and voice calls. It enhances remote collaboration with high-quality video and audio.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
