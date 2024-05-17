import React from 'react'
import { header_name,skillset } from '../profile'
import Button from "components/Button"

const Header = () => {
    const clicker = ()=>{
        alert('clicked')
    }
    return (
        <header className='flex justify-between space-x-8 items-center border border-black-600  bg-transparent  rounded-lg p-4'>
            <h1>{`<W${header_name.name}/>`}</h1>
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