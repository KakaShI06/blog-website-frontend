'use client'

import { useMemo, useState } from 'react'
import blogType from '@/interface/blogType'
import BlogCard from '../BlogCard'

type Props = {
  blogs: blogType[]
}

function FilteredBlogList({ blogs }: Props) {
  const [value, setValue] = useState('')

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.name.toLowerCase().includes(value.toLowerCase())
    )
  }, [value, blogs])

  return (
    <div className='min-h-[80vh]'>
      <div>
        <h4>Search :</h4>
        <input
          className='dark:bg-[#101619] dark:text-white p-2 outline-none border border-black dark:border-white rounded-sm w-full my-2'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Search for blog'
        />
      </div>

      <div>
        {filteredBlogs.length ? (
          <>
            {filteredBlogs.map((blog, index) => (
              <BlogCard
                key={index}
                name={blog.name}
                link={blog.url}
                description={blog.description}
                imageUrl={blog.imageUrl}
                topics={blog.topic}
              />
            ))}
          </>
        ) : (
          <div className='text-center mt-4' >
            No Blogs is Found of this Search Result!
          </div>
        )}
      </div>
    </div>
  )
}

export default FilteredBlogList
