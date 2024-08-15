import React from 'react'
import { testimonials } from '../constants'

const Testimonial = () => {
  return (
    <div id='Testimonials' className="mt-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl
            text-center my-8 tracking-wide">
            What People are Saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((item, index) => (
                <div className="w-full sm:w-1/2 lg:w-1/3 
                    p-2" key={index}>
                    <div className="bg-neutral rounded-mg p-6 text-md border
                        border-neutral-800 font-thin">
                        <p>{item.text}</p>
                        <div className=" flex mt-8 items-center">
                            <img className='w-12 h-12 mr-8 rounded-full border
                                border-neutral-300' src={item.image} alt='user img' />
                            <div>
                                <h6>{item.user}</h6>
                                <span className='text-sm font-normal italic 
                                    text-neutral-600'>
                                    {item.company}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                    
            ))}
        </div>
    </div>
  )
}

export default Testimonial