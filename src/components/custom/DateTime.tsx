import React from 'react'

export default function DateTime({smallMonth,date,month,year,time}:any) {
  return (
    <div className='flex gap-3 items-center p-3'>

        <div className='rounded-lg flex flex-col  border-black border-[0.2px] px-1'>
            <div>
                {smallMonth}
            </div>

            <div className='font-bold flex items-center  w-full  '>
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
