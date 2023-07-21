import './globals.css';
import { Montserrat, Poppins } from 'next/font/google';
import { Metadata } from 'next';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-poppins"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: 'Nextjs Ecommerce',
  description: 'This is a shop where we sell skis online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" 
    className={`${poppins.variable} ${montserrat.variable}`}
    >
      <body>
        <header>header</header>
          {children}
        <footer>footer</footer>
      </body>
    </html>
  )
}
