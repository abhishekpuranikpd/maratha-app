
import React from 'react'
import AddPoet from '../../../app/components/addpoet'
import { getCurrentUser } from '../../../lib/session'




const AddPoetPage = async () => {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="bg-gray-700 min-h-screen">
    <AddPoet/></div>
  )
}

export default AddPoetPage