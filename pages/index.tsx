import { fetchAllPostsInSortedOrder } from "../business_logic/post"
import { AllPosts } from "../components/all_posts"
import AppLayout from "../components/app_layout"
import { LatestPost } from "../components/latest_post"

export default function Home(obj: { latestPost: any, allPosts: any }) {
  return (
    <AppLayout child={
      <div>
        {/* Body Section */}
        < div className="mx-4 md:px-8 md:mx-auto md:max-w-5xl">
          {/* Latest Post Section */}
          <LatestPost latestPost={obj.latestPost} />
          {/* All Posts Section */}
          <AllPosts allPosts={obj.allPosts} />
        </div>
      </div>
    }
    />
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
