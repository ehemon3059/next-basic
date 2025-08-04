// lib/getUserById.ts

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export async function getUserById(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    // You can use 'no-store' for fresh data or 'revalidate' for caching
 next: { revalidate: 60 } // Cache for 60 seconds
  });

  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }

  return res.json();
}
