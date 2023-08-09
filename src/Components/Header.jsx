import contentImg from '../assets/images/illustration-hero.svg'

const Header = () => {
  return (
    <header className="h-full px-4 max-w-7xl flex flex-col-reverse mx-auto gap-10 lg:gap-0 lg:flex-row lg:h-5/6">
      {/* Content Div */}
      <div className="h-1/2 w-full lg:h-full lg:w-1/2 flex flex-col gap-6 justify-center text-center lg:text-start">
        <h1 className="text-very-dark-blue text-3xl lg:text-5xl font-semibold">A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.</p>
        {/* Button Div */}
        <div className="flex justify-center gap-5 lg:justify-start">
          <button className="px-4 lg:px-5 py-3 bg-soft-blue shadow-lg rounded-md text-gray-100 border-2 border-soft-blue active:bg-transparent active:text-soft-blue lg:hover:bg-transparent lg:hover:text-soft-blue duration-500">Get it on Chrome</button>
          <button className="px-4 lg:px-5 py-3 bg-gray-200 shadow-lg rounded-md text-very-dark-blue border-2 active:bg-transparent active:border-very-dark-blue lg:hover:border-very-dark-blue lg:hover:bg-transparent duration-500">Get it on Firefox</button>
        </div>
      </div>
      {/* Content Img */}
      <div className="relative h-1/2 w-full flex items-center justify-center lg:h-full lg:w-1/2 ">
        <img className='z-10' src={contentImg} alt="Hero Image" />
        <span className='absolute h-[12rem] w-[40rem] -right-[22rem] sm:h-3/4 sm:w-full md:w-full md:h-3/4 bottom-0 md:-right-[15rem] lg:h-[24rem] lg:w-full lg:-right-1/2 lg:bottom-8 rounded-full bg-soft-blue'></span>
      </div>
    </header>
  )
}

export default Header
