// eslint-disable-next-line no-unused-vars
import React from "react";
import image from '../../assets/images/avatar.svg'
export default function Home() {
  return (
    <>
        <div className=" flex justify-center items-center flex-wrap py-5 bg-mainColor mt-24 lg:mt-24">
            <div className='text-center text-white flex justify-center items-center flex-col my-1'> 
                <img src={image} alt="" className="w-[250px] mb-5 "/>
                <h1 className="text-4xl font-bold mt-5">START FRAMEWORK</h1>
                <div className='flex justify-center items-center my-5'>
                    <div className='w-[80px] h-[4px] bg-white me-3'></div>
                    <i className="fa-solid fa-star "></i>
                    <div className='w-[80px] h-[4px] bg-white ms-3'></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </>
  )
}
