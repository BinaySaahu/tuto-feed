import Image from 'next/image'
import React from 'react';
import thumbnail from '../../../public/thumbnail.jpg'
import Link from 'next/link';

const Video = () => {
  return (
    <div className='flex flex-col w-full rounded-xl text-[#3A3A3C]'>

        <div className='w-full rounded-xl'>
            <Image src={thumbnail} alt='Thumbnail' className='rounded-xl'/>
        </div>
        <div className='w-full py-5 flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
                <Image src={thumbnail} alt='Channel-logo' className='w-8 h-8 rounded-full'/>
                <p className='text-lg'>Video Title</p>
            </div>
            <Link href='/' className='text-sm hover:text-[#2A2F5B]'>Channel Name</Link>
            <div className='flex items-center gap-2'>
                <p className='text-xs'>20 Views</p>
                <div className='bg-gray-300 rounded-full w-1 h-1'></div>
                <p className='text-xs'>1 hr ago</p>
            </div>
        </div>
      
    </div>
  )
}

export default Video
