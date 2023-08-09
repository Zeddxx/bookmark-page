import React, { useState} from 'react'
import contentImg1 from '../assets/images/illustration-features-tab-1.svg'
import contentImg2 from '../assets/images/illustration-features-tab-2.svg'
import contentImg3 from '../assets/images/illustration-features-tab-3.svg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Feature = () => {

const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (index) => {
  setActiveTab(index);
}
 
const tabs = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'];
 
const handleCarouselSlide = (index) => {
  setActiveTab(index);
}

  return (
    <section className='mt-10 max-w-7xl gap-6 px-4 mx-auto flex flex-col items-center h-auto'>
      {/* Heading Feature's */}
      <div className="text-center w-full flex flex-col gap-5 lg:w-1/2">
        <h2 className='text-[2rem] font-[700]'>Features</h2>
        <p className='text-center text-grayish-blue text-[1rem] lg:text-[1.1rem] leading-6'>Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
      {/* Tabs container */}
      <div className="flex w-full justify-center mb-10">
        {/* actives tags */}
        <div className="tags w-full  flex flex-col items-center lg:flex-row lg:justify-between lg:w-3/4 lg:border-b-2">
          {tabs.map((tab, index) => (
            <span key={index} onClick={() => handleTabClick(index)}
            className={`tag py-4 cursor-pointer lg:py-6 lg:px-12 w-full lg:w-auto text-center relative border-b-2 lg:border-none duration-500 active:text-soft-red text-grayish-blue lg:hover:text-soft-red ${activeTab === index ? 'activeClass' : ''}`}>{tab}</span>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="w-full overflow-hidden">
        <Carousel showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} selectedItem={activeTab} onChange={handleCarouselSlide}>
          {/* slide 1 */}
          <div className="slides h-auto lg:3/4 flex flex-col lg:flex-row items-center w-auto gap-20">
            {/* <span className='absolute -left-2/3 -bottom-28 bg-soft-blue h-4/5 w-full rounded-full'></span> */}
            <div className="h-full max-w-xl lg:w-1/2  flex items-center">
              <img className='z-20 object-contain' src={contentImg1} alt="Feature Illustration First Slide" />
            </div>
            <div className="h-full w-full lg:w-1/2 flex items-center">
              <div className="w-full flex flex-col items-center lg:items-start gap-3 lg:gap-7">
                <h3 className='text-3xl lg:text-4xl font-[500] '>Bookmark in one click</h3>
                <p className='w-auto text-center lg:text-start text-grayish-blue leading-relaxed'>Organize your bookmarks however you like. Our simple drag-and-drop interface
                gives you complete control over how you manage your favourite sites.</p>
                <button className='bg-soft-blue px-5 py-3 text-white rounded-md hidden lg:flex border duration-300 hover:border-soft-blue hover:bg-transparent hover:text-soft-blue'>More Info</button>
              </div>
            </div>
          </div>
          {/* slides 2 */}
          <div className="slides h-auto lg:3/4 flex flex-col lg:flex-row items-center w-full gap-20">
            <div className="h-full max-w-xl lg:w-1/2  flex items-center">
              <img className='z-20' src={contentImg2} alt="Feature Illustration second slide" />
            </div>
            <div className="h-full w-full lg:w-1/2 flex items-center">
              <div className="w-full flex flex-col items-center lg:items-start gap-7">
                <h3 className='text-4xl font-[500]'>Intelligent search</h3>
                <p className='text-center lg:text-start text-grayish-blue leading-relaxed'>Our powerful search feature will help you find saved sites in no time at all. 
          No need to trawl through all of your bookmarks.</p>
                <button className='bg-soft-blue px-5 py-3 text-white rounded-md hidden lg:flex border duration-300 hover:border-soft-blue hover:bg-transparent hover:text-soft-blue'>More Info</button>
              </div>
            </div>
          </div>
          {/* slides 3 */}
          <div className="slides h-auto lg:3/4 flex flex-col lg:flex-row items-center w-full gap-20">
            <div className="h-full max-w-xl lg:w-1/2  flex items-center">
              <img src={contentImg3} alt="Feature Illustration third slide" />
            </div>
            <div className="h-full w-full lg:w-1/2 flex items-center">
              <div className="w-full flex flex-col items-center lg:items-start gap-7">
                <h3 className='text-4xl font-[500]'>Share your bookmarks</h3>
                <p className='text-center lg:text-start text-grayish-blue leading-relaxed'>Easily share your bookmarks and collections with others. Create a shareable 
          link that you can send at the click of a button.</p>
          <button className='bg-soft-blue px-5 py-3 text-white rounded-md hidden lg:flex border duration-300 hover:border-soft-blue hover:bg-transparent hover:text-soft-blue'>More Info</button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Feature
