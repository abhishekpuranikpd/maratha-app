import React from 'react'
import BlogForm from '../../components/blogform'
import { getCurrentUser } from '../../../lib/session'

const BlogPage = async () => {
    const user = await getCurrentUser()

    if (!user) {
        redirect("/auth/login")
    }

  return (
    <div className="bg-gray-700 min-h-screen">
    <BlogForm/></div>
  )
}

export default BlogPage