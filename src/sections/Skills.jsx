import React, { Fragment } from 'react'
import { Link, Element } from 'react-scroll'; 
import {skills} from '../profile'
import CommonButton from 'components/CommonButton';
import { ReactOriginalWordmark } from 'devicons-react';
import { SpringOriginalWordmark } from 'devicons-react';    
import { MysqlOriginalWordmark } from 'devicons-react';
import { DjangoPlainWordmark } from 'devicons-react';
import { DjangorestLine } from 'devicons-react';
import { GithubOriginal } from 'devicons-react';
import { NpmOriginalWordmark } from 'devicons-react';
import { NextjsOriginal } from 'devicons-react';
import { VitejsOriginal } from 'devicons-react';
import { AndroidstudioOriginal } from 'devicons-react';

const Skills = () => {
    // The  Name should match here
      const iconList = {
         react: <ReactOriginalWordmark color="red" size="75"  />,
         springboot:<SpringOriginalWordmark color="red" size="75"  />,
         mysql:<MysqlOriginalWordmark color="red" size="75"  />,
         django:<DjangoPlainWordmark color="green" size="75"  />,
         djangorest:<DjangorestLine color="skyblue" size="75"  />,
         npm:<NpmOriginalWordmark color="skyblue" size="75"  />,
         github:<GithubOriginal color="skyblue" size="75"  />,
         nextjs:<NextjsOriginal color="skyblue" size="75"  />,
         vitejs:<VitejsOriginal color="skyblue" size="75"  />,
         androidstudio:<AndroidstudioOriginal color="skyblue" size="75"  />,
      };
  return (
    <Fragment>
        <Element className='flex items-center justify-center' id='Skills' name='Skills'>
            <section className='flex flex-col items-center'>
                <CommonButton children={"Skills"}/>


                <h1 className='font-mono font-bold mt-[10px] text-green-500 pb-[2rem] text-4xl w-[50rem] text-center'>
                    {skills.intro}
                </h1>

                <section className='flex space-x-10 flex-wrap w-3/4 justify-center'>
                    {skills.skillset.map((skillss,index)=>{
                        const image = iconList[skillss.tool.name]
                        return(
                            <div key={index} >
                                {image}
                            </div>
                        )
                    })}
                </section>
            </section>
        </Element>
    </Fragment>
  )
}

export default Skills