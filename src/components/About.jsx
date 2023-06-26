import React from 'react'
import Stevo from '../assets/Me2Pro.png'
import Michael from '../assets/MichaelBigHead.jpg'
import Camelia from '../assets/Camelia.jpg'

const About = () => {
    return (
        <div name='about' className='w-full h-full bg-gray-800 text-gray-300'>

            <div className='flex flex-col justify-center items-center w-full h-full'> 
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#5cdb95]'>About</p>
                    </div>
                </div>

                <div className='max-w-[1000px] w-full grid lg:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 w-40 mx-auto border-4 border-[#5cdb95]' src={Stevo} alt='self-portrait'></img>
                    </div>
                    <div >
                        <p className='font-bold text-[#edf5e1]'>Stephen is a Full Stack Web Developer with roots in Podcasting and Live Streaming. From the DFW metroplex, he's also a new dad and old gamer.</p>
                    </div>
                </div>
                    <br></br>
                <div className='max-w-[1000px] w-full grid xl:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 w-40 mx-auto border-4 border-[#5cdb95]' src={Michael} alt='Michael Escamilla'></img>
                    </div>
                    <div className='max-w-[1000px] w-full gap-8 px-4'>
                        <p className='font-bold text-[#edf5e1]'>A full stack developer, Michael specializes in the study of data to understand and acknowledge consumer behavior at micro and macro levels. In his role as Business Development Manager for Aesthetic Medical Educators Training, he has worked to transform the industry-trailing company to an industry-leading one. Through innovative strategy development, company revenue grew by 50%, 25%, 20%, and 30% in 2019, 2020, 2021, and 2022 respectively. These strategies have since been emulated across the industry, especially by those aiming for success in a Covid world.
                                                                Michael’s business story began during his college years when he founded a tech company and was selected for the Tech Crunch Austin Pitchoff. He went on to work with Comcast, ViaSat, and Brighthouse providers to build programs for customer experience, understanding, and alignment.
                                                                Through Web Development and Consulting Michael pursues opportunities to advance promising individuals and companies to the forefront of their potential.
                        </p>
                    </div>
                </div>
                
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 w-40 mx-auto border-4 border-[#5cdb95]' src={Camelia} alt='Camelia'></img>
                    </div>
                    <div>
                        <p className='font-bold text-[#edf5e1]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore delectus placeat asperiores adipisci! Nisi aliquam voluptatibus quisquam laudantium expedita nesciunt fugit placeat, ipsa dolore excepturi inventore, eligendi enim rem minima.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About