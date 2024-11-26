/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import image1 from '../../assets/images/poert1.png'
import image2 from '../../assets/images/port2.png'
import image3 from '../../assets/images/port3.png'


export default function Portfolio() {
    const images = [image1, image2, image3 , image1 , image2 , image3]
    const [data , setData]=useState({term:''})
    function handelClick(term){
        setData({term})
        
    }
    function close(){
        setData({term:''})
    }
    function handleBubble(e){
        e.stopPropagation()
    }
  return (
    <>
    {
        data.term &&
        <div className="layer ">
                <div onClick={close} className="flex justify-center items-center bg-white bg-opacity-70 fixed top-0 w-full h-[100vh] z-50">
                    <img onClick={handleBubble} src={data.term} alt="image" className='w-full lg:w-1/2'/>
                </div>
            </div>
    }
        <div className=" flex justify-center items-center flex-wrap py-5 bg-white mt-24 ">
            <div className='text-center text-secondaryColor flex justify-center items-center flex-col my-1 w-[80%] '> 
                <h1 className="text-4xl font-bold mt-5 uppercase">portfolio component</h1>
                <div className='flex justify-center items-center my-5'>
                    <div className='w-[80px] h-[4px] bg-secondaryColor me-3'></div>
                    <i className="fa-solid fa-star "></i>
                    <div className='w-[80px] h-[4px] bg-secondaryColor ms-3'></div>
                </div>
            </div>
            <div className="flex flex-wrap text-start justify-center w-[90%]">
                        {images.map((index)=>{
                            return(
                                <div onClick={()=>{handelClick(index)}} className='w-full md:w-1/3  rounded-lg p-6  ' >
                                    <div className='relative overflow-hidden '>
                                    <img src={index} alt="" className='w-full rounded-lg '/>
                                    <div className="cursor-pointer rounded-lg absolute start-0 w-full top-0 h-full flex justify-center items-center opacity-0 transition-all duration-500 hover:bg-mainColor hover:opacity-90">
                                    <i className="fa-solid fa-plus text-white text-8xl"></i>
                                    </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
        </div>
    </>
  )
}
