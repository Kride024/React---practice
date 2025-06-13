import React from 'react'
import {useParams} from 'react-router-dom'
// This component displays the user ID from the URL parameters
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      User:{userid}
    </div>
  )
}

export default User
