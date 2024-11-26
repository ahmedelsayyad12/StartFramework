// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
    const [padding , setPadding]=useState('30px')
    const handleScroll = () => {
        if (window.scrollY > 0) {
        setPadding('20px')
        } else{
            setPadding('30px')

        }

	};
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            }
    },[])
    
    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <nav>
            <div className=" w-full  bg-secondaryColor text-white flex justify-center fixed top-0 left-0 right-0 z-50" >
            <div className="lg:flex md:w-[85%]  w-full items-center lg:px-4 px-0 transition-all duration-500" style={{padding:padding}} onScroll={handleScroll}> 
            <h1><Link className="text-3xl lg:text-4xl font-bold" to={'/home'}>START FRAMEWORK</Link></h1>
            <div onClick={()=>setIsOpen(!isOpen)} className='absolute right-20 top-8 cursor-pointer lg:hidden btn'>
                {
                    isOpen ? <i className="fa-solid fa-xmark text-3xl"></i> :<i className="fa-solid fa-bars text-3xl"></i>
                }
                
                </div>
            <ul className={`lg:flex hidden  gap-5 font-bold ms-auto pl-3 lg:pl-10 ` }>
                
                         
                <li className='my-7 lg:my-0 lg:ml-8'><NavLink to={'/about'} className={({isActive}) => isActive ? 'bg-mainColor ' : '' }>ABOUT</NavLink></li>
                <li className='my-7 lg:my-0 lg:ml-8'><NavLink to={'/portfolio'} className={({isActive}) => isActive ? 'bg-mainColor ' : '' }>PORTFOLIO</NavLink></li>
                <li className='my-7 lg:my-0 lg:ml-8'><NavLink to={'/contact'} className={({isActive}) => isActive ? 'bg-mainColor ' : '' }>CONTACT</NavLink></li>

            </ul>
            {isOpen ? (
                <ul className={`lg:flex  gap-5 font-bold ms-auto pl-3 lg:pl-10 ` }>
                
                         
                <li className='my-7 lg:my-0 lg:ml-8'><NavLink to={'/about'} className={({isActive}) => isActive ? 'bg-mainColor ' : '' }>ABOUT</NavLink></li>
                <li className='my-7 lg:my-0 lg:ml-8'><NavLink to={'/portfolio'} className={({isActive}) => isActive ? 'bg-mainColor ' : '' }>PORTFOLIO</NavLink></li>
                <li className='my-7 lg:my-0 lg:ml-8'><NavLink to={'/contact'} className={({isActive}) => isActive ? 'bg-mainColor ' : '' }>CONTACT</NavLink></li>

            </ul>
            ): null}
            </div>

            </div>
        </nav>
    </>
  )
}
