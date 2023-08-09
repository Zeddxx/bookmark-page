import React from 'react'

const Email = () => {
  return (
    <section className='h-[50vh] w-full mt-32 px-4 flex justify-center items-center bg-soft-blue'>
      <div className="w-[30rem] flex flex-col justify-center gap-6 h-full">
            <div className="w-full">
                <h6 className='uppercase text-white text-center tracking-[.4rem] font-[400] text-sm'>35,000+ already joined</h6>
            </div>
            <div className="text-white font-normal text-4xl text-center">
              <h6>Stay up-to-date with what we’re doing</h6>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
              className='relative px-4 py-4 sm:px-4 sm:py-2 w-full rounded-md outline-none text-very-dark-blue focus:outline-none focus:ring-0 peer'
              type="email" 
              id='email' 
              placeholder=' '/>
              <label htmlFor="email" className='absolute transform sm:-translate-y-0 -translate-x-2 scale-75 duration-150 peer-placeholder-shown:scale-100 text-grayish-blue peer-placeholder-shown:translate-y-4 sm:peer-placeholder-shown:translate-y-3 peer-placeholder-shown:translate-x-4 peer-focus:scale-75 peer-focus:translate-y-0 peer-focus:-translate-x-2 select-none cursor-text'>Enter your email address</label>
              <button className='bg-soft-red w-full sm:w-1/3 grid-cols-1 text-white px-4 py-3 border border-soft-red duration-300 rounded-md hover:bg-gray-100 hover:text-soft-red'>Contact Us</button>
            </div>
      </div>
    </section>
  )
}

export default Email
