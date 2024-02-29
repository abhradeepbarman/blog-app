import React, { useContext } from 'react'
import {AppContext} from "../context/AppContext"
import Spinner from "./Spinner"
import BlogDetails from './BlogDetails'

const Blogs = () => {

  //consume
  const {loading, posts, darkMode} = useContext(AppContext);

  return (
      <div className={`w-full ${darkMode ? "bg-[#111827]" : "bg-white"} min-h-screen`}>
        <div className={'w-11/12 max-w-[670px] py-8 pb-20 flex flex-col gap-y-9 mx-auto '}>

          {
            loading ? (<Spinner />) 
            : ( posts.length  === 0 ? (<div>No Post Found</div>) 
              : (
                posts.map((post, index) => (
                    <BlogDetails  post={post} index={index} key={index}/>
                )
              )
              )
            )
          }
            
          </div>
      </div>
  )
}

export default Blogs
