import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import User from './User';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
    const router = useRouter()
    const searchInputRef = useRef(null)
    function search(event){
        event.preventDefault()
        const term = searchInputRef.current.value
        if(!term.trim()) return;
        router.push(`/search?term=${term.trim()}&searchType=`)
    }
    
    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
            <Image
                className='cursor-pointer' 
                onClick={()=>router.push("/")}
                src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"}
                width="120"
                objectFit='contain'
                height="40"
                alt='logo'
            />
            <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'>
                <input 
                    className='w-full focus:outline-none' 
                    type='text' 
                    defaultValue={router.query.term} 
                    ref={searchInputRef} 
                />
                <XIcon onClick={()=>(searchInputRef.current.value = '')} className='h-7 text-gray-500 cursor-pointer sm:mr-3' />
                <MicrophoneIcon className='h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3' />
                <SearchIcon className='h-6 hidden sm:inline-flex text-blue-500' />
                <button onClick={search} type='submit'></button>
            </form>
            <User className='ml-auto whitespace-nowrap'/>
            </div>
            <SearchHeaderOptions />
        </header>
    );
}