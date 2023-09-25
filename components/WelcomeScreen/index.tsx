import Image from 'next/image'
import React from 'react'

type Props = {}

function WelcomeScreen({}: Props) {
  return (
    <div className='lg:min-h-[50vh] flex justify-between items-center flex-col md:flex-row lg:flex-row'>
      <div>
        <span className='text-3xl'>
          Hi,
          <br /> {"I'm"} Ujjval Priyadarshi,
        </span>{' '}
        <br />{"I'm"} a Full Stack Developer and I write programming stuff here
        to make your life easy.
      </div>
      <div>
        <Image
          alt='logo'
          src={
            'https://res.cloudinary.com/doql129vl/image/upload/v1695316482/group_hi47ny.png'
          }
          height={350}
          width={350}
        />
      </div>
    </div>
  )
}

export default WelcomeScreen
