'use client'

import { useEffect, useState } from 'react'
import { lightModeIcon, darkModeIcon } from '@/utility/iconsConstant'
import Link from 'next/link'

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
    <header className='w-full border-b border-black dark:border-white'>
      <section className='container flex justify-between p-4'>
        <div>
          <Link href={'/'}>Blog</Link>
        </div>
        <div
          className='pointer'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <>{darkModeIcon}</> : <>{lightModeIcon}</>}
        </div>
      </section>
    </header>
  )
}

export default Header
