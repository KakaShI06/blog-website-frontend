import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog | Ujjval',
  description: 'How to center a div',
  icons: '/logo/white.png',
  openGraph: {
    type: 'website',
    siteName: 'Blog',
    title: 'Blog',
    url: 'https://blogs.snapbit.in/blog/how-to-center-a-div',
    description: 'How to center a div',
    images: [
      {
        url: 'https://blogs.snapbit.in/blogs/center-div-css.webp',
      },
    ],
  },
  alternates: {
    canonical: 'https://blogs.snapbit.in',
  },
  twitter: {
    creator: '@UjjvalP06',
    images: 'https://blogs.snapbit.in/blogs/center-div-css.webp',
    site: '@site',
    title: 'Ujjval | Blogs',
    description: 'How to center a div',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <>{children}</>
      </body>
    </html>
  )
}
