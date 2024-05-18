// src/components/Footer.jsx
import React from 'react';
import { header_name,skillset } from '../profile'
import { social_media } from '../profile'
import { LinkedinOriginal } from 'devicons-react';
import { FacebookOriginal } from 'devicons-react';
import { GithubOriginal } from 'devicons-react';

const Footer = () => {
    const iconList = {
        linkedin: <LinkedinOriginal color="red" size="30"  />,
        github: <GithubOriginal color="red" size="30"  />,
        facebook: <FacebookOriginal color="red" size="30"  />,
      }
  return (
    <footer className="m-0 flex justify-between mt-[10rem] bg-slate-300 text-black py-10 px-20">
      <h1 className='text-[3rem] font-mono'>
                <span className='font-bold text-green-500'>{`<W`}</span>
                {`${header_name.name}`}
                <span className='font-bold text-green-500'>{`>`}</span>
        </h1> 
        {/* Social Media Mapping */}
            <section className='flex items-center justify-center'>
              {social_media.map((media)=>{
                return(
                  <section className='mr-[3rem] '>
                    <a href={media.link} target="_blank" rel="noreferrer" key={media.socialmedia}>
                      {iconList[media.socialmedia]}
                    </a>
                    <p>{media.socialmedia}</p>
                  </section>
                )
              })}
            </section>
    </footer>
  );
};

export default Footer;
