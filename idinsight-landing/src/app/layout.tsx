import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Improving lives with data and evidence | IDinsight",
  description: "IDinsight uses data and evidence to help leaders combat poverty worldwide.",
  openGraph: {
    title: "IDinsight",
    description: "Improving lives with data and evidence",
    url: "https://www.idinsight.org/",
    siteName: "IDinsight",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@IDinsight",
    title: "IDinsight",
    description: "Improving lives with data and evidence",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
