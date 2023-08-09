import React from 'react'
import chromeImg from '../assets/images/logo-chrome.svg'
import firefoxImg from '../assets/images/logo-firefox.svg'
import operaImg from '../assets/images/logo-opera.svg'
import dots from '../assets/images/bg-dots.svg'

const Extension = () => {
  return (
    <div className='h-auto max-w-7xl px-4 mx-auto flex flex-col items-center mt-8 mb-8'>
      {/* main title div */}
      <div className="flex flex-col gap-3 text-center w-full lg:w-1/2">
        <h4 className='text-2xl font-[500]'>Download the extension</h4>
        <p className='text-grayish-blue'>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize.</p>
      </div>
      {/* extensions divs */}
      <div className="flex flex-col lg:flex-row gap-8 w-auto justify-center mt-8 h-auto">
        {/* box-1 */}
        <div className="px-2 pb-4 pt-8 bg-gray-100 shadow-xl rounded-xl flex flex-col items-center gap-3">
            {/* container logo */}
            <div className="flex flex-col items-center">
                <img src={chromeImg} alt="The Chrome image" />
                <h5 className='text-lg font-[500] mt-6'>Add to Chrome</h5>
                <p className='text-grayish-blue mb-6'>Minimum version 62</p>
            </div>
            {/* dots line */}
            <div className=""><img src={dots} alt="Sepration Dots" /></div>
            <button className='bg-soft-blue px-8 py-3 text-center text-white rounded mt-3 shadow-xl border border-soft-blue hover:bg-transparent hover:text-soft-blue duration-300'>Add & Install Extension</button>
        </div>
        {/* Box 2 */}
        <div className="px-2 py-8 lg:translate-y-12 bg-gray-100 shadow-xl rounded-xl flex flex-col items-center gap-3 ">
            {/* container logo */}
            <div className="flex flex-col items-center">
                <img src={firefoxImg} alt="The Chrome image" />
                <h5 className='text-lg font-[500] mt-6'>Add to Firefox</h5>
                <p className='text-grayish-blue mb-6'>Minimum version 55</p>
            </div>
            {/* dots line */}
            <div className=""><img src={dots} alt="Sepration Dots" /></div>
            <button className='bg-soft-blue px-8 py-3 text-center text-white rounded mt-3 shadow-xl border border-soft-blue hover:bg-transparent hover:text-soft-blue duration-300'>Add & Install Extension</button>
        </div>
        {/* Box 3 */}
        <div className="px-2 py-8 lg:translate-y-24 bg-gray-100 shadow-xl rounded-xl flex flex-col items-center gap-3 ">
            {/* container logo */}
            <div className="flex flex-col items-center">
                <img src={operaImg} alt="The Chrome image" />
                <h5 className='text-lg font-[500] mt-6'>Add to Opera</h5>
                <p className='text-grayish-blue mb-6'>Minimum version 46</p>
            </div>
            {/* dots line */}
            <div className=""><img src={dots} alt="Sepration Dots" /></div>
            <button className='bg-soft-blue px-8 py-3 text-center text-white rounded mt-3 shadow-xl border border-soft-blue hover:bg-transparent hover:text-soft-blue duration-300'>Add & Install Extension</button>
        </div>
      </div>
    </div>
  )
}

export default Extension;
