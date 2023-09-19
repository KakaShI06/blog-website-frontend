import Link from 'next/link'
import React from 'react'

type Props = {
  name: string
  description: string
  link: string
}

function BlogCard({ name, description, link }: Props) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link href={link}>Read More</Link>
    </div>
  )
}

export default BlogCard
