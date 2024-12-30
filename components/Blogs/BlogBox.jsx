"use client";

import React from 'react'
import Link  from 'next/link'

export default function BlogBox({post}) {
  return (
    <article className="group overflow-hidden rounded-xl bg-gray-100 transition-all duration-300 hover:shadow-xl">
      <Link 
      href={`/blogs/${post.slug}`} 
      className="block">
        {/* Featured Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block rounded-md bg-gray-700 px-3 py-1 text-xs text-gray-300">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-4 text-xl font-bold tracking-tight transition-colors">
            {post.title}
          </h2>

          {/* Description */}
          <p className="mb-8 text-gray-600 line-clamp-2 text-md">
            {post.description}
          </p>

          {/* Author and Meta Info */}
          <div className="flex items-center gap-4">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium ">
                {post.author.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <time dateTime={new Date(post.createdAt).toISOString()}>
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

// Example usage:
// const post = {
//   slug: "exploring-ukui-desktop",
//   category: "openEuler",
//   title: "Exploring and Customizing UKUI Desktop in openEuler",
//   description: "Let's explore the UKUI desktop environment and see what kind of customization we can perform on this sleek DE.",
//   featuredImage: "https://itsfoss.com/content/images/size/w600/format/webp/wordpress/2021/03/time-difference-issue-dual-boot.png",
//   author: {
//     name: "Sreenath",
//     image: "https://www.gravatar.com/avatar/84de387e32f72af3e12bf434a82ea8e8?s=250&r=x&d=mp"
//   },
//   createdAt: "2024-11-11",
//   readTime: "4 min",
//   commentCount: 0
// }
