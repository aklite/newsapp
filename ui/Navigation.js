import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div 
     style={{
      padding:"30px",
      display:"flex",
      gap:"20px",
     }}
    >
        <Link href="/"
        style={{
          color:"white",
          textDecoration:"none"
        }}
        >
            <Image src="/news.png"
            width={100}
            height={40}
            alt="" />
        </Link>
        <Link href="/news/business"
        style={{
          color:"white",
          textDecoration:"none"
        }}
        >
            Business 
        </Link>
        <Link 
        style={{
          color:"white",
          textDecoration:"none"
        }}
        href="/news/technology">
            Technology News
        </Link>
        <Link 
        style={{
          color:"white",
          textDecoration:"none"
        }}
        href="/news/health">
         Health News 
        </Link>
        <Link 
        style={{
          color:"white",
          textDecoration:"none" 
        }}
        href="/news/sports">
         Sports News 
        </Link>
    </div>
  )
}

export default Navigation