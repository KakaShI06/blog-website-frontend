import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <main className='dark:bg-[#121212] dark:text-white'>
      <Header />
      <main className='container p-4 pt-24'>{children}</main>
      <Footer />
    </main>
  )
}

export default Layout
