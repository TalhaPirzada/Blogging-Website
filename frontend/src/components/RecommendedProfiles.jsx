import React from 'react'
function RecommendedProfiles() {
  return (
    <div className='flex items-center'>
        <img src="#" alt="Image" class='rounded-full max-h-8 '></img>
        <div class='pl-3 w-9/12 flex flex-col'>
            <a href='#' class='font-semibold'>Username</a>
            <a href='#' class='text-sm text-gray-500'>This is the description provided by the user for the account.</a>
        </div>
        <button class='text-slate-700 border-black border-[1px] rounded-full px-3 h-7 text-sm hover:text-slate-950'>Follow</button>
    </div>
  )
}

export default RecommendedProfiles