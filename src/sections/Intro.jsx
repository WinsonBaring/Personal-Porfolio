import React from 'react'
import { intro } from '../profile'

const Intro = () => {
  return (
        <section className="py-[15rem] w-1/2  h-screen"  >
            <h1 className="text-6xl font-bold text-black-600 ">{`${intro.intro} `}</h1>
            <h1 className="text-8xl font-bold text-black-600 mb-8">{` ${intro.name}`}</h1>
            <p className="text-xl text-gray-700">{intro.about}</p>
            {/* {intro.highlight && <p className="text-lg font-semibold text-gray-900 mt-4">{intro.highlight}</p>} */}
        </section>
  )
}

export default Intro