import { redirect } from 'next/navigation'
import React from 'react'
import AddQuoteForm from '../../../app/components/addquote'
import { getCurrentUser } from '../../../lib/session'




const AddQuotepage = async () => {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="bg-gray-700 min-h-screen">
    <AddQuoteForm/></div>
  )
}

export default AddQuotepage