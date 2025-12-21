import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Florin -",
  description:
    "Portfolio of Florin Stefanescu - Full-stack developer and entrepreneur building innovative solutions in the gaming and esports space.",
  keywords: [
    "Florin Stefanescu",
    "Developer",
    "Full-stack",
    "Entrepreneur",
    "Esports",
    "SuperClub",
    "FaceitVisuals",
  ],
  authors: [{ name: "Florin Stefanescu" }],
  creator: "Florin Stefanescu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shadi.dev",
    title: "Florin -",
    description:
      "Portfolio of Florin Stefanescu - Full-stack developer and entrepreneur",
    siteName: "Florin Stefanescu",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
