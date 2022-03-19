import React from 'react'

const Post = () => {
  return (
    <div className='text-gray-400 '>
                   <div className="mt-8 flex p-3">
                       <img className="h-15 w-10 rounded-full mr-3" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F05%2F24%2F770117_people_512x512.png&f=1&nofb=1" alt="" />
                       <div>
                           <div>
                                <p className="text-white font-medium">Manuael Heav <span className='text-xs text-gray-400'>@manuelheav . 50m</span></p>
                                <p className="text-base">That is awesome</p>
                           </div>
                       </div>
                   </div>
                   <img className="ml-14 border-gray-700 rounded-lg"src="https://thechive.com/wp-content/uploads/2022/03/sad.jpg?resize=480,250" alt="" />
    </div>
  )
}

export default Post