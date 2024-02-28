import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";


const Header = () => {

  const {darkMode, setDarkMode} = useContext(AppContext);

  return (
    <div className={`w-full shadow-md 
    ${!darkMode ? ("bg-white") : ("bg-[#1F2937] text-white") }  flex justify-between items-center pr-12 fixed`}>
        <header className='text-center py-4 ml-auto'>
          <h1 className='text-3xl font-bold uppercase'>Tech Blog</h1>
        </header>

        <div className='ml-auto'>
          {
            darkMode 
            ? (<IoMdSunny onClick={() => setDarkMode(!darkMode)}
            fontSize={25} className='cursor-pointer text-white' />)
            : (<FaMoon onClick={() => setDarkMode(!darkMode)} fontSize={25}
            className='cursor-pointer text-purple-600'/>)
          }
        </div>
    </div>
  )
}

export default Header
