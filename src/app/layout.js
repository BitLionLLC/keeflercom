import { Geist, Geist_Mono, Bodoni_Moda } from "next/font/google";
import { Providers } from "./providers";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keefler",
  description: "Keefler - musician, Twitch streamer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WTX67W2J" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-KL9B4SE5KB" />
    </html>
  );
}
