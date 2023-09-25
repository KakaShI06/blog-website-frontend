import FilteredBlogList from '@/components/FilteredBlogList'
import LatestPost from '@/components/LatestPost'
import Layout from '@/components/Layout'
import WelcomeScreen from '@/components/WelcomeScreen'
import blogs from '@/utility/blogMapping'

export default function Home() {
  return (
    <Layout>
      <WelcomeScreen />
      <LatestPost blog={blogs[blogs.length - 1]} />
      <h2 className='text-2xl font-bold p-4 pl-0 underline'>Checkout My Other Blogs :</h2>
      <FilteredBlogList blogs={blogs} />
    </Layout>
  )
}
