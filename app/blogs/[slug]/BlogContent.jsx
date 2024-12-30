// File: app/blog/[slug]/BlogContent.jsx

"use client"

import React, { useCallback } from 'react'
import Link from 'next/link'
import { format } from "date-fns"
import { CalendarIcon, ClockIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BlogContent({ currentPost, nextPost, prevPost, sortedPosts }) {
  const handleAnchorClick = useCallback((event, topic) => {
    event.preventDefault()

    const element = document.getElementById(topic.toLowerCase().replace(/\s+/g, '-'))
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 160, // Adjusting for header offset
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Featured Image */}
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <img
          src={currentPost.featuredImage}
          alt={currentPost.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-4xl font-bold text-white mb-2">{currentPost.title}</h1>
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {currentPost.category}
          </span>
        </div>
      </div>

      {/* Author & Meta */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={currentPost.author.image} alt={currentPost.author.name} />
            <AvatarFallback>{currentPost.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{currentPost.author.name}</p>
            <p className="text-sm text-muted-foreground">Author</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {format(new Date(currentPost.createdAt), "MMMM d, yyyy")}
          </span>
          <span className="flex items-center">
            <ClockIcon className="mr-2 h-4 w-4" />
            {Math.ceil(currentPost.description.length / 200)} min read
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:flex gap-8">
        {/* Table of Contents */}
        <aside className="md:col-span-1 min-w-64">
          <Card className="md:sticky top-24">
            <CardHeader>
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {currentPost.description
                  .split('**')
                  .filter((_, index) => index % 2 !== 0)
                  .map((topic, index) => (
                    <a
                      key={index}
                      href={`#${topic.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={(event) => handleAnchorClick(event, topic)}
                    >
                      <h4 className="text-md text-primary mb-2">{topic}</h4>
                    </a>
                  ))}
              </ul>
            </CardContent>
          </Card>
        </aside>

        {/* Blog Sections */}
        <main className="md:col-span-3 space-y-8">
          {currentPost.description
            .split('**')
            .filter((_, index) => index % 2 !== 0)
            .map((topic, index) => {
              const content = currentPost.description
                .split(`**${topic}**`)[1]
                .split('**')[0]
                .trim()

              return (
                <section key={index} id={topic.toLowerCase().replace(/\s+/g, '-')}>
                  <h4 className="text-xl font-bold mt-4">{topic}</h4>
                  <p className="text-gray-800">{content}</p>
                </section>
              )
            })}
        </main>
      </div>

      {/* Other Posts */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Other Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sortedPosts.slice(0, 3).map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {post.description.split(' ').slice(0, 20).join(' ')}...
                </p>
              </CardContent>
              <CardFooter>
                <Link href={`/blogs/${post.slug}`}>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Link href={`/blogs/${prevPost.slug}`}>
          <Button variant="outline" className="flex items-center">
            <ChevronLeftIcon className="mr-2 h-4 w-4" /> Previous Post
          </Button>
        </Link>
        <Link href={`/blogs/${nextPost.slug}`}>
          <Button variant="outline" className="flex items-center">
            Next Post <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
