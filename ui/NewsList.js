import axios from 'axios'
import React from 'react'


const NewsList = ({result}) => {
  if(!result){
    return <div>Loading</div>
  }
  return (
    <div>
      {result.articles.map((article,index)=>{
        <div
          style={{
            position:"relative"
          }}
        >
         <span style={{
          backgroundColor:"#EA5455",
          paddingInline:"10px",
          paddingBlock:"5px",
          position:"absolute"
         }}>{article.source.name}</span>
        </div>
      })}
    </div>
  )
}

export default NewsList 