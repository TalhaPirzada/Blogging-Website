import React from 'react'
import BlogOverview from './BlogOverview'

function MainPage() {
  return (
    <div className="flex flex-col px-4 md:px-24">
        <div className="border-b-[1px] border-gray-300 flex gap-4 text-sm text-gray-700">
            <button className='p-3 hover:text-black border-b-black border-b-[1px]'>+</button>
            <button className='p-3 hover:text-black'>For you</button>
            <button className='p-3 hover:text-black'>Following</button>
            <button className='p-3 hover:text-black'>Python</button>
            <button className='p-3 hover:text-black'>Self Improvement</button>
            <button className='p-3 hover:text-black'>Technology</button>
        </div>
        <BlogOverview></BlogOverview>
        <BlogOverview></BlogOverview>
        <BlogOverview></BlogOverview>
        <BlogOverview></BlogOverview>
        <BlogOverview></BlogOverview>
        <BlogOverview></BlogOverview>
        <BlogOverview></BlogOverview>
    </div>
  )
}

export default MainPage