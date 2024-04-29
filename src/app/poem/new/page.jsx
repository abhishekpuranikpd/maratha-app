import { redirect } from 'next/navigation'
import React from 'react'
import AddPoemForm from '../../../app/components/addpoem'
import { getCurrentUser } from '../../../lib/session'

const AddPoempage = async () => {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="bg-gray-700 min-h-screen">
    <AddPoemForm/></div>
  )
}

export default AddPoempage