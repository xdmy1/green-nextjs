import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Onest } from 'next/font/google';

const onest = Onest({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify font weights
})

export default function App({ Component, pageProps }: AppProps) {
  return ( <main className={onest.className}>
  <Component {...pageProps} />
      </main> );
}
