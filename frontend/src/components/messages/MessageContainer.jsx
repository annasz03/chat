import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti';

const MessageContainer = () => {
    const noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {noChatSelected ? <NoChatSelected /> :(<>
        <div className='bg-pink-500 px-4 py-2 mb-2'>
            <span className='lable-text text-pink-200'>To:</span>{" "}
            <span className='text-white font-bold'>Username</span>
        </div>
        <Messages />
        <MessageInput />
        </> ) }
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
            <p>Welcome!</p>
            <p>Select a chat to start!</p>
            <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};