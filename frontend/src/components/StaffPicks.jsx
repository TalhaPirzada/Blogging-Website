import React from 'react'
import StaffPicksProfile from './StaffPicksProfile'


function StaffPicks() {
  return (
    <div className='pt-10'>
        <div className='font-semibold'>Staff Picks</div>
        <div className='flex flex-col gap-3 pt-3 pb-6'>
            <StaffPicksProfile></StaffPicksProfile>
            <StaffPicksProfile></StaffPicksProfile>
            <StaffPicksProfile></StaffPicksProfile>
        </div>
        <a href='#' className="text-green-700 text-sm hover:text-green-800">See the full list</a>
    </div>
  )
}

export default StaffPicks