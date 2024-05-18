import React, { Fragment } from 'react'
import { Link, Element } from 'react-scroll'; 
import {skills} from '../profile'
import CommonButton from 'components/CommonButton';

const Skills = () => {
  return (
    <Fragment>
        <Element className='flex items-center justify-center' id='Skills' name='Skills'>
            <section>

                <CommonButton children={"Skills"}/>
                {skills.map((skills)=>{
                    return(
                        <div className='' >
                            <h1>{skills}</h1>
                        </div>
                    )
                })}
            </section>
        </Element>
    </Fragment>
  )
}

export default Skills