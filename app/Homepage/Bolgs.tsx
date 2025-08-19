import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Img1 from "../../public/images/blog1.png"
import Img2 from "../../public/images/blog2.png"
import Img3 from "../../public/images/blog3.jpg"

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      category: "REPAIR",
      date: "Oct 12, 2023",
      title: "Smart Solutions For Reliable & Long-Lasting Car Repairs",
      description: "Discover effective repair strategies to keep your vehicle running like new.",
      image: Img1,
      href: "#"
    },
    {
      id: 2,
      category: "CAR TIPS",
      date: "Oct 12, 2023",
      title: "Expert Tips To Maintain Your Car's Performance",
      description: "Get expert advice on car maintenance, safety, and performance.",
      image: Img2,
      href: "#"
    },
    {
      id: 3,
      category: "CAR CARE",
      date: "Oct 12, 2023",
      title: "Essential Car Care To Extend Life And Performance",
      description: "Learn how to maintain your car's health, look, and value over time.",
      image: Img3,
      href: "#"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div className='justify-center items-center text-center'>
            <div className='flex justify-center md:justify-start'>
              <span className='border-t-2 mt-2 mr-2 md:hidden w-10 border-red-600 block'></span>
              <p className="text-red-600 uppercase tracking-wide font-semibold mb-3 text-sm">
                BLOGS
              </p>
              <span className='border-t-2 mt-2 ml-2 w-10 border-red-600 block'></span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Latest From The Workshop
            </h2>
          </div>
          {/* View All button - hidden on mobile, shown on md+ screens */}
          <Link 
            href="/blog" 
            className="hidden md:block text-gray-600 hover:text-red-600 font-medium transition-colors duration-200"
          >
            View All
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={post.href}>
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className=" bg-[#F8F8F8] py-6 px-6 ">
                  {/* Category and Date */}
                  <div className="flex items-center gap-3 text-sm">
                    <span className={`font-semibold uppercase tracking-wide text-gray-500`}>
                      {post.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl py-2 font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200 leading-tight">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View All button - centered on mobile screens, hidden on md+ screens */}
        <div className="flex justify-center mt-12 md:hidden">
          <Link 
            href="/blog" 
            className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-200 px-6 py-3 border border-gray-300 rounded-lg hover:border-red-600"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blogs
