// app/server-Data/[userData]/[id]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default async function UserDetailPage({ params }: Props) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  if(!user || Object.keys(user).length === 0){
    notFound();
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
        User Details
      </h1>

      <div className="space-y-4 text-lg">
        <p><span className="font-semibold text-gray-700">Name:</span> {user.name}</p>
        <p><span className="font-semibold text-gray-700">Username:</span> {user.username}</p>
        <p><span className="font-semibold text-gray-700">Email:</span> {user.email}</p>
        <p><span className="font-semibold text-gray-700">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold text-gray-700">Website:</span> {user.website}</p>
        <p><span className="font-semibold text-gray-700">Company:</span> {user.company?.name}</p>
        <p><span className="font-semibold text-gray-700">Address:</span> {user.address?.suite}, {user.address?.street}, {user.address?.city}</p>

      </div>

    </div>
    <div  className='max-w-2xl mx-auto mt-10 p-6 '>

      <Link href="../../../server-Data/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to All Service Data</Link>
    </div>
      
    </div>
    
  );
}
