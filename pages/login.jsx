import Image from 'next/image'
import React from 'react'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../components/Firebase'
import { useRouter } from 'next/router';
import { actionTypes } from '../components/reducer'
import {useState } from 'react'
import {useStateValue} from '../components/StateProvider'

const Login = () => {
  const [{}, dispatch] = useStateValue()

  const provider = new GoogleAuthProvider(); 
  const router = useRouter()

  const login = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
        router.push('/')
    })
    .catch((err)=> alert(err.message));
 };
  



  return (
    <div className="bg-black flex overflow-hidden h-screen">
        <div className="hidden md:block h-screen">
            <img src={`new.png`} alt="" className='w-100' />
        </div>


        <div>
          <Image src="http://logok.org/wp-content/uploads/2014/08/Twitter-logo-bird_logo_2012.png" alt="" width="100" height="80"/>       
          <h1 className="text-white text-[3.5rem] mt-10 ml-10 font-black">Happening now</h1>
          <h1 className="text-white text-[2.5rem] ml-10 font-bold">Join Twitter today.</h1>

          <div className="bg-white rounded-full cursor-pointer md:ml-10 mb-100" onClick={login}>
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

