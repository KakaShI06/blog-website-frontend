import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <main className='w-screen'>
      <Header />
      <main className='container'>{children}</main>
      <Footer />
    </main>
  )
}

export default Layout
