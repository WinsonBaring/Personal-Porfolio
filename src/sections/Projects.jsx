import React, { Fragment } from 'react'
import {projects} from '../profile'
import { Link, Element } from 'react-scroll'; 
import Card from 'components/Card'
import CommonButton from 'components/CommonButton';
import CommonTitle from 'components/CommonTitle';

const Projects = () => {
  return (
    <Fragment>
        <Element className='flex flex-col items-center justify-center' id='Projects' name='Projects'>
            {/* Title Description */}
            <section className='text-center'>
                <CommonButton children={"Projects"} />
                <CommonTitle children={projects.title} />
            </section>

            {/* Skills Mapping */}
            <section className="flex justify-center flex-wrap mx-48 items-center ">
                {projects.projects.map((project, index) => {
                return(
                    <Card
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    tools_used={project.tools_used}
                    source_code={project.source_code}
                    live_demo={project.link}
                    />
                )
                })}
            </section>
        </Element>
    </Fragment>
  )
}

export default Projects