import React from 'react'
import Image from 'next/image'
import { ChatAltIcon, HeartIcon, RefreshIcon, UploadIcon } from '@heroicons/react/outline'

const Post = ({tweet, imageUrl, profileUrl, username}) => {
  return (
    <div className='text-gray-400 '>
                   <div className="mt-8 flex p-3">
                       <img className="h-15 w-10 rounded-full mr-3" style={{objectFit: 'contain'}} src={profileUrl}alt="" />
                       <div>
                           <div>
                                <p className="text-white font-medium">{username}<span className='text-xs text-gray-400'>@manuelheav . 50m</span></p>
                                <p className="text-base">{tweet}</p>
                           </div>
                       </div>
                   </div>
                   <img className="border-gray-700 rounded-lg"src={imageUrl} alt="" width="500" height="500"/>
   
            <div className='flex justify-between mt-5 border-b border-t border-gray-700'>
                <ChatAltIcon className="text-[#1d9bf0] h-9 w-9 hover:bg-gray-900 rounded-full p-2 cursor-pointer"/>
                <HeartIcon className="text-[#1d9bf0] h-9 w-9 hover:bg-gray-900 rounded-full p-2 cursor-pointer"/>
                <RefreshIcon className="text-[#1d9bf0] h-9 w-9 hover:bg-gray-900 rounded-full p-2 cursor-pointer"/>
                <UploadIcon className="text-[#1d9bf0] h-9 w-9 hover:bg-gray-900 rounded-full p-2 cursor-pointer"/>
            </div>
    </div>
  )
}

export default Post