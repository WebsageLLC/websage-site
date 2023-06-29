import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import homePic from '../assets/HomePic.png'
import homePic2 from '../assets/homePic2.png'
import homePic3 from '../assets/homePic3.png'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#5cdb95]'>

            {/* Container */}
            <div className='content-center grid grid-cols-2 space-x-12  max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>


               <div className=''>
                <p className='text-[#05386B] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-xl'>Welcome to</p>
                <h1> <span className='text-4xl sm:text-7xl font-bold text-[#379683]'> Web</span> <span className='text-4xl sm:text-7xl font-bold text-[#379683]'>Sage</span><span className='text-4xl sm:text-7xl text-[#edf5e1]'>llc</span></h1>
                <h1> <span className='text-4xl sm:text-7xl font-bold text-[#379683]'> Web</span> <span className='text-4xl sm:text-7xl  text-[#edf5e1]'>development </span></h1>
                <p className='text-xl text-[#05386B] py-4 max-w-[700px] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Whether you need a simple page or a full site, we're here to help!</p>
                <div className='flex flex-row'>
                <Link to="about" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 mx-5 my-2 flex items-center hover:bg-[#05386b] hover:border-[#05386b]'>About Us 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span> 
                    </button>
                </Link>
                <Link to="work" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#05386b] hover:border-[#05386b]'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span> 
                    </button>
                </Link>
                </div>
                </div>



                <div className=''>
                    <img src={homePic3} style={{width: "600px"}} />
                    
            </div>
            </div>
           
        </div>
    )
}

export default Home