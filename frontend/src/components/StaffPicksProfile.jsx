import React from 'react'

function StaffPicksProfile() {
  return (
    <div className='flex flex-col gap-1 '>
        <div className='flex gap-1 items-center'>
            <img src="#" alt="Image" className='rounded-full max-h-5'></img>
            <a href='#' className='text-sm'>Username</a>
        </div>
        <a href='#' className='font-semibold'>This is the description of the user.</a>
    </div>
  )
}

export default StaffPicksProfile