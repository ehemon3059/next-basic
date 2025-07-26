import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <ul className='flex justify-items-normal p-2 gap-10 text-1.5xl align-middle'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/server-Data">Server Data</Link></li>
      </ul>
    </div>
  )
}
