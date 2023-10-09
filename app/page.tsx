import BlogCard from '@/components/BlogCard'
import FilteredBlogList from '@/components/FilteredBlogList'
import Layout from '@/components/Layout'
import WelcomeScreen from '@/components/WelcomeScreen'
import blogs from '@/utility/blogMapping'

export default function Home() {
  return (
    <Layout>
      <WelcomeScreen />
      <h1 className='font-bold text-2xl underline pt-2 pb-4 mt-4'>
        Checkout My Latest Blog Here:
      </h1>
      <BlogCard
        name={blogs[blogs.length - 1].name}
        description={blogs[blogs.length - 1].description}
        imageUrl={blogs[blogs.length - 1].imageUrl}
        topics={blogs[blogs.length - 1].topic}
        link={blogs[blogs.length - 1].url}
      />
      <h2 className='text-2xl font-bold p-4 pl-0 underline'>
        Checkout My Other Blogs:{' '}
      </h2>
      <FilteredBlogList blogs={blogs} />
    </Layout>
  )
}
