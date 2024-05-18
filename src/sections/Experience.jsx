import React, { Fragment } from 'react'
import { Link, Element } from 'react-scroll'; 
import Card from 'components/Card'
import CommonButton from 'components/CommonButton';
import CommonTitle from 'components/CommonTitle';
import {experience} from '../profile'

const Experience = () => {
  return (
    <Fragment>
        <Element className='flex flex-col items-center justify-center' id='Experience' name='Experience'>
             {/* Title Description */}
             <section className='text-center'>
                <CommonButton children={experience.title} />
                <CommonTitle children={experience.description} />
            </section>


            {/* Skills Mapping */}
            <section className="p-8">
            <h2 className="text-4xl font-bold mb-8">{experience.title}</h2>
            {experience.experience.map((exp, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">{exp.company_name}</h3>
                <h4 className="text-xl font-medium mb-2">{exp.job_title}</h4>
                { exp.description && <p className="text-gray-700 mb-2">{exp.description}</p>}
                { exp.tools_learned && <p className="text-gray-500"><strong>Tools Learned:</strong> {exp.tools_learned}</p>}
                </div>
                ))}
            </section>
        </Element>
    </Fragment>
  )
}

export default Experience