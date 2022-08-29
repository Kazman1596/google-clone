import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import {SearchIcon, MicrophoneIcon} from "@heroicons/react/solid"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className='flex flex-col items-center mt-40'>
        <Image 
          src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"}
          width="300"
          objectFit='cover'
          height="100"
          alt='logo'
        />
        <div className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 text-gray-500 mr-3' />
          <input type="text" className='flex-grow focus:outline-none'/>
          <MicrophoneIcon className='h-5' />
        </div>
        <div className='flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center'>
          <button className='btn'>Google Search</button>
          <button className='btn'>I'm feeling lucky</button>
        </div>
      </form>

      {/* Footer */}

    </div>
  )
}