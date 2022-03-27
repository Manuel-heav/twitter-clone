import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className="bg-black flex overflow-hidden h-screen">
        <div className="hidden md:block h-screen">
            <img src={`new.png`} alt="" className='w-100' />
        </div>


        <div>
          <Image src="http://logok.org/wp-content/uploads/2014/08/Twitter-logo-bird_logo_2012.png" alt="" width="100" height="80"/>       
          <h1 className="text-white text-[3.5rem] mt-10 ml-10 font-black">Happening now</h1>
          <h1 className="text-white text-[2.5rem] ml-10 font-bold">Join Twitter today.</h1>

          <div className="bg-white rounded-full cursor-pointer md:ml-10 mb-100">
                   <div className="mt-20 flex p-3 items-center">
                         <img className="h-15 w-10 rounded-full mr-3" src="https://pluspng.com/img-png/google-logo-png-open-2000.png" alt="" />
                       <div>
                           <p className="font-medium">Sign In with Google</p>
                       </div>
                   </div>
               </div>
        </div>

    </div>
  )
}

export default Login