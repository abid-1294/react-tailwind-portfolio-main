import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Web Design',
		icon: <MdWeb className="w-full h-full" />,
		description: "I design visually appealing, user-friendly websites that prioritize UX & brand identity, using Figma for mockups & prototypes."
	},
	{
		title: 'Ui Design',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description: "I craft intuitive, user-centric interfaces (Figma) that are both beautiful & easy to use."
	},
	{
		title: 'Web Development',
		icon: <VscCode className="w-full h-full" />,
		description: "I breathe life into websites with clean code (HTML, CSS, JS) & React (Vite) + UI frameworks (Tailwind, Bootstrap)."
	},
];
