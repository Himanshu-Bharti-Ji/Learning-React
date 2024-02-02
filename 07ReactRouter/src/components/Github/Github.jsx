import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Himanshu-Bharti-Ji")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(setData(data))
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()

  return (
    <>
    <div className='text-center m-4 p-4 bg-gray-600 text-white font-semibold text-3xl'>
      Github Url : <a href={data.html_url} target='_blank' style={{color:"blue"}} >Here</a>
    </div>
      <img className=' pb-4 px-4 w-2/5 m-auto' src={data.avatar_url} alt="Github Profile" />
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/Himanshu-Bharti-Ji")
    return res.json()
}