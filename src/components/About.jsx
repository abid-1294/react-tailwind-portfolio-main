import React from 'react';
import myImg from '../images/PassportPic.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300 text-justify">
					I am a Frontend Developer, I create web pages with UI/UX user interface. I have well experience in several projects. My <b>Best</b> thing, I can create a webpage same as Figma Design.
				</p>
				
			</div>
			<div className='w-full md:w-6/12 flex justify-end'>
			<img
				src={myImg}
				alt="Abid"
				className=" rounded-lg object-cover ease-in-out hover:m-5 duration-300 hover:border-1 hover:border-indigo-600 hover:shadow-2xl hover:shadow-indigo-500"
			/>
			</div>
		</div>
	);
}

export default About;
