// eslint-disable-next-line no-unused-vars
import React from "react";
export default function About() {
  return (
    <>
        <div className=" flex justify-center items-center flex-wrap py-5 bg-mainColor mt-24 ">
            <div className='text-center text-white flex justify-center items-center flex-col my-1 w-[80%] py-28'> 
                <h1 className="text-4xl font-bold mt-5 uppercase">about component</h1>
                <div className='flex justify-center items-center my-5'>
                    <div className='w-[80px] h-[4px] bg-white me-3'></div>
                    <i className="fa-solid fa-star "></i>
                    <div className='w-[80px] h-[4px] bg-white ms-3'></div>
                </div>
                <div className="flex flex-wrap text-start justify-center ">
                <p className="w-full md:w-1/2 px-7">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className="w-full md:w-1/2 px-7 mt-12 md:mt-0">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </>
  
  )
}
