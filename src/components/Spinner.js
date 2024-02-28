import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col gap-y-6 justify-center items-center h-[70vh]'>
      <div className='spinner'></div>
      <p>Loading...</p>
    </div>
  )
}

export default Spinner
