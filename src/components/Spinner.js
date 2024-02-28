import React, { useContext } from 'react'
import {AppContext} from "../context/AppContext"

const Spinner = () => {
  const {darkMode} = useContext(AppContext);

  return (
    <div className='flex flex-col gap-y-6 justify-center items-center h-[70vh]'>
      <div className='spinner'></div>
      <p className={darkMode ? "text-white" : "text-black"}>Loading...</p>
    </div>
  )
}

export default Spinner
