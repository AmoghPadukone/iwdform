import { MapPin } from 'lucide-react'
import React from 'react'
export default function Location({LocationName,City,State}:any) {
  return (
    <div className='flex gap-3 p-3'>

        <div className='rounded-lg border-white p-3 border-[0.2px]'>
        <MapPin  />
        </div>


        <div className='flex flex-col'>
        <span>{LocationName}</span>
        <span>{City}, {State}</span>
        </div>
    </div>
  )
}
