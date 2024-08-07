import React, { useState, useEffect } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Works from './components/Works';
import Navbar from './components/Navbar';
import Provide from './components/Provide';
import Contact from './components/Contact';

function App() {

	return (
		<>
			<div className=" bg-slate-100 dark:bg-slate-900 min-h-screen font-poppins ">
				<div className='bg-hero-img bg-cover bg-no-repeat bg-center'>
					<div className="container  mx-auto">
						<HeroSection />
						<Navbar />
					</div>
				</div>
				<div className="container  mx-auto">
					<About />
					<Provide />
					<Works />
					<Contact />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
