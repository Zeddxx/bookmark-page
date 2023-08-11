import React, { useRef, useState } from 'react';

const Email = () => {
  const inputRef = useRef(null);
  const [error, setError] = useState('');

  function emailHandler() {
    const inputValue = inputRef.current.value;
    console.log(inputValue);

    if (!inputValue) {
      setError('Email cannot be empty');
    } else if (!isValidEmail(inputValue)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  return (
    <section className='min-h-auto py-10 w-full mt-32 px-4 flex justify-center items-center bg-soft-blue'>
      <div className="w-[30rem] flex flex-col justify-center gap-6 h-full">
        <div className="w-full">
          <h6 className='uppercase text-white text-center tracking-[.4rem] font-[400] text-sm'>35,000+ already joined</h6>
        </div>
        <div className="text-white font-normal text-4xl text-center">
          <h6>Stay up-to-date with what we’re doing</h6>
        </div>
        <div className="relative flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col w-full">
            <input
              ref={inputRef}
              className={`relative w-full border-2 border-transparent px-4 py-4 sm:px-4 sm:py-2 sm:pt-4 rounded-md outline-none text-very-dark-blue focus:outline-none focus:ring-0 peer ${error ? 'border-soft-red' : ''}`}
              type="email"
              id='email'
              placeholder=' '
            />
            {error && <p className='w-full -mt-2 z-10 lg:-mt-1 lg:w-full py-1 rounded-bl-md rounded-br-md px-4 bg-soft-red text-white text-sm italic'>{error}</p>}
          <label htmlFor="email" className='absolute -translate-x-2 scale-75 duration-150 peer-placeholder-shown:scale-100 text-grayish-blue peer-placeholder-shown:translate-y-4 sm:peer-placeholder-shown:translate-y-3 peer-placeholder-shown:translate-x-4 peer-focus:scale-75 peer-focus:translate-y-0 sm:peer-focus:translate-y-0 peer-focus:-translate-x-2 select-none cursor-text'>Enter your email address</label>
          </div>
          <button
            onClick={emailHandler}
            className='bg-soft-red w-full sm:w-1/3 grid-cols-1 text-white px-4 py-3 border border-soft-red duration-300 rounded-md hover:bg-gray-100 hover:text-soft-red'
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Email;
