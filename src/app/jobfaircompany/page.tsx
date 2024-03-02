import DateTime from '@/components/custom/DateTime'
import Location from '@/components/custom/Location'
import { JobFairForm } from '@/components/forms/JobFairForm'
import React from 'react'
export default function page() {
  return (
    <section className=' h-screen'>
      <div id="blob">
</div>
      <div className='border-2  border-black	border-solid	 flex m-16 p-4 glass'>

      <div className='w-full p-4 flex flex-col gap-2 items-center'>
            <img src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=1,quality=75,width=300,height=300/event-defaults/1-1/retro1.png" className='w-[80%] h-[40%] rounded-lg' alt="" />
            <h1 className='font-bold text-5xl'>IWD Job Fair</h1>

            <div>
                <DateTime smallMonth="MAR" date={23} month="March" year="2024" time="8:00 AM - 6:00 PM" />
                <Location LocationName="REVA UNIVERSITY" City="Bengaluru" State="Karnataka" />
            </div>

            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7206597773848!2d77.63203687431965!3d13.116874487211987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae191736187a37%3A0x3092096ba7fb4c9b!2sREVA%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1709369927676!5m2!1sen!2sin" className='max-w-[90%] rounded-lg'  loading="lazy" />
            </div>
        </div>

        <div className='w-full p-4'>
            <JobFairForm />
        </div>
      </div>
    </section>
  )
}
