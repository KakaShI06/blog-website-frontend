'use client'

import { useEffect, useState } from 'react'
import { lightModeIcon, darkModeIcon } from '@/utility/iconsConstant'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

function Header({}: Props) {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('body')?.classList.remove('dark')
    } else {
      document.querySelector('body')?.classList.add('dark')
    }
  }, [theme])

  return (
    <header className='fixed w-full text-white dark:border-b dark:border-white bg-[#2b3a42] dark:bg-[#101619]'>
      <section className='container flex justify-between p-3'>
        <div className='flex items-center gap-3 cursor-pointer'>
          <Image 
            src={'/logo/white.png'}
            alt='logo'
            width={40}
            height={40}
          />
          <Link href={'/'}>Blog</Link>
        </div>
        <div
          className='cursor-pointer p-2'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <>{darkModeIcon}</> : <>{lightModeIcon}</>}
        </div>
      </section>
    </header>
  )
}

export default Header
