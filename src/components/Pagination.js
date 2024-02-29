import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page, totalPages, handlePageChange, darkMode} = useContext(AppContext);

  return (
    <div className={`fixed bottom-0 py-3 w-full ${darkMode ? "bg-[#1F2937] text-white" : "bg-white shadow-black shadow-lg"} `} >
      <div className='w-11/12 max-w-[670px] mx-auto flex justify-between items-center'>
        <div className='flex gap-x-3'>
          { page > 1 && 
            (<button onClick={() => handlePageChange(page-1)}
            className='rounded-md border px-4 py-2'>
              Previous
            </button>)
          }

          { page < totalPages &&
            (<button onClick={() => handlePageChange(page+1)}
            className='rounded-md border px-4 py-2'>
              Next
            </button>)
          }
        </div>

        <p className='font-bold text-sm'>
          Page {page} of {totalPages}
        </p>
        </div>
    </div>
  )
}

export default Pagination
