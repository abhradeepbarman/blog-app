import React, { useContext } from 'react'
import {AppContext} from "../context/AppContext"
import Spinner from "./Spinner"

const Blogs = () => {

  //consume
  const {loading, posts, darkMode} = useContext(AppContext);

  return (
      <div className={`w-full ${darkMode ? "bg-[#111827]" : "bg-white"}`}>
        <div className={'w-11/12 max-w-[670px] py-8 pb-20 mt-[70px] flex flex-col gap-y-9 mx-auto'}>

          {
            loading ? (<Spinner />) 
            : ( posts.length  === 0 ? (<div>No Post Found</div>) 
              : (
                posts.map((post, index) => (
                  <div key={post.id} 
                  className={`${darkMode ? "text-slate-200" : "text-black"}`}> 

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
                          return <span key={index} 
                          className={`${darkMode ? "text-purple-200" : "text-purple-700"} font-semibold text-xs mr-2 underline`}>
                              {`#${tag}`} 
                          </span>
                        })
                      }
                    </div>
                    

                    {/* show a line after every post except the last one  */}
                    {        
                      !(index === posts.length - 1) &&
                      <hr className={`mt-8 opacity-25 ${darkMode ? "border-white" : "border-black"}`} />
                    }
                  </div>
                ))
              )
            )
          }
            
          </div>
      </div>
  )
}

export default Blogs
