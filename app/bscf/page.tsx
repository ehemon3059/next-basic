import React from 'react'
import { getUsers } from '../lib/getUsers';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
}


export default async  function UsersPage() {


 const users = await getUsers();

  return (
    <div>
      <h1 className='text-3xl font-bold 
       flex justify-center items-center mt-10'>Server Component Data Fetching (App Router)</h1>

        <p className='text-center mt-10 mb-5'>This code is called <span className='text-teal-600'>Server Component Data Fetching</span> with Incremental Static Regeneration <span className='text-rose-600'> (ISR)</span> using the next.fetch revalidate option.</p>
        
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="grid gap-4">
                {users.map((user: User) => (
                <div key={user.id} className="border p-4 rounded">
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-gray-600">{user.email}</p>
                    <Link href={`/bscf/${user.id}`} className="text-blue-500 hover:underline">
                      View Details
                    </Link>
                </div>
                ))}
            </div>
        </div>


        <p className='text-center m-10 p-10'>Explanation with Benefits in One Paragraph:
            This approach is known as static-site generation with incremental revalidation (ISR) in a Server Component,
             where data is fetched on the server during rendering, but cached and automatically refreshed at intervals 
             using next:  revalidate: 60 . This means your page gets fast performance like static pages, but also stays 
             reasonably fresh without needing a full rebuild or manual re-deployment. It reduces API calls (saving server load),
              improves SEO <span className='text-red-500'>(as its rendered on the server)</span> , and gives a smoother user experience with 
            faster page loads. By separating the fetching logic into a helper function, it also improves 
            code reusability and organization, which is ideal for enterprise-level apps.
        </p>

        <div className="max-w-4xl mx-auto p-6 bg-gray-600 rounded-xl shadow-md mt-10 mb-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-white-700">
            Why This Way Is Better
          </h2>

          <ul className="space-y-5">
            <li className="bg-blue-50 p-4 rounded-md border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-600">🧹 Clean Code</h3>
              <p className="text-gray-700">
                Keeping data-fetching in a separate file makes your components easier to read, maintain, and scale.
              </p>
            </li>

            <li className="bg-green-50 p-4 rounded-md border border-green-200">
              <h3 className="text-xl font-semibold text-green-600">🔁 Reusability</h3>
              <p className="text-gray-700">
                You can reuse the <code className="bg-gray-100 px-1 rounded">getUsers()</code> function anywhere without rewriting the logic.
              </p>
            </li>

            <li className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-600">⚡ Performance</h3>
              <p className="text-gray-700">
                Uses <code className="bg-gray-100 px-1 rounded">next: {'{ revalidate: 60 }'}</code> to cache API calls and make your app faster using ISR (Incremental Static Regeneration).
              </p>
            </li>

            <li className="bg-red-50 p-4 rounded-md border border-red-200">
              <h3 className="text-xl font-semibold text-red-600">🛡️ Robustness</h3>
              <p className="text-gray-700">
                Includes error handling to prevent crashes if something goes wrong during data fetch.
              </p>
            </li>

            <li className="bg-purple-50 p-4 rounded-md border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-600">🧠 Type Safety</h3>
              <p className="text-gray-700">
                You define the <code className="bg-gray-100 px-1 rounded">User</code> type once and get full TypeScript support across your app, reducing bugs.
              </p>
            </li>
          </ul>
        </div>

    </div>
  )
}
