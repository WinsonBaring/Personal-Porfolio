// src/components/Card.jsx
import React, { Children } from 'react';
import CommonButton from './CommonButton';
import {project }from 'assets/imagesimport'
import github from 'assets/github.svg'
import link from 'assets/link.svg'
// import CommonButton from 'components/CommonButton'; // Adjust the path if needed

const Card = ({ image, title, description, tools_used, source_code, live_demo }) => {
  return (
    <section className="max-w-sm rounded overflow-hidden shadow-lg m-10">
      <img className="w-full" src={project} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tools_used.map((tool, index) =>{
            return(
                <CommonButton key={index} children={tool} styler={"mr-[.8rem] px-[.4rem] text-sm"}/>
            )
        })}
      </div>
      <section className="flex flex-row justify-between underline px-6 pt-4 pb-2">
        <section className='flex flex-row items-center justify-center'>
            <img src={github} alt=""  className='w-5 mr-2'/>
            <a
            href={source_code}
            className="text-black-500 hover:green-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            >
            View Code
            </a>
        </section>
        <section className='flex flex-row items-center justify-center'>

            <a
            href={live_demo}
            className="ml-4 text-black-500 hover:green-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            >
            Live Demo
            </a>
            <img src={link} alt="" className='ml-2 w-5 '/>
        </section>
      </section>
    </section>
  );
};

export default Card;
