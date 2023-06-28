import React from 'react'
import GitLife from '../assets/gitlife.png'
import Weather from '../assets/weatherSearch.jpg'
import BudgetBuddy from '../assets/budgetbuddy.png'
import TriviaTracker from '../assets/TriviaTracker.jpg'
import EmpTrack from '../assets/nodeemptrack.png'
import CodeGame from '../assets/codegame.png'
import PintPlanner from '../assets/pintplanner8888.png'
import BetterReads from '../assets/BetterReads.png'


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#05386b]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#edf5e1] border-[#77DD77]'>Projects</p>
                    <p className='py-6'>Check out some of our recent projects.</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${GitLife})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                React/MongoDB JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://git-your-life-together.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/JessicaIOrtega/Git-your-life-together-">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${BudgetBuddy})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                Handlebars/MySQL JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://financial-planner-uta-bc.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Crothos/financial-planner">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Weather})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                Find a 5 day weather forecast for any location
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://mescamilla1114.github.io/challenge6-weatherforecast/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${TriviaTracker})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                Play Trivia and see how you stack up against others!
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://trivia-tracker.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${PintPlanner})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 place-content-center font-bold text-white tracking-wider'>
                                Pint Planner
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://cameliabenavides10.github.io/pintplanner/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/cameliabenavides10/pintplanner">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${BetterReads})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                Better Reads
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://better-reads10.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/cameliabenavides10/books-app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work