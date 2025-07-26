"use client"
import React from 'react'

export default function Button() {
  return (
    <div>
      <button  onClick={() => alert("Hello")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Clieck me to see alert 
</button>
    </div>
  )
}
