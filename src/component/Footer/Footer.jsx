// eslint-disable-next-line no-unused-vars
import React from "react";
export default function Footer() {
  return (
    <>
        <div className=" bg-secondaryColor text-white flex justify-center py-28 ">
            <div className="w-[90%] flex justify-around flex-wrap">
            <div className="text-center w-full md:w-1/3 ">
                <h3 className="font-semibold text-3xl mb-2">LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p className="mt-3">Clark, MO 65243</p>
            </div>
            <div className="text-center w-full md:w-1/3 mt-20 md:mt-0">
                <h3 className="font-semibold text-3xl mb-3 ">AROUND THE WEB</h3>
                <div className="flex justify-center items-center mt-2 gap-4 ">
                <div className=" w-[40px] h-[40px] rounded-full border border-white flex justify-center items-center"><i className="fa-brands fa-facebook"></i></div>
                <div className=" w-[40px] h-[40px] rounded-full border border-white flex justify-center items-center"><i className="fa-brands fa-twitter"></i></div>
                <div className=" w-[40px] h-[40px] rounded-full border border-white flex justify-center items-center"><i className="fa-brands fa-linkedin"></i></div>
                <div className=" w-[40px] h-[40px] rounded-full border border-white flex justify-center items-center"><i className="fa-solid fa-globe"></i></div>
            
                </div>
            </div>
            <div className="text-center flex flex-col justify-center items-center w-full md:w-1/3 mt-20 md:mt-0">
                <h3 className="font-semibold text-3xl mb-3">ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Tailwind theme <br/> created by Route</p>
                
            </div>
            </div>
        </div>
        <div className="bg-[#1a252f] text-white flex justify-center py-5">
            <p>Copyright © Your Website 2021</p>
        </div>
    </>
  )
}
