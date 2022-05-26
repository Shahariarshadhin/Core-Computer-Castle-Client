import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from '../../images/portfolio.jpg'

const MyPortfolio = () => {
    return (
        <div class="hero min-h-screen bg-[#000000] ">
            <div class="hero-content flex-col lg:flex-row ">
                <div class="avatar">
                    <div class="w-92 rounded-full">
                        <img className='rounded' src={portfolio} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>

                <div>
                    <h1 class="text-4xl text-white font-bold">Shahariar Hasan Shadhin</h1>
                    <p class="text-2xl text-white">Computer Science and Engineering</p>
                    <p class="text-1xl text-white mb-4">Daffodil International University</p>
                    <div class="dropdown">
                        <label tabindex="0" class="btn m-1">Education</label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80">
                            <li>SSC : Bangladesh Nou-Bahini School and College Chittagong</li>
                            <li>HSC : Bangladesh Nou-Bahini School and College Chittagong</li>

                        </ul>

                    </div>
                    <div class="dropdown dropdown-top">
                        <label tabindex="0" class="btn m-1">Skills</label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-80">
                            <h1 class="text-3xl font-bold mb-8">As A Web Developer</h1>
                            <div className='flex'>
                                <div>
                                    <p class="text-2xl text-info mb-4">Front End</p>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>BoootStrap</li>
                                    <li>Tailwind</li>
                                    <li>React BootStrap</li>
                                    <li>Daisy UI</li>
                                    <li>Javascript</li>
                                    <li>React js</li>
                                </div>
                                <div>
                                    <p class="text-2xl text-info mx-8 mb-4">Back End</p>
                                    <li>Node js</li>
                                    <li>Python</li>
                                    <li>MongoDB</li>

                                </div>
                            </div>

                        </ul>
                    </div>
                    <div class="dropdown">
                        <label tabindex="0" class="btn m-1">Live Site</label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <a className='mb-4 text-info' href="https://camping-cove.web.app/" target="_blank" rel="noreferrer">Camping Cove</a>
                            <a className='mb-4 text-info' href="https://travelo-e1cee.web.app/" target="_blank" rel="noreferrer">Travelo</a>
                            <a className='mb-4 text-info' href="https://moto-mania.netlify.app/home" target="_blank" rel="noreferrer">Moto Mania</a>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;

