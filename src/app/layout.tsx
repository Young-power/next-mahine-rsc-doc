import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/dark/theme-provider";
import Navbar from "@/components/web/nav/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "next-mahine-rsc-inspector",
  description:
    "Inspector et utilitaire pour Next.js et React Server Components (RSC), conçu pour faciliter le debug et l’analyse du rendu côté serveur.",
  icons: {
    icon: "/assets/logobib.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning  >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ` }

      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}

        </ThemeProvider>

      </body>
    </html>
  );
}



