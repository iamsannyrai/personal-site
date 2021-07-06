import { PostCard } from "./post_card";

export function AllPosts({ allPosts }) {
    return <div className="my-10 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-12">
        {allPosts.map((post) => (<PostCard key={post.title} post={post}/>))}
    </div>
}