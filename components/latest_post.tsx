import Link from 'next/link'

export function LatestPost() {
    return <div className="md:flex md:space-x-16  my-4 md:mt-10 md:mb-16">
        <img src="./thumbnail.jpg" alt="" width="400" />
        <div className="mt-4 md:my-auto">
            <div className="text-sm">JULY 1, 2021</div>
            <Link href="/">
                <a><h1 className="text-5xl font-bold my-6 hover:underline">10 things I learned conducting a design workshop</h1></a></Link>
            <p>50+ aspirants have graduated from this local home-grown design workshop and so far the impact has been phenomenal. </p>
            <Link href="/"><button className="mt-10 bg-gray-800 p-2 text-lg text-white hover:bg-black">Read blog</button></Link>
        </div>
    </div>
}