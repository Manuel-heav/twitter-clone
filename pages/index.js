import Head from 'next/head'
import Image from 'next/image'
import Center from '../components/Center'
import InfoBar from '../components/InfoBar'
import Sidebar from '../components/Sidebar'
import { useStateValue } from '../components/StateProvider'
import Login from './login'

export default function Home() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="bg-black h-screen overflow-hidden">
      {!user ? (<Login />) : (
          <div>
          <Head>
            <title>Twitter clone</title>
          </Head>
          <main className="flex">
          <Sidebar />
          <Center />
          <InfoBar />
         </main>
          </div>     
      )}      
    </div>
  )
}
