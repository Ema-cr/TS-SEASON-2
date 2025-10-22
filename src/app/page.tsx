"use client"

import React from 'react'

export default function Home() {

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
