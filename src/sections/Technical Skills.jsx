import React, { Fragment } from 'react'
import { Link, Element } from 'react-scroll'; 
import {technical_skills} from '../profile'


const Technical_Skills = () => {
  return (
    <Fragment>
        <Element id='Technical_Skills'name='Technical_Skills'>
            {technical_skills.map((technical_skills) =>{
                return(
                    <div className='' >
                        <h1>{technical_skills}</h1>
                    </div>
                )
            })}
        </Element>
    </Fragment>
  )
}

export default Technical_Skills