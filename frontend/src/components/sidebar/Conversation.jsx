import React from 'react'

const Conversation = () => {
  return <>
    <div className='flex gap-2 items-center hover:bg-pink-400 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://static-00.iconduck.com/assets.00/avatar-icon-512x512-gu21ei4u.png" alt="user avatar" />
            </div>
        </div>
    <div className='flex flex-col flex-1'>
        <div className='flex  gap-3 justify-between'>
            <p className='font-bold text-white'>
                Username
            </p>
            <span className='text-xl'>
                emoji
            </span>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'>
        
    </div>
    </div>
  </>
}

export default Conversation
