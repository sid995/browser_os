import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Browser OS',
  description: 'OS environment created in the browser',
  icons: {
    icon: [
      {
        href: "/assets/favicon.ico",
        url: "/assets/favicon.ico",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}