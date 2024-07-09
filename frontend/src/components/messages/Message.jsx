import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
    <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img src="https://static-00.iconduck.com/assets.00/avatar-icon-512x512-gu21ei4u.png" alt="lol" />
        </div>
    </div>
    <div className={`chat-bubble text-white bg-pink-400`}>Hello</div>
    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>11:11</div>
    </div>
  )
}

export default Message
