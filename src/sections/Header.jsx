import React from 'react'
import { header_name,skillset } from '../profile'
import Button from "components/Button"
import { Link } from 'react-scroll'
import CommonButton from '../components/CommonButton'

const Header = () => {
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
                            <Link className=''
                                to={`${skill}`}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <CommonButton key={skill} children={skill} styler={"px-2 py-1"} texter={"bg-slate-200 hover:bg-green-100 ring2 ring-green-500"}/>
                            </Link>
                        )
                    })}
                </ul>
            </nav>


            {/*  Contact Button 
            */}
            <Link
            to={'Contact'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
                <Button children = "Contact"/>
            </Link>
        </header>
    )
}
  
 export default Header