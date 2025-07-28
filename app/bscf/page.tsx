import React from 'react'
import { getUsers } from '../lib/getUsers';

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

        <p className='text-center mt-10 mb-5'>This code is called "Server Component Data Fetching with Incremental Static Regeneration (ISR)" using the next.fetch revalidate option.</p>
        
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="grid gap-4">
                {users.map((user: User) => (
                <div key={user.id} className="border p-4 rounded">
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-gray-600">{user.email}</p>
                </div>
                ))}
            </div>
        </div>


        <p className='text-center m-10 p-10'>Explanation with Benefits in One Paragraph:
            This approach is known as static-site generation with incremental revalidation (ISR) in a Server Component,
             where data is fetched on the server during rendering, but cached and automatically refreshed at intervals 
             using next:  revalidate: 60 . This means your page gets fast performance like static pages, but also stays 
             reasonably fresh without needing a full rebuild or manual re-deployment. It reduces API calls (saving server load),
              improves SEO (as it's rendered on the server), and gives a smoother user experience with 
            faster page loads. By separating the fetching logic into a helper function, it also improves 
            code reusability and organization, which is ideal for enterprise-level apps.</p>

    </div>
  )
}
