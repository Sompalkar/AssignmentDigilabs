import React from 'react'

import  avatar from '../assets/Avatar.svg';
import WiseVector from '../assets/WiseVector.svg';

function Testimonial() {
  return (
    <div>
      
      <div className='flex justify-center flex-col items-center gap-10  max-w-[824px] m-auto mt-40'> 
        <div className=' flex justify-center items-center flex-col m-auto text-3xl text-center gap-10 px-12 '>
            <p><img src={WiseVector} alt=''/></p>
            <p>I had the pleasure of experiencing the next generation of card solutions with this incredible product. It's refreshing to see such innovation in the financial industry.</p>
        </div>
        <div>
            <img src={avatar} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
