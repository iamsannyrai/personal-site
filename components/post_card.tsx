import Link from 'next/link'

export function PostCard({ post }) {
    return <div>
        <img src="./testThumbnail.jpeg" alt="" />
        <div className="mt-4 mb-2 text-sm">{post.date}</div>
        <Link href="/post"><a><h1 className="mb-2 text-2xl font-bold hover:underline">{post.title}</h1></a></Link>
        <p>{post.description}</p>
    </div>
}