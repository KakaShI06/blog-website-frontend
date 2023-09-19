import BlogCard from '@/components/BlogCard'
import blogs from '@/utility/blogMapping'

export default function Home() {
  return (
    <div className=''>
      {blogs.map((items, index) => (
        <BlogCard
          key={index}
          name={items.name}
          description={items.desciption}
          link={items.url}
        />
      ))}
    </div>
  )
}
