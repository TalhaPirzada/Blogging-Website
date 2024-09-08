import React from 'react'

function ReadingList() {
  return (
    <div>
        <div className='font-semibold pt-10 pb-3'>Reading List</div>
        {
          true ? 
          (<div className='text-xs text-gray-500'>Click the + on any story to easily add it to you reading list or custom list that you can share.</div>)
          :
          (<div>Yo</div>)
          
        }
    </div>
  )
}

export default ReadingList