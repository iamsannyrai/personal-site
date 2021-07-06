import { fetchAllPostsInSortedOrder } from "../business_logic/post"
import { AllPosts } from "../components/all_posts"
import { LatestPost } from "../components/latest_post"
import { Navbar } from "../components/nav_bar"

export default function Home({ latestPost, allPosts }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Body Section */}
      <div className="mx-4 md:px-8 md:mx-auto md:max-w-5xl">
        {/* Latest Post Section */}
        <LatestPost latestPost={latestPost} />
        {/* All Posts Section */}
        <AllPosts allPosts={allPosts} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = fetchAllPostsInSortedOrder()
  if (allPostsData.length > 0)
    return {
      props: {
        latestPost: allPostsData[0],
        allPosts: allPostsData.length > 1 ? allPostsData.slice(1) : []
      }
    }
  return {
    props: {
      latestPost: {},
      allPosts: []
    }
  }
}
