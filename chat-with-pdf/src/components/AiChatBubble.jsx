import React from 'react'
import aiProfile from '../assets/ai-profile.svg'

const AiChatBubble = ({text}) => {
  return (
    <div className='mt-6 w-[100%] flex gap-3 border-[1px] py-3 px-2 rounded-2xl shadow-md bg-white '>
        <div className='h-max w-max min-w-auto'>
            <img src={aiProfile} alt="" className='h-8 min-w-8 rounded-full'/>
        </div>
        <div className='flex flex-col'>
            <div className='font-bold text-md'>Ai</div>
            <p className='mt-1 text-[0.85rem]'>{text}</p>
        </div>
      
    </div>
  )
}

export default AiChatBubble
