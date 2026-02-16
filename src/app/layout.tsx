import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


export const metadata: Metadata = {
  title: "Shashindu Desilva | Entrepreneur & Digital Strategist",
  description:
    "Official portfolio of Shashindu Desilva. Entrepreneur, digital strategist, and founder building brands in hospitality, media, and real estate.",

  keywords: [
    "Shashindu Desilva",
    "Sri Lanka entrepreneur",
    "Digital marketing strategist",
    "Hotel marketing Sri Lanka",
    "Portfolio",
    "Startup founder Sri Lanka",
  ],

  authors: [{ name: "Shashindu Desilva" }],
  creator: "Shashindu Desilva",

  openGraph: {
    title: "Shashindu Desilva Portfolio",
    description:
      "Entrepreneur and strategist building digital brands, hospitality ventures and startups.",
    url: "https://yourdomain.com",
    siteName: "Shashindu Desilva",
    images: [
      {
        url: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771086431/7e2eafc7fbfb8122b8416ab755b4d0bb8a1547491_io1upf.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shashindu Desilva Portfolio",
    description:
      "Entrepreneur and strategist building digital brands and startups.",
    images: ["https://res.cloudinary.com/dpjmcup95/image/upload/v1771086431/7e2eafc7fbfb8122b8416ab755b4d0bb8a1547491_io1upf.jpg"],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const timesTen = localFont({
  src: [
    {
      path: "../../public/font/TimesTen.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-times-ten",
});

const helvetica = localFont({
  src: [
    {
      path: "../../public/font/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${timesTen.variable} ${helvetica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


