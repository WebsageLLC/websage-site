import React from 'react'
import Stevo from '../assets/Me2Pro.png'
import Michael from '../assets/MichaelBigHead.jpg'
import Camelia from '../assets/Camelia.jpg'

const About = () => {
    return (

        <div name='about' className='w-full h-full bg-gray-800 text-gray-300'>


            <div className='flex flex-col justify-center items-center w-full h-full'> 
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4 py-2'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#5cdb95]'>Meet the Devs</p>
                    </div>
                </div>

                <div className='max-w-[1000px] w-full grid lg:grid-cols-1 gap-8 px-4 py-6'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 w-40 mx-auto border-4 border-[#5cdb95]' src={Stevo} alt='self-portrait'></img>
                    </div>
                    <div>
                    <p className='text-2xl font-bold inline border-b-4 border-[#5cdb95]'>Stephen Totten</p>
                        <p className='py-6 font-bold text-[#edf5e1]'>Stephen is a Full Stack Web Developer, Podcaster, and Twitch Streamer. He spent 14 years working for a non-profit providing closed-captions for live TV before going back to school to become a developer. From the DFW metroplex, he's also a new dad and old gamer. </p>
                    </div>
                </div>
                    <br></br>
                <div className='max-w-[1000px] w-full grid xl:grid-cols-1 gap-8 px-4 py-6'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 w-40 mx-auto border-4 border-[#5cdb95]' src={Michael} alt='Michael Escamilla'></img>
                    </div>
                    <div>
                    <p className='text-2xl font-bold inline border-b-4 border-[#5cdb95]'>Michael Escamilla</p>
                        <p className='font-bold text-[#edf5e1] py-6'>A full stack developer, Michael specializes in the study of data to understand and acknowledge consumer behavior at micro and macro levels. In his role as Business Development Manager for Aesthetic Medical Educators Training, he has worked to transform the industry-trailing company to an industry-leading one. Through innovative strategy development, company revenue grew by 50%, 25%, 20%, and 30% in 2019, 2020, 2021, and 2022 respectively. These strategies have since been emulated across the industry, especially by those aiming for success in a Covid world.
                                                                Michael’s business story began during his college years when he founded a tech company and was selected for the Tech Crunch Austin Pitchoff. He went on to work with Comcast, ViaSat, and Brighthouse providers to build programs for customer experience, understanding, and alignment.
                                                                Through Web Development and Consulting Michael pursues opportunities to advance promising individuals and companies to the forefront of their potential.
                        </p>
                    </div>
                </div>
                
                <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4 py-6'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 w-40 h-49 mx-auto border-4 border-[#5cdb95]' src={Camelia} alt='Camelia'></img>
                    </div>
                    <div>
                        <p className='text-2xl font-bold inline border-b-4 border-[#5cdb95]'>Camelia Benavides</p>
                        <p className='py-6 font-bold text-[#edf5e1]'> Camelia is a 31-year-old full-stack developer with a background in social work. With a unique blend of skills, she combines effective communication, problem-solving, and a passion for coding to deliver impactful solutions. Bridging the gap between technology and human interaction, she thrives in complex challenges, delivering user-friendly applications while making a positive impact in her community. </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About;