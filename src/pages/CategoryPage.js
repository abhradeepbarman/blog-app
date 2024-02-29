import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import Pagination from "../components/Pagination" 
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let category = location.pathname.split("/").at(-1);
  const {darkMode} = useContext(AppContext)

  return (
    <div className='flex flex-col '>
      <Header/>

      <div className={`w-full ${darkMode ? "bg-[#111827]" : "bg-white"}`}>
        <div className={`${darkMode ? "text-slate-200" : "text-black"} w-11/12 max-w-[670px] mt-[100px] mx-auto flex gap-x-5 items-center`}> 
          <button onClick={() => navigate(-1)}
          className='border-slate-300 border-2  px-4 py-1 rounded-lg'>
            Back
          </button>

          <h2 className='font-bold text-xl'>
            Blogs on {" "}
            <span className='underline text-purple-700'>{category}</span>
          </h2>

        </div>
      </div>

      <Blogs />
      <Pagination />

    </div>
  )
}

export default CategoryPage
