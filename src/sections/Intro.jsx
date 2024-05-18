import React from 'react'
import { intro } from '../profile'
import cover from 'assets/bg-cover.png'

const Intro = () => {

  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between">
      <section className="">
        <h1 className="text-6xl font-bold text-black mb-4">{intro.intro}</h1>
        <h1 className="text-8xl font-bold text-black mb-8">{intro.name}</h1>
        <p className="text-xl text-gray-700">{intro.about}</p>
        {intro.highlight && <p className="text-lg font-semibold text-gray-900 mt-4">{intro.highlight}</p>}
      </section>
      <section className="">
        <img className="relative bottom-[3.4rem] left-[7rem] right-10 max-w-full h-[45rem]" src={cover} alt="" />
      </section>
    </section>
  )
}

export default Intro