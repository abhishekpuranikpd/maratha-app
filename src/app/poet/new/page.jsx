import React from 'react'
import AddPoet from '../../../app/components/addpoet'
import { getCurrentUser } from '../../../lib/session'
import { useRouter } from "next/navigation";



const AddPoetPage = async () => {
  const router = useRouter();
    const user = await getCurrentUser()

    if (!user) {
        router.push("/auth/login")
    }

  return (
    <div className="bg-gray-700 min-h-screen">
    <AddPoet/></div>
  )
}

export default AddPoetPage