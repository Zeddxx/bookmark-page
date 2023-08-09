import React from 'react'
import Questions from './Questions'

const Faq = () => {
  return (
    <section className='max-w-7xl mt-36 mx-auto px-4 h-auto gap-10 flex items-center flex-col'>
      {/* Title Divs */}
      <div className="flex max-w-xl flex-col gap-4">
        <h6 className='text-2xl font-[500] text-center'>Frequently Asked Questions</h6>
        <p className='text-grayish-blue text-center'>Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.</p>
      </div>
      <Questions />
      <button className='bg-soft-blue text-white px-8 py-3 rounded-md border border-soft-blue hover:bg-transparent hover:text-soft-blue duration-300'>More Info</button>
    </section>
  )
}

export default Faq
