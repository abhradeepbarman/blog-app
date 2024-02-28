import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page, totalPages, handlePageChange} = useContext(AppContext);

  return (
    <div className='fixed bottom-0 w-full py-2 bg-white border  shadow-md' >
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
