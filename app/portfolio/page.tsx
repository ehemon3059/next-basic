
import React from 'react'
import Button from './button'


export default async function Portfolio() {


  const server = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await server.json();
  console.log(result)
  
  return (
    <div>
      <h1 className='text-3xl font-bold 
       flex justify-center items-center mt-10 mb-10'>This is portfolio web page</h1>
       <p className='ml-5'>this is server component but you can 
        <span className='text-green-500 text-2xl'> use </span> client component or import client file</p><br />
        <Button />
        <br />
        

        <div className="p-6">
      <h1 className="text-3xl font-bold text-center mt-10 mb-10">
        This page receives data from the server and shows it in a server component
      </h1>

      
    </div>
    </div>
  )
}

