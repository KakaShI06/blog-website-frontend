import BlogCard from '@/components/BlogCard'
import FilteredBlogList from '@/components/FilteredBlogList'
import LatestPost from '@/components/LatestPost'
import WelcomeScreen from '@/components/WelcomeScreen'
import blogs from '@/utility/blogMapping'

export default function Home() {
  return (
    <div className=''>
      <WelcomeScreen />
      <LatestPost blog={blogs[blogs.length - 1]} />
      <h2 className='text-2xl font-bold p-4 pl-0 underline'>Checkout My Other Blogs :</h2>
      <FilteredBlogList blogs={blogs} />
    </div>
  )
}
