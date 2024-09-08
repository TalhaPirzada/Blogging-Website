import React from 'react'

function RecommendationBubbles({type}) {
  return (
    <div className="bg-stone-100 rounded-xl text-center px-4 py-1 text-sm text-slate-950 hover:cursor-pointer">{type}</div>
  )
}

export default RecommendationBubbles