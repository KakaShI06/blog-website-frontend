import Image from 'next/image'
import Link from 'next/link'
import logoUrl from '@/public/logo/white.png'

type Props = {}

function Footer({}: Props) {
  const year = new Date().getFullYear()

  return (
    <div className='w-full p-4 pt-0 bg-gray-400 dark:bg-black'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <div>
            <Image alt='logo' src={logoUrl} width={60} height={50} />
          </div>
          <div>Ujjval Priyadarshi</div>
        </div>

        <div>
          <ul className='list-none lg:mr-11'>
            <li>
              {' '}
              <Link href={'#about'}>About</Link>{' '}
            </li>
            <li>
              {' '}
              <Link href={'#experience'}>Experience</Link>{' '}
            </li>
            <li>
              {' '}
              <Link href={'#projects'}>Projects</Link>{' '}
            </li>
            <li className='pointer'>
              <Link
                href={
                  'https://drive.google.com/file/d/1wI2qhfGHZm2U6tC-HovqnfsKj2jhbE_M/view?usp=sharing'
                }
                target='_blank'
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center'>
        @Copyright {year} | Developer{' '}
        <Link href='https://ujjval.snapbit.in' className='underline'>
          Ujjval Priyadarshi
        </Link>
      </div>
    </div>
  )
}

export default Footer
