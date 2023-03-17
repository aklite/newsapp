import React from 'react'

const GeneralNews = ({result}) => {
  console.log(result);
  return (
  <div 
  className="articles"
  >
    {result.articles.map((article, index) => {
          return <a href={article.url}
          key={index}
          style={{
            display:"block",
            marginBlock:"40px",
            backgroundColor:"gray",
          }}
          >
            <img src={article.urlToImage} 
             style={{
              width:"100%",
             }}
            alt="" />
            <span
            style={{
              paddingInline:"20px",
              display:"inline-block",
              paddingBlock:"10px",
              color:"white",
              backgroundColor:"#a1a",
              borderRadius:"10px"
            }}
            >
              {article.author}
            </span>
            <p
            style={{
              paddingBlock:"20px",
              paddingInline:"10px",
              fontSize:"1.25rem"
            }}
            >{article.title}</p>
          </a>
          })}
  </div>
  )
}

export default GeneralNews