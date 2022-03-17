import React from 'react'
import {HomeIcon} from '@heroicons/react/outline'
import { HashtagIcon } from '@heroicons/react/outline'
import { BellIcon } from '@heroicons/react/outline'
import { BookmarkIcon } from '@heroicons/react/outline'
import { ViewListIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { MailIcon } from '@heroicons/react/outline'
import Image from 'next/image'
const Sidebar = () => {
  return (
    <div className="text-gray-400 p-7 border-r border-gray-700 h-screen">
        <div className="space-y-2">
                    <Image src="http://logok.org/wp-content/uploads/2014/08/Twitter-logo-bird_logo_2012.png" alt="" width="80" height="60"/>
                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <HomeIcon className="h-7 w-7"/>
                    <p className="text-lg pl-3 items-center">Home</p>
                </button>

                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <BellIcon className="h-7 w-7"/>
                    <p className="text-lg pl-3 items-center">Notifications</p>
                </button>

                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <ViewListIcon className="h-7 w-7"/>
                    <p className="text-lg pl-3 items-center">Lists</p>
                </button>

                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <BookmarkIcon className="h-7 w-7"/>
                    <p className="text-lg pl-3 items-center">BookMark</p>
                </button>


                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <UserIcon className="h-7 w-7"/>
                    <p className="text-lg pl-3 items-center">Profile</p>
                </button>

                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <MailIcon className="h-7 w-7"/>
                    <p className="text-lg pl-3 items-center">Mail</p>
                </button>

                <button className="flex items-center hover:bg-gray-900 rounded-full p-2">
                    <HashtagIcon className="h-7 w-7"/>
                    <p className="text-lg pl-3 items-center">Explore</p>
                </button>

                <button className="pl-20 pt-3 pb-3 pr-20 bg-[#1d9bf0] text-white rounded-full">Tweet</button>
                

               <div className="hover:bg-gray-900 rounded-full cursor-pointer">
                   <div className="mt-8 flex p-3">
                       <img className="h-10 w-10 rounded-full mr-3" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F05%2F24%2F770117_people_512x512.png&f=1&nofb=1" alt="" />
                       <div>
                           <p className="text-white font-medium">Manuael Heav</p>
                           <p className="text-xs">@Manuael</p>
                       </div>
                   </div>
               </div>
            </div>
    </div>

  )
}

export default Sidebar