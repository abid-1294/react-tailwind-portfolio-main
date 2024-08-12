import React from 'react';
import myImg from '../images/PassportPic.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div id='about' className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12 px-4 sm:px-8">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-[18px] sm:text-[20px] text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
					I am a Frontend Developer, I create web pages with UI/UX user interface. I have well experience in several projects. My <b>best</b> thing is that I can create a webpage exactly like a Figma Design.
				</p>
			</div>
			<div className='w-full md:w-6/12 flex justify-center md:justify-end'>
				<img
					src={myImg}
					alt="Abid"
					className="w-[300px] sm:w-[400px] h-auto rounded-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:border-1 hover:border-indigo-600 hover:shadow-2xl hover:shadow-indigo-500"
				/>
			</div>
		</div>
	);
}

export default About;
