import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from "../components/Header"
import BlogDetails from "../components/BlogDetails"
import Spinner from "../components/Spinner"

const BlogPage = () => {

  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const {loading, setLoading, darkMode} = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`

    try {
      const res = await fetch(url);
      const data = await res.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } 
    catch (error) {
      console.log("error occurred");
      setBlog(null)
      setRelatedBlogs([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    if(blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  return (
    <div className={`flex flex-col ${darkMode ? "bg-[#111827]" : "bg-white"}`}>
      <Header />
      <div className={'w-11/12 max-w-[670px] py-8 pb-20 mt-[70px] flex flex-col gap-y-9 mx-auto'}>

        <div className='w-full'>
          <button onClick={() => navigate(-1)}
          className={`border px-4 py-1 rounded-md ${darkMode ? "text-slate-200" : "text-black"}`}>
            Back
          </button>
        </div>

        {
          loading ? (<Spinner />) : 
          blog ? 
          (<div>
            <BlogDetails post={blog} />
            <h2 className={`text-3xl font-bold py-4 pt-8 ${darkMode ? "text-slate-200" : "text-black"} underline`}>Related Blogs</h2>
            {
              relatedBlogs.map( (post) => (
                <div key={post.id} className='py-2'>
                 <BlogDetails post={post} />
                </div>
              ))
            }
          </div>) 
          : (
            <div>
              <p>No Blog Found</p>
            </div>
          )
        }

      </div>

    </div>
  )
}

export default BlogPage
