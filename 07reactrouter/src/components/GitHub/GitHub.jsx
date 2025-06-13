import React, { use } from 'react'
import {useState,useEffect} from 'react'
import {useLoaderData} from 'react-router-dom'
function GitHub() {
    const data = useLoaderData()
// const [data,setData]= useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/Kride024')
//         .then(response=>response.json())
//         .then(data=>{
//             console.log(data);
//             setData(data);
            
//         })
//     },[])
  return (

    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub followers:{data.followers}
      <img src={data.avatar_url} alt="GitHub Avatar" className='rounded-full w-32 h-32 mx-auto mt-4' />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
const response = await fetch('https://api.github.com/users/Kride024')
return response.json()
}
