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
    <div className="text-gray-400 p-7 border-x-2 border-gray-900">
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

            </div>
    </div>

  )
}

export default Sidebar