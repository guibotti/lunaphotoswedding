import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['400','500','600'], style: ['normal','italic'] });
const sans = Manrope({ variable: '--font-sans', subsets: ['latin'], weight: ['400','500','600','700'] });

export const metadata: Metadata = {
  title: 'Luna Photograph Wedding | Fotografia de Casamento',
  description: 'Fotografias sensíveis e verdadeiras para guardar o que o tempo não consegue repetir. Conheça o olhar da Luna para histórias de casamento.',
  openGraph: { title: 'Luna Photograph Wedding', description: 'O seu amor, do jeito que é. Fotografia sensível para histórias de casamento.', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Luna Photograph Wedding — O seu amor, do jeito que é.' }] },
  twitter: { card: 'summary_large_image', title: 'Luna Photograph Wedding', description: 'O seu amor, do jeito que é. Fotografia sensível para histórias de casamento.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>;
}
