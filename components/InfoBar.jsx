import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import Box from './Box'

const InfoBar = () => {
  return (
    <div className='hidden md:block text-gray-400 overflow-y-scroll scrollbar-hide'>
      <div className='flex mt-5 ml-10 rounded-full bg-[#202327] p-2'>
        <SearchIcon className='h-9 text-white items-center p-2'/>
        <input className="inline-flex flex ml-2 items-center bg-[#202327] flex-shrink outline-none"type="text" placeholder='Search Twitter' />
      </div>

      <div className='rounded-xl mt-5 ml-10 bg-[#202327] text-gray-400 p-7 h-1/2 overflow-y-scroll scrollbar-hide'>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>

     
    </div>
  )
}

export default InfoBar