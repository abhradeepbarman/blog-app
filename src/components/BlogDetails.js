import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { NavLink } from 'react-router-dom'



const BlogDetails = ({post, index}) => {
  const {darkMode, posts } = useContext(AppContext)


  return (
    <div className={`${darkMode ? "text-slate-200" : "text-black"}`}> 

      <NavLink to={`/blog/${post.id}`}>
          <p className='font-bold text-lg mb-1'>{post.title}</p>
      </NavLink>

      <p className='text-sm'>
        By <span className='italic'>{post.author}</span> on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className='underline font-semibold'>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-sm mt-[5px] mb-[15px]'>
        Posted on {post.date}
      </p>
      <p>
        {post.content}
      </p>

      <div className='pt-2'>
        {
          post.tags.map((tag, index) => (
            <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index}>
                <span className={`${darkMode ? "text-purple-200" : "text-purple-700"} font-semibold text-xs mr-2 underline`}>
                    {`#${tag}`} 
                </span>
            </NavLink>
          ))
        }
      </div>
      
      {        
        (index !== posts.length - 1) &&
        <hr className={`mt-8 opacity-25 ${darkMode ? "border-white" : "border-black"}`} />
      }

    </div>


  )
}

export default BlogDetails
