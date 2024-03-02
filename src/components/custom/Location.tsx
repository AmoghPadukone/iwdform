import React from 'react'
import { MapPin } from 'lucide-react'
export default function Location({LocationName,City,State}:any) {
  return (
    <div className='flex gap-3'>

        <div className='rounded-lg border-black p-3 border-[0.2px]'>
        <MapPin />
        </div>


        <div className='flex flex-col'>
        <span>{LocationName}</span>
        <span>{City},{State}</span>
        </div>
    </div>
  )
}
