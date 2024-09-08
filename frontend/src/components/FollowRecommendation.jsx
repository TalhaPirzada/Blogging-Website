import React from 'react'
import RecommendedProfiles from './RecommendedProfiles'

function FollowRecommendation() {
  return (
    <div className='pt-10'>
        <div className='font-semibold'>Who to follow</div>
        <div className="flex flex-col gap-2 pt-3 pb-6">
            <RecommendedProfiles></RecommendedProfiles>
            <RecommendedProfiles></RecommendedProfiles>
            <RecommendedProfiles></RecommendedProfiles>
        </div>
        <a href='#' className="text-green-700 text-sm hover:text-green-800">See more Recommendations</a>
    </div>
  )
}

export default FollowRecommendation