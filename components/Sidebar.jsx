import React from 'react'
import {HomeIcon} from '@heroicons/react/outline'
import { HashtagIcon } from '@heroicons/react/outline'
import { BellIcon } from '@heroicons/react/outline'
import { BookmarkIcon } from '@heroicons/react/outline'
import { ViewListIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { MailIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useStateValue } from './StateProvider'

const Sidebar = () => {
    const [{ user }, dispatch] = useStateValue();
  return (
    <div className="text-gray-400 p-7 border-r border-gray-700 h-screen basis-1/5">
        <div className="space-y-2">
                    <Image src="http://logok.org/wp-content/uploads/2014/08/Twitter-logo-bird_logo_2012.png" alt="" width="80" height="60"/>
                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <HomeIcon className="h-7 w-7"/>
                    <p className="hidden md:block text-lg pl-3 items-center">Home</p>
                </button>

                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <BellIcon className="h-7 w-7"/>
                    <p className="text-lg hidden md:block pl-3 items-center">Notifications</p>
                </button>

                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <ViewListIcon className="h-7 w-7"/>
                    <p className="text-lg hidden md:block pl-3 items-center">Lists</p>
                </button>

                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <BookmarkIcon className="h-7 w-7"/>
                    <p className="text-lg hidden md:block pl-3 items-center">BookMark</p>
                </button>


                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <UserIcon className="h-7 w-7"/>
                    <p className="text-lg hidden md:block pl-3 items-center">Profile</p>
                </button>

                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <MailIcon className="h-7 w-7"/>
                    <p className="text-lg hidden md:block pl-3 items-center">Mail</p>
                </button>

                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <HashtagIcon className="h-7 w-7"/>
                    <p className="text-lg hidden md:block pl-3 items-center">Explore</p>
                </button>

                <button className="hidden md:block pl-20 pt-3 pb-3 pr-20 bg-[#1d9bf0] text-white rounded-full">Tweet</button>
                

               <div className="hover:bg-gray-900 rounded-full cursor-pointer">
                   <div className="mt-8 flex p-3">
                       <img style={{objectFit: 'contain'}}className="h-15 w-10 rounded-full mr-3" src={user.photoURL} alt="" />
                       <div>
                           <p className="hidden md:block text-white font-medium">{user.displayName}</p>
                           <p className="hidden md:block text-xs">{user.email}</p>
                       </div>
                   </div>
               </div>
            </div>
    </div>

  )
}

export default Sidebar