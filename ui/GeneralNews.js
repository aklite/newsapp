import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const GeneralNews = ({result}) => {
  
  return (
  <div 
  style={{
   display:"grid",
   gridTemplateColumns:"repeat(3, 1fr)",
   gridTemplateRows:"repeat(3, 1fr)",
   gap:"20px"
  }}
  >
    {result.articles.map((article, index) => {
           return <div key={index}
           style={{
               backgroundColor:"#EAEAfe"
           }}
           >
            <a href={article.url}
            style={{
              textDecoration:"none",
              color:"black"
            }}
            >
              <div>
                <img src={article.urlToImage || 'https://static.vecteezy.com/system/resources/thumbnails/010/837/202/small/breaking-news-on-world-map-background-element-design-for-tv-and-digital-content-png.png'}
              width={360}
             height={180}
               alt="" />
              </div>
              <p>
                {article.title}
              </p>
            </a>
           </div>
          })}
  </div>
  )
}

export default GeneralNews