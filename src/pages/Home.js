import React from 'react'
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import Pagination from "../components/Pagination"

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='mt-[65px]'>
        <Blogs />
        <Pagination />
      </div>
    </div>
  )
}

export default Home
