import React from 'react'
import insta from "../Assets/insta.svg";
import github from "../Assets/github.svg";
import facebook from "../Assets/facebook.svg";


const Footer = () => {

    return (
        <>
        <div className=" bg-blue-500 m-6 rounded-lg p-1 shadow-2xl">
        <div className="flex justify-center items-center space-x-6 mt-5">
        <a href="https://instagram.com/akash24777?igshid=NzZlODBkYWE4Ng==" target="_blank">
            <img src={insta} className='h-8 w-10' />
          </a>

          <a href="https://github.com/akash247777" target="_blank">
            <img src={github} className="h-8 w-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/akash-s-g-746622264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <img src={facebook} className="h-8 w-10 bg-white rounded-md" />
          </a>
        
       
        
        </div>
        <div className="text-center mt-3 font-bold text-xl">
        <span className='text-white'>Akash </span> <span className="px-1 text-amber-300">S.G </span>
        <span className='text-white'> | portfolio &copy;</span>
        </div>
        </div>
        </>
    );
  }
  
  
export default Footer
