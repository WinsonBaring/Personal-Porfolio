import React from 'react'
import { intro } from '../profile'
import cover from 'assets/bg-cover.png'

const Intro = () => {
  
  return (
        <section className="py-[15rem] w-full  h-screen flex"   >
          <section>

            <h1 className="text-6xl font-bold text-black-600 ">{`${intro.intro} `}</h1>
            <h1 className="text-8xl font-bold text-black-600 mb-8">{` ${intro.name}`}</h1>
            <p className="text-xl text-gray-700">{intro.about}</p>
          </section>
          <section>
            {/* <BlurredEdgeImage src={cover}/> */}
          <img className='w-[45rem] relative z-10 bottom-[13rem] left-[15rem]'  src={cover} alt="" />
          </section>

           
            {/* {intro.highlight && <p className="text-lg font-semibold text-gray-900 mt-4">{intro.highlight}</p>} */}
        </section>
  )
}

export default Intro