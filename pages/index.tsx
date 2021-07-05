import { AllPosts } from "../components/all_posts"
import { LatestPost } from "../components/latest_post"
import { Navbar } from "../components/nav_bar"

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Body Section */}
      <div className="mx-4 md:px-8 md:mx-auto md:max-w-5xl">
        {/* Latest Post Section */}
        <LatestPost />
        {/* All Posts Section */}
        <AllPosts />
      </div>
    </div>
  )
}
