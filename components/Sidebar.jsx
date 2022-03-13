import React from 'react'
import {HomeIcon} from '@heroicons/react/outline'
import { HashtagIcon } from '@heroicons/react/outline'
import { BellIcon } from '@heroicons/react/outline'
import { BookmarkIcon } from '@heroicons/react/outline'
import { ViewListIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { MailIcon } from '@heroicons/react/outline'
const Sidebar = () => {
  return (
    <div className="text-gray-500 p-10 border-x-2 border-gray-900">
        <div className="space-y-4">
                <button className="flex items-center hover:text-white">
                    <HomeIcon className="h-8 w-8"/>
                    <p className="text-xl p-5 items-center">Home</p>
                </button>

                <button className="flex items-center hover:text-white">
                    <BellIcon className="h-8 w-8"/>
                    <p className="text-xl p-5 items-center">Notifications</p>
                </button>

                <button className="flex items-center hover:text-white">
                    <ViewListIcon className="h-8 w-8"/>
                    <p className="text-xl p-5 items-center">Lists</p>
                </button>

                <button className="flex items-center hover:text-white">
                    <BookmarkIcon className="h-8 w-8"/>
                    <p className="text-xl p-5 items-center">BookMark</p>
                </button>


                <button className="flex items-center hover:text-white">
                    <UserIcon className="h-8 w-8"/>
                    <p className="text-xl p-5 items-center">Profile</p>
                </button>

                <button className="flex items-center hover:text-white">
                    <MailIcon className="h-8 w-8"/>
                    <p className="text-xl p-5 items-center">Mail</p>
                </button>

                <button className="flex items-center hover:text-white">
                    <HashtagIcon className="h-8 w-8"/>
                    <p className="text-xl p-5 items-center">Explore</p>
                </button>

            </div>
    </div>

  )
}

export default Sidebar