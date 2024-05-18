import React, { Fragment } from 'react'
import { Link, Element } from 'react-scroll'; 
import { social_media } from '../profile'
import { LinkedinOriginal } from 'devicons-react';
import { FacebookOriginal } from 'devicons-react';
import { GithubOriginal } from 'devicons-react';


const Contact = () => {
    const iconList = {
        linkedin: <LinkedinOriginal color="red" size="30"  />,
        github: <GithubOriginal color="red" size="30"  />,
        facebook: <FacebookOriginal color="red" size="30"  />,
      }
  return (
    <Fragment>
        <Element className='bg-slate-200 py-16 px-8' id='Contact' name='Contact'>
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Me</h2>

                <p className="text-gray-600 mb-8">
                Feel free to reach out to me for any inquiries or collaborations.
                </p>

                {/* Social Media Links */}
                <section className='ml-[3rem] mb-10 flex items-center justify-center'>
                    {social_media.map((media)=>{
                        return(
                        <section className='mr-[3rem] flex flex-col items-center'>
                            <a href={media.link} target="_blank" rel="noreferrer" key={media.socialmedia}>
                            {iconList[media.socialmedia]}
                            </a>
                            <p>{media.socialmedia}</p>
                        </section>
                        )
                    })}
                </section>

                <form className="space-y-6">
                <div className="grid grid-cols-1  gap-6">
                    <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md"
                    />
                </div>
                <textarea
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md h-40"
                ></textarea>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    Send Message
                </button>
                </form>
            </div>
        </Element>
    </Fragment>
  )
}

export default Contact