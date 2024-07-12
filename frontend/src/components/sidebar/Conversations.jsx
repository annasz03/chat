import React from 'react'
import Conversation from './Conversation'
import useConversations from '../../hooks/useConversations';

const Conversations = () => {
  const {loading, conversations} = useConversations();
  console.log("CONVERSATIONS:", conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length-1}
        />
      ))}
    </div>
  )
}

export default Conversations
