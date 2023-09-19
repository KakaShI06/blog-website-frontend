import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <header className='w-full border-b border-black'>
      <section className='container flex justify-between p-4'>
        <div>Blog</div>
        <div>Mail</div>
      </section>
    </header>
  )
}

export default Header
