import React from 'react'
import RecommendedTopics from './RecommendedTopics'
import FollowRecommendation from './FollowRecommendation'
import StaffPicks from './StaffPicks'
import ReadingList from './ReadingList'

function Sidebar() {
  return (
    <div className="w-full flex flex-col pl-12">
        <StaffPicks></StaffPicks>
        <RecommendedTopics></RecommendedTopics>
        <FollowRecommendation></FollowRecommendation>
        <ReadingList></ReadingList>
    </div>
  )
}

export default Sidebar