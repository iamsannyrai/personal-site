export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <div className="flex h-16 bg-gray-50 items-center px-4 md:px-8 justify-between shadow-sm">
        <h1 className="text-xl font-bold">Sanny Rai</h1>
      </div>

      {/* Body Section */}
      <div className="mx-4 md:px-8 md:mx-auto md:max-w-5xl">
        {/* Latest Post Section */}
        <div className="md:flex md:space-x-16  my-4 md:mt-10 md:mb-16">
          <img src="./thumbnail.jpg" alt="" width="400" />
          <div className="mt-4 md:my-auto">
            <div className="text-sm">JULY 1, 2021</div>
            <h1 className="text-5xl font-bold my-6">10 things I learned conducting a design workshop</h1>
            <p>50+ aspirants have graduated from this local home-grown design workshop and so far the impact has been phenomenal. </p>
            <button className="mt-10 bg-gray-800 p-2 text-lg text-white hover:bg-black">Read blog</button>
          </div>
        </div>

        {/* All Posts Section */}
        <div className="my-10 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-12">
          <div>
            <img src="./testThumbnail.jpeg" alt="" />
            <div className="mt-4 mb-2 text-sm">JULY 1, 2021</div>
            <h1 className="mb-2 text-2xl font-bold">10 things I learned conducting a design workshop</h1>
            <p>50+ aspirants have graduated from this local home-grown design workshop and so far the impact has been phenomenal. </p>
          </div>
          <div>
            <img src="./testThumbnail.jpeg" alt="" />
            <div className="mt-4 mb-2 text-sm">JULY 1, 2021</div>
            <h1 className="mb-2 text-2xl font-bold">10 things I learned conducting a design workshop</h1>
            <p>50+ aspirants have graduated from this local home-grown design workshop and so far the impact has been phenomenal. </p>
          </div>
          <div>
            <img src="./testThumbnail.jpeg" alt="" />
            <div className="mt-4 mb-2 text-sm">JULY 1, 2021</div>
            <h1 className="mb-2 text-2xl font-bold">10 things I learned conducting a design workshop</h1>
            <p>50+ aspirants have graduated from this local home-grown design workshop and so far the impact has been phenomenal. </p>
          </div>
          <div>
            <img src="./testThumbnail.jpeg" alt="" />
            <div className="mt-4 mb-2 text-sm">JULY 1, 2021</div>
            <h1 className="mb-2 text-2xl font-bold">10 things I learned conducting a design workshop</h1>
            <p>50+ aspirants have graduated from this local home-grown design workshop and so far the impact has been phenomenal. </p>
          </div>
          <div>
            <img src="./testThumbnail.jpeg" alt="" />
            <div className="mt-4 mb-2 text-sm">JULY 1, 2021</div>
            <h1 className="mb-2 text-2xl font-bold">10 things I learned conducting a design workshop</h1>
            <p>50+ aspirants have graduated from this local home-grown design workshop and so far the impact has been phenomenal. </p>
          </div>
          <div>
            <img src="./testThumbnail.jpeg" alt="" />
            <div className="mt-4 mb-2 text-sm">JULY 1, 2021</div>
            <h1 className="mb-2 text-2xl font-bold">10 things I learned conducting a design workshop</h1>
            <p>50+ aspirants have graduated from this local home-grown design workshop and so far the impact has been phenomenal. </p>
          </div>
        </div>
      </div>
    </div>
  )
}
