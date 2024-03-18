import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function HeroSection() {
	return (
		<>

			<div id="hero" className="flex items-center justify-center flex-col py-[150px] bg-transparent">
				<div className="text-center">
					<h1 className="mt-20 text-2xl sd:text-4xl md:text-6xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
						I'm Abid Mehrab
					</h1>
					<p className="mt-8 text-md md:text-xl  mb-3 text-gray-300 dark:text-white">
						Mern Stack Developer - UI/UX Designer
					</p>
				</div>

				<div className='flex items-center justify-center gap-8 mt-8'>
					<a href="https://www.facebook.com/abidmehrab.20" className='text-slate-900 hover:text-white hover:bg-slate-900 transition dureation-300 ease items-center justify-center w-12 h-12 bg-white rounded-full'>
						<FaFacebook className='text-5xl' />
					</a>
					<a href="https://www.linkedin.com/in/abid-mehrab/" className='text-slate-900  hover:text-white hover:bg-slate-900  transition dureation-300 ease items-center justify-center w-12 h-12  bg-white  rounded-full'>
						<FaLinkedin className='text-5xl pt-[3px] pl-[1px] rounded-full' />
					</a>
					<a href="https://github.com/abid-1294" className='text-slate-900 hover:text-white hover:bg-slate-900 transition dureation-300 ease items-center justify-center w-12 h-12 bg-white rounded-full'>
						<FaGithub className='text-5xl' />
					</a>
				</div>

				<a href="" className=''><button className='text-xl bg-[#E2E8F0] dark:text-white dark:hover:text-black dark:bg-indigo-600 dark:hover:bg-[#E2E8F0]  py-1 px-3 mt-16 rounded-2xl hover:bg-indigo-600 font-semibold hover:text-white transition-all duration-500 shadow shadow-white'>Let's talk</button></a>
				{/* Shall we talk */}

			</div>

		</>
	);
}

export default HeroSection;
