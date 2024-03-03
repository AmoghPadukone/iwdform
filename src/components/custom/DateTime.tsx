import React from 'react'

export default function DateTime({smallMonth,date,month,year,time}:any) {
  return (
    <div className='flex gap-3 items-center p-3'>

        <div className='rounded-lg flex flex-col  '>
            <div className='bg-[#fc4f4f] rounded-b-none	 rounded w-full px-[8px]'>
                {smallMonth}
            </div>

            <div className='font-bold  border-white border-t-0	border-[0.2px] rounded-lg rounded-t-none  w-full text-center  '>
                {date}
            </div>
        </div>

        <div className='h-full'>
        <div>{date} {month} {year}</div>
        <div className='m-0'>{time}</div>
        </div>
    </div>
  )
}
