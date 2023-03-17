import Image from 'next/image';
import React from 'react'
import Layout from '../../ui/Layout';

export async function getServerSideProps(context) {
  const { category } = context.query;
  const url=`https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=8cd337d555b044639574874af216df52`
  let result=await fetch(url);
  let res=await result.json()
 
  return {
    props:{
      res 
    }
  }
}


const Category = ({res}) => {
  console.log(res);
  return (
    <Layout>
     <div 
     style={{
      display:"grid",
      gridTemplateColumns:"repeat(3, 1fr)",
      gridTemplateRows:"repeat(3, 1fr)",
      gap:"20px"
     }}
     >
     {
        res.articles.map((article,index)=>{
          return <div key={index}
          style={{
            backgroundColor:"#EAEAaa"
          }}
          >
            <a 
          href={article.url}
          style={{
            textDecoration:"none",
            color:"black"
          }}
          >
            <img src={article.urlToImage 
              || 'https://static.vecteezy.com/system/resources/thumbnails/010/837/202/small/breaking-news-on-world-map-background-element-design-for-tv-and-digital-content-png.png'}
              width={300}
              height={270}
              alt="" />
            <p style={{
              padding:"10px"
            }}>{article.title}</p>
          </a>
          </div>
        })
      }
     </div>
    </Layout>
  )
}

export default Category