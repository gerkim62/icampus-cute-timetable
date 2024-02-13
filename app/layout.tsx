import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/theme";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumbs";
import InstallationBanner from "@/components/InstallationBanner";

// import * as PusherPushNotifications from "@pusher/push-notifications-web";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calendify",

  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
    },
    {
      url: "/favicon.ico",
      rel: "shortcut icon",
      type: "image/x-icon",
    },
    {
      url: "/favicon.ico",
      rel: "apple-touch-icon",
      type: "image/x-icon",
    },

    // the  one that appears on whatsapp
    {
      url: "/favicon.ico",
      rel: "apple-touch-icon",
      type: "image/x-icon",
    },
    {
      url: "/favicon.ico",
      rel: "apple-touch-icon",
      type: "image/x-icon",
    },
  ],
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  minimumScale: 1,
  maximumScale: 5,
  themeColor: "#a855f7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const beamsClient = new PusherPushNotifications.Client({
  //   instanceId: '3c5ea04c-91aa-4f31-812a-0fa22127a5f6',
  // });

  // beamsClient.start()
  //   .then(() => beamsClient.addDeviceInterest('hello'))
  //   .then(() => console.log('Successfully registered and subscribed!'))
  //   .catch(console.error);
  return (
    <html lang="en">
      <body className={"flex flex-col min-h-screen " + inter.className}>
        <ThemeProvider
          attribute="class"
          // defaultTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          {/* <Breadcrumb /> */}
          <Toaster />
          <div className="flex-1 flex  justify-center max-w-[100vw] overflow-auto bg-[#001d54]">
            {children}
          </div>
          <InstallationBanner />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
