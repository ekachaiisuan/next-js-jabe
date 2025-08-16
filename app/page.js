import Link from "next/link"

async function getBlogs(){
  const response = await fetch('https://673e98d9a9bc276ec4b4f312.mockapi.io/todos')
  if(!response.ok){
    throw new Error('cannot fetch blog')
  }

  return response.json()
}

export default async function Home(){
  const blogs = await getBlogs()
  

  return (
   <div>
    Blog List:
    {
      blogs.map((blog,index)=>(
        <div key={index}>
          {blog.id}{blog.name}
          <Link href={`/blog/${blog.id}`}>
          <button className="px-4 bg-blue-400">Go to read</button>
          </Link>
          
        </div>
      ))
    }
   </div>
  )
}