import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
            <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
            <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                <p>Welcome To Prescripto, Your Trusted Partner In Managing Your HealthCare Needs Conveniently And Efficiently.
                    At Prescripto, We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing Their Health Records.
                </p>
                <p>Prescripto Is Commited To Excellence In Healthcare Technology.
                    We Continously Strive To Enhance Our Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service.
                    Whether You're Booking Your First Appointment Or Managing Ongoing Care, Prescripto Is Here To Support You Every Step Of The Way.
                </p>
                <b className='text-gray-800'>Our Vision</b>
                <p>Our Vision At Prescripto Is To Create A Seamless HealthCare Experience For Every User.
                    We Aim To Bridge The Gap Between Patients And HealthCare Providers, Making It Easier For You To Access The Care You Need, When You Need It.
                </p>
            </div>
        </div>
        <div className='text-xl my-4'>
            <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>
        <div className='flex flex-col md:flex-row mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>EFFICIENCY:</b>
                <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>CONVENIENCE:</b>
                <p>Access To A Network Of Trusted HealthCare Professionals In Your Area.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
                <b>PERSONALIZATION:</b>
                <p>Tailored Recommenations And Remainders To Help You Stay On Top Of Your Health.</p>
            </div>
        </div>
    </div>
  )
}

export default About
