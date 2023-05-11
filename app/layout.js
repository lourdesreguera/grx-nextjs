import '../styles/globals.css'
import localFont from 'next/font/local'

const helvetica = localFont({
  src: [
    {
      path: './fonts/HelveticaNeueLTProRoman.otf',
    },
    // {
    //   path: './Roboto-Italic.woff2',
    //   weight: '400',
    //   style: 'italic',
    // },
    // {
    //   path: './Roboto-Bold.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
    // {
    //   path: './Roboto-BoldItalic.woff2',
    //   weight: '700',
    //   style: 'italic',
    // },
  ],
})

export const metadata = {
  title: 'Grx Metal y Madera',
  description: 'Artesanía en madera y metal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helvetica.className}>{children}</body>
    </html>
  )
}
