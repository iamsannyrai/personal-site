import Link from 'next/link'

export function PostCard() {
    return <div>
        <img src="./testThumbnail.jpeg" alt="" />
        <div className="mt-4 mb-2 text-sm">JULY 1, 2021</div>
        <Link href="/post"><a><h1 className="mb-2 text-2xl font-bold hover:underline">10 things I learned conducting a design workshop</h1></a></Link>
        <p>50+ aspirants have graduated from this local home-grown design workshop and so far the impact has been phenomenal. </p>
    </div>
}