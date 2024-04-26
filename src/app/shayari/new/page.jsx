
import React from 'react'
import AddShayariForm from '../../../app/components/addshayari'
import { getCurrentUser } from '../../../lib/session'




const AddShayaripage = async () => {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="bg-gray-700 min-h-screen">
    <AddShayariForm/></div>
  )
}

export default AddShayaripage