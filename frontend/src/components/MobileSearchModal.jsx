"use client"

import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const MobileSearchModal = ({setShowModal}) => {
    const [serachText, setSearchText] = useState("");
    const dataInp = (e)=>{
        console.log(e.target.value)
        setSearchText(e.target.value);
    }
  return (
    <div className='flex flex-col fixed top-0 left-0 w-full h-full bg-black p-5'>
        <div className='flex items-center gap-3 w-full'>
            <input type='text' className='w-full p-2 rounded-full' placeholder='Search...' onChange={(e)=>dataInp(e)}/>
            <IoClose color='white' onClick={()=> setShowModal(false)}/>
        </div>
        {serachText && <div className='text-blue-600'>
            <p>{serachText}</p>
            <p>{serachText}</p>
            <p>{serachText}</p>
            <p>{serachText}</p>
        </div>}
      
    </div>
  )
}

export default MobileSearchModal
