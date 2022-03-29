import { PhotographIcon, SparklesIcon, ClipboardListIcon, EmojiHappyIcon, LinkIcon  } from '@heroicons/react/outline'
import React from 'react'
// import { useState } from 'react/cjs/react.development'
// import { useEffect } from 'react/cjs/react.production.min'
import {useState, useEffect} from 'react'
import { db, storage } from './Firebase'
import {useStateValue} from './StateProvider'
import Post from './Post'
const Center = () => {
  const [{ user }, dispatch] = useStateValue();

  const [tweet, setTweet] = useState("")
  const [comments, setComments] = useState([])
  const [image, setImage] = useState(null)
  const [progress, setProgress] = useState(0)
  const [ posts, setPosts] =  useState([])


  const handleChange = (e) => {
    if(e.target.value[0]){
      setImage(e.target.files[0])
    }
  }




  const handleUpload = () =>{
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            // Progress function
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes * 100)
            );
            setProgress(progress);
        },
        ((err) => {
            console.log(err);
            alert(err)
        }),
        () => {
            storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then(url => {
                db.collection("tweets").add({
                    // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    tweet: tweet,
                    imageUrl: url,
                    username: user.displayName,
                    profileurl: user.photoURL,
                    comments: comments
                });
              })
        }

    )
}

useEffect(()=>{
  db.collection('tweets').onSnapshot(snapshot => {
    setPosts(snapshot.docs.map(doc =>({
      id: doc.id,
      post: doc.data()
    })))
  })
}, [])

  return (
    <div className="text-gray-400 p-7 md:border-r border-gray-700 h-screen md:basis-1/2 overflow-y-scroll scrollbar-hide">
      <div className='flex justify-between items-center'>
        <p className="text-white text-lg">Home</p>
        <SparklesIcon className="hidden md:block h-10 w-10 hover:bg-gray-900 rounded-full p-2 cursor-pointer"/>
      </div>

      <div className='flex mt-5'>
        <img className="h-15 w-10 rounded-full mr-3" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F05%2F24%2F770117_people_512x512.png&f=1&nofb=1" alt="" />
        <input onChange={e=>setTweet(e.target.value)} type="text" className='bg-transparent outline-none text-lg' placeholder="What's happening?" />
      </div>

    <div className='md:flex items-center justify-between mt-7 border-b border-gray-700 pb-2'>
      <div className='flex items-center md:ml-10'>
        <input type="file" onChange={handleChange}/><span className="text-sky-400/100 ">{image != null ? (progress === 100 ? "Done" : progress + "%") : ""}</span>
      </div>
      <button onClick={handleUpload} className="mt-5 md:mt-0 pl-16 pt-2 pb-2 pr-16 bg-[#1d9bf0] text-white rounded-full">Tweet</button>
    </div>

    {posts.map((post) => (
      <Post key={post.id} imageUrl={post.post.imageUrl} tweet={post.post.tweet} profileUrl={user.photoURL}/>
    ))}

   
    
    </div>
  )
      }

export default Center