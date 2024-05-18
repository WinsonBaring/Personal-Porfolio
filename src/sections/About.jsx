import React ,{Fragment}from 'react'
import { Link, Element } from 'react-scroll'; 
import profile_picture from '../assets/1x1.jpg';
// import about from '../profile'
import {about} from '../profile'
import CommonButton from 'components/CommonButton';
import CommonTitle from 'components/CommonTitle';

const About = () => {
  return (
    <Fragment> 
        <Element id='About' name='About'>
            <article className=' flex '>

              {/* Image */}
              <img className='object-cover object-center w-1/3 rounded-lg h-64 ' src={profile_picture} alt="Profile Ismage" />

              <section className='ml-20 w-full'>

                {/* About */}
                <CommonButton children={about.intro} />

                <CommonTitle children={about.title}/>
  
                <p className='font-sans text-lg pt-10'>
                  {about.description}
                </p>
              </section>
            </article>

        </Element>
    </Fragment>
  )
}

export default About