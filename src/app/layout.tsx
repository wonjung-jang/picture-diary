import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Picture Diary',
  description: 'Picture Diary',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
