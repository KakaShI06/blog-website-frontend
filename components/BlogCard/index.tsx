import Image from 'next/image'
import Link from 'next/link'

type Props = {
  name: string
  description: string
  link: string
  imageUrl?: string
  topics?: string[]
}

function BlogCard({ name, description, link, imageUrl, topics }: Props) {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row gap-4 mt-4 border border-[#2b3a42] p-4 rounded-xl'>
      {imageUrl && (
        <div className='lg:min-w-[300px] md:min-w-[300px]'>
          <Image
            alt={'blog-pic'}
            height={300}
            width={300}
            src={imageUrl}
            style={{ borderRadius: '1em' }}
          />
        </div>
      )}
      <div>
        <h3 className='font-bold text-xl hover:underline hover:cursor-pointer'>
          <Link href={link} title={name}>{name}</Link>
        </h3>
        <div className='flex gap-2 pt-1 pb-1 flex-wrap'>
          {topics?.map((topic, index) => (
            <div key={index} className='topics'>
              {' '}
              {topic}{' '}
            </div>
          ))}
        </div>
        <p>{description}</p>
        <Link href={link} className='underline cursor-pointer'>Read More</Link>
      </div>
    </div>
  )
}

export default BlogCard
