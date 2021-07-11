import Link from 'next/link'
import Date from './date'

export function PostCard({ post }) {
    return <div>
        <img src="./testThumbnail.jpeg" alt="" />
        <div className="mt-4 mb-2 text-sm">{Date(post.date)}</div>
        <Link href={`/posts/${post.id}`}><a><h1 className="mb-2 text-2xl font-bold hover:underline">{post.title}</h1></a></Link>
        <p>{post.description}</p>
    </div>
}