// eslint-disable-next-line no-unused-vars
import React from "react";
import {  useState } from "react"


export default function Contact() {
    const [inputs , setInputs]= useState(
        [
            {
                id:'userName',
                top:'25px',
                type:'text',
                placeholder:'User Name',

            },
            {
                id:'userAge',
                top:'25px',
                type:'text',
                placeholder:'User Age',

            },
            {
                id:'userEmail',
                top:'25px',
                type:'Email',
                placeholder:'User Email',

            },
            {
                id:'userPassword',
                top:'25px',
                type:'password',
                placeholder:'User Password',

            },
        ]
    )
    function handleChange(e , index){
        let val = e.target.value
        if(val!==''){
            raiseTop(index)
        }else{
            inRiseTop(index)
        }
    }
    function raiseTop(index){
        let newInputs = structuredClone(inputs)   
        newInputs[index].top ='0px'
        setInputs(newInputs) 
    }
    function inRiseTop(index){
        let newInputs = structuredClone(inputs)   
        newInputs[index].top ='25px'
        setInputs(newInputs) 
    }
    function handleSubmit(event){
        event.preventDefault()
    }

  return (
    <>
        <div className=" flex justify-center items-center flex-wrap py-5 bg-white mt-24 ">
        <div className='text-center text-secondaryColor flex justify-center items-center flex-col my-1 w-full lg:w-[80%]  '> 
                <h1 className="text-4xl font-bold mt-5 uppercase">contact section</h1>
                <div className='flex justify-center items-center my-5'>
                    <div className='w-[80px] h-[4px] bg-secondaryColor me-3'></div>
                    <i className="fa-solid fa-star "></i>
                    <div className='w-[80px] h-[4px] bg-secondaryColor ms-3'></div>
                </div>
                <form onSubmit={(e)=>handleSubmit(e)} className=" my-5 lg:w-[70%] w-full px-5 flex flex-wrap">
                    {
                        inputs.map((inputs,index)=>{
                            return(
                                <div key={index} className="w-full flex justify-start flex-wrap"><label htmlFor={inputs.id} className="relative mt-3 text-md lg:text-lg text-mainColor transition-all duration-500"  style={{top:inputs.top}}  >{inputs.placeholder} :</label>
                                <input onChange={(e)=>handleChange(e,index)} type={inputs.type} id={inputs.id}  placeholder={inputs.placeholder} className="relative w-full shadow-md px-3 border-0 border-b border-slate-300 py-3 focus:outline-none rounded-md text-md lg:text-lg"  />
                </div>
                            )
                        })
                    }
                    <button  className="p-3 bg-mainColor text-white rounded-md font-semibold mt-5 self-start ">Send Message</button>
                </form>
            </div>
        </div>
    </>
  )
}
