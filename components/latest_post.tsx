import Link from 'next/link'

export function LatestPost({ latestPost }) {
    return <div className="md:flex md:space-x-16  my-4 md:mt-6 md:mb-20">
        <img src={latestPost.thumbnail} alt="" width="400" />
        <div className="mt-4 md:my-auto">
            <div className="text-sm">{latestPost.date}</div>
            <Link href="/">
                <a><h1 className="text-5xl font-bold my-6 hover:underline">{latestPost.title}</h1></a></Link>
            <p>{latestPost.description} </p>
            <Link href="/"><button className="mt-10 bg-gray-800 p-2 text-lg text-white hover:bg-black">Read blog</button></Link>
        </div>
    </div>
}