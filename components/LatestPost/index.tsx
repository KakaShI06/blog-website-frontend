import Image from 'next/image'
import React from 'react'
import blogType from '@/interface/blogType'

type Props = {
  blog: blogType
}

function LatestPost({ blog }: Props) {
  return (
    <section className='my-2'>
      <h1 className='font-bold text-2xl underline pt-2 pb-4'>
        Checkout My Latest Blog Here:
      </h1>
      <div className='flex flex-col md:flex-row lg:flex-row gap-4 mt-4 border border-blue-100 p-4 rounded-xl'>
        {blog.imageUrl && (
          <div>
            <Image
              alt={'blog-pic'}
              height={300}
              width={300}
              src={blog.imageUrl}
              style={{ borderRadius: '1em' }}
            />
          </div>
        )}
        <div>
          <h2 className='font-bold text-xl hover:underline hover:cursor-pointer'>
            {blog.name}
          </h2>
          <div className='flex gap-2 pt-1 pb-1 flex-wrap'>
            {blog.topic.map((topic, index) => (
              <div key={index} className='topics'> {topic} </div>
            ))}
          </div>
          <div>{blog.description} <br/> <span className='underline cursor-pointer'>Read More</span> </div>
        </div>
      </div>
    </section>
  )
}

export default LatestPost