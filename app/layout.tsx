import { Inter } from 'next/font/google';
import './globals.css';
import useTranslation from 'next-translate/useTranslation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { lang } = useTranslation('common');
  return (
    <html className='dark' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
