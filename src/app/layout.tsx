import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { SWRProvider } from './swr-provider';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Toolify',
    template: '%s | Toolify',
  },
  description:
    'Toolify — a collection of free, fast, and easy-to-use web tools for developers. Format JSON, convert data, encode text, and more — all in one place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body
        className={`${manrope.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-400`}
      >
        <SWRProvider>{children}</SWRProvider>
      </body>
    </html>
  );
}
