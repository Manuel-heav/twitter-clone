import Head from 'next/head'
import Image from 'next/image'
import Center from '../components/Center'
import InfoBar from '../components/InfoBar'
import Sidebar from '../components/Sidebar'
import { StateProvider } from '../components/StateProvider';
import reducer, { initialState } from '../components/reducer';


export default function Home() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Twitter clone</title>
      </Head>
      <main className="flex">
      <Sidebar />
      <Center />
      <InfoBar />
     </main>
    </div>
    </StateProvider>
  )
}
