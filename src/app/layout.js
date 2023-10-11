import './globals.css';
import localFont from '@next/font/local';

const ttnorms = localFont({
  src: [
    {
      path: '../../public/fonts/TTNorms-Black.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/TTNorms-BlackItalic.otf',
      weight: '400',
      style: 'regular-bold'
    },
    {
      path: '../../public/fonts/TTNorms-BlackItalic.otf'
    },
    {
      path: '../../public/fonts/TTNorms-BoldItalic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/TTNorms-Italic.otf'
    },
    {
      path: '../../public/fonts/TTNorms-Light.otf'
    },
    {
      path: '../../public/fonts/TTNorms-Regular.otf'
    },
  ],
  variable: '--font-ttnorms'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ttnorms.variable} font-sans`}>{children}</body>
    </html>
  )
}
