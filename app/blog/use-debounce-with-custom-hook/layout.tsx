import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog | Ujjval',
  description: 'How to use Debounce with custom hook in Reactjs',
  icons: '/logo/white.png',
  openGraph: {
    type: 'website',
    siteName: 'Blog',
    title: 'Blog',
    url: 'https://blogs.snapbit.in/blog/use-debounce-with-custom-hook',
    description: 'How to use Debounce with custom hook in Reactjs',
    images: [
      {
        url: 'https://blogs.snapbit.in/blogs/react-hooks.jpg',
      },
    ],
  },
  alternates: {
    canonical: 'https://blogs.snapbit.in/blog/use-debounce-with-custom-hook',
  },
  twitter: {
    creator: '@UjjvalP06',
    images: 'https://blogs.snapbit.in/blogs/react-hooks.jpg',
    site: '@site',
    title: 'Ujjval | Blogs',
    description: 'How to use Debounce with custom hook in Reactjs',
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
