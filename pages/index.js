import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">

      <Head>
        <title>Twitter clone</title>
      </Head>
      <Sidebar />
    </div>
  )
}
