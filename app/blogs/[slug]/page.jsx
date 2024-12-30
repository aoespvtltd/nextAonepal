// File: app/blog/[slug]/page.jsx

import { blogPosts } from '@/components/jsons/blogs';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostsPage({ params }) {
  const { slug } = params;

  const currentPost = blogPosts.find((post) => post.slug === slug);

  if (!currentPost) {
    return notFound();
  }

  const currentIndex = blogPosts.findIndex((post) => post.slug === currentPost.slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];
  const prevPost = blogPosts[(currentIndex - 1 + blogPosts.length) % blogPosts.length];

  const sortedPosts = blogPosts
    .filter((post) => post.slug !== currentPost.slug)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <BlogContent
        currentPost={currentPost}
        nextPost={nextPost}
        prevPost={prevPost}
        sortedPosts={sortedPosts}
      />
    </div>
  );
}
