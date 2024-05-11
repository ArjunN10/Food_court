import React from 'react'

function CostomButton({content}) {
  return (
    <button className='text-white hover:bg-blue-500 bg-black border w-24 py-2 border-blue-500'>{content}</button >
  )
}

export default CostomButton