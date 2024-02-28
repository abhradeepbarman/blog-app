import React, { useContext } from 'react'
import {AppContext} from "../context/AppContext"
import Spinner from "./Spinner"

const Blogs = () => {

  //consume
  const {loading, posts} = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] py-8 pb-20 mt-[70px] flex flex-col gap-y-9'>

    {
      loading ? (<Spinner />) 
      : ( posts.length  === 0 ? (<div>No Post Found</div>) 
        : (
          posts.map((post) => (
            <div key={post.id}> 

              <p className='font-bold text-lg mb-1'>{post.title}</p>
              <p className='text-sm'>
                By <span className='italic'>{post.author}</span> on <span className='underline font-semibold'>{post.category}</span>
              </p>
              <p className='text-sm mt-[5px] mb-[15px]'>
                Posted on {post.date}
              </p>
              <p>
                {post.content}
              </p>

              <div>
                {
                  post.tags.map((tag, index) => {
                    return <span key={index} className='text-purple-700 font-semibold text-xs mr-2 underline'>
                        {`#${tag}`} 
                    </span>
                  })
                }
              </div>

            </div>
          ))
        )
      )
    }
      
    </div>
  )
}

export default Blogs
