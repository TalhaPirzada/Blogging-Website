import React from 'react'
import { Link } from 'react-router-dom'
function BlogOverview() {
  return (
    <>
    <Link to="/blogs"  >
    <div className='px-4 py-6 border-b-[1px] rounded-l border-b-gray-300 hover:bg-slate-200' >
        <div className='h-5 flex items-center gap-2 text-sm'>
            <img src="#" alt="Image"  className='rounded-full h-full'></img>
            <a href='#'>Username</a>
        </div>
        <div className='flex py-4'>
            <div>
                <div>
                    <a href="#" className='text-2xl font-bold'>What Happens When You Start Reading Everyday</a>
                </div>
                <div>
                    <a href='#' className='text-sm text-gray-500'>Think before you speak. Read before you think. - Fran Lebowitz</a>
                </div>
                
            </div>
            
            <div className='w-1/3'>
                <img src="#" alt="Image" className='rounded-sm h-full'></img>
            </div>
        </div>
        <div className='flex px-6 py-2 text-xs text-gray-500 gap-4'>
            <div>Mar12</div>
            <div>29K</div>
            <div>715</div>
        </div>
    </div>
    </Link>
    </>
  )
}

export default BlogOverview