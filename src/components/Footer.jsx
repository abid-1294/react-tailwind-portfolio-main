import React from 'react';

function Footer() {
	return (
		<div className="py-5 bg-slate-800 text-center text-gray-300">
			<a href="#hero" className="block text-xl md:text-2xl font-semibold">
				Abid Mehrab
			</a>
	
			<p className="text-xs mt-2 text-gray-500">
				© Abid-Mehrab Imagination 2022-{new Date().getFullYear()}. All rights reserved
			</p>
		</div>
	);
}

export default Footer;
