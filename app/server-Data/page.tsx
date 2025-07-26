import Link from 'next/link';
import React from 'react'

export default async function DataFromAPi() {
  const server = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await server.json();
  console.log(result)
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mt-10 mb-10">
        This page receives data from the server and shows it in a server component
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {result.map((post:{ id : number; name: string; username:string}) => (
          <div
            key={post.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h2 key={post.id }className="text-xl font-semibold mb-2"> Name: {post.name}</h2>
            <p className="text-yellow-600">{post.username}</p>
            <Link
              href={`/server-Data/user/${post.id}`}
              className="text-green-500 hover:underline mt-4 inline-block">User Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
