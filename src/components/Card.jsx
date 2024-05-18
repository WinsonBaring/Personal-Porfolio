// src/components/Card.jsx
import React, { Children } from 'react';
import CommonButton from './CommonButton';
import {project }from 'assets/imagesimport'
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
      <div className="px-6 pt-4 pb-2">
        <a
          href={source_code}
          className="text-blue-500 hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
        <a
          href={live_demo}
          className="ml-4 text-blue-500 hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </section>
  );
};

export default Card;