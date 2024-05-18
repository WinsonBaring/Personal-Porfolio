import React from 'react'
import { header_name,skillset } from '../profile'
import Button from "components/Button"

const Header = () => {
    const clicker = ()=>{
        alert('email: winsonbaring10@gmail.com')
        alert('number: 09760392357')
    }
    return (
        <header className='flex justify-between space-x-8 items-center border border-black-600  bg-transparent  rounded-lg p-4'>
            <h1 className='text-[3rem] font-mono'>
                <span className='font-bold text-green-500'>{`<W`}</span>
                {`${header_name.name}`}
                <span className='font-bold text-green-500'>{`>`}</span>
            </h1>
            {/* SkillSet Mapped 
            */}
            <nav>
                <ul className='flex justify-items-center space-x-8'>
                    {skillset.map((skill)=>{
                        return(
                            <li key={skill}>{skill}</li>
                        )
                    })}
                </ul>
            </nav>


            {/*  Contact Button 
            */}
            <Button
            children = "Contact"
            onClick = {clicker}
            />
        </header>
    )
}
  
 export default Header