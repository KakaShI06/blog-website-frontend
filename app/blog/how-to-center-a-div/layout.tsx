import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'How to center a div',
  description: "Learn the essential methods for centering divs in your web projects. This guide provides straightforward techniques and best practices to ensure your content is perfectly aligned. Whether you're new to web development or looking to refine your skills, this tutorial will help you achieve clean and professional layouts with ease.",
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
    title: 'How to center a div',
    description: "Learn the essential methods for centering divs in your web projects. This guide provides straightforward techniques and best practices to ensure your content is perfectly aligned. Whether you're new to web development or looking to refine your skills, this tutorial will help you achieve clean and professional layouts with ease.",
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
