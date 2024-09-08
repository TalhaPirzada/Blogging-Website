import React from 'react'
import RecommendationBubbles from './RecommendationBubbles'

function RecommendedTopics() {
  return (
    <div className="w-full pt-10">
        <div className="font-semibold">Recommended Topics</div>
        <div className="flex flex-wrap gap-2 pt-3 pb-6">
            <RecommendationBubbles type={"History"}></RecommendationBubbles>
            <RecommendationBubbles type={"Science"}></RecommendationBubbles>
            <RecommendationBubbles type={"AI"}></RecommendationBubbles>
            <RecommendationBubbles type={"Communication"}></RecommendationBubbles>
            <RecommendationBubbles type={"News"}></RecommendationBubbles>
            <RecommendationBubbles type={"Games"}></RecommendationBubbles>
        </div>
        <a href='#' className="text-green-700 text-sm hover:text-green-800">See more Topics</a>
    </div>
  )
}

export default RecommendedTopics