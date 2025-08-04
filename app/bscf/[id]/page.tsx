import { getUserById } from '@/app/lib/getUserById';
import { notFound } from 'next/navigation';

// ✅ Updated for Next.js 15 - params is now a Promise
type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UserDetailsPage({ params }: PageProps) {
  // ✅ Await the params Promise
  const { id } = await params;
  const user = await getUserById(id);

  if (!user) return notFound();

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 border rounded shadow bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">User Details</h1>

      <div className="space-y-4 text-gray-800">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
        <p><strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
      </div>
    </div>
  );
}