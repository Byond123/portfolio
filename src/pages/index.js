import Image from 'next/image'
import React from 'react'
import banner from '../assests/images/banner.jpg'

const Home = () => {
  return (
    <div className="relative min-h-screen">
    <Image
      src={banner}
      alt="Home banner"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">Welcome to My Website</h1>
      <p className="text-xl sm:text-2xl text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button className="mt-8 px-4 py-2 bg-white text-gray-900 font-semibold rounded hover:bg-gray-200">Learn More</button>
    </div>
  </div>
  )
}

export default Home