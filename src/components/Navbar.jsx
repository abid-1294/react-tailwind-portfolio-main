import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };


    useEffect(() => {
        const root = document.documentElement;

        // Add transition effect to the root element
        root.style.transition = 'color 0.7s ease-in-out, background-color 0.7s ease-in-out, background 0.7s ease-in-out';

        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);



    return (
        <nav className="fixed inset-x-0 z-10 py-4 transition duration-300 top-0 left-0 ">
            <div className='container mx-auto'>
                <div className="flex items-center justify-between ">
                    <a href="#" className=''>
                        <h3 className='text-white text-4xl font-bold'>Abid</h3>
                    </a>
                    <input type="checkbox" className='peer hidden' name='hamburger' id='hamburger' />


                    <label className="peer-checked:hamburger block cursor-pointer p-2 md:hidden" for="hamburger">
                        <div className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"></div>
                        <div className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"></div>
                    </label>

                    <div className="absolute inset-x-0 top-20 flex -translate-x-full flex-col items-center gap-8 bg-[#2d69ca99] py-8 opacity-0 transition duration-500 peer-checked:translate-x-0 peer-checked:opacity-100 md:relative md:top-0 md:translate-x-0 md:flex-row md:bg-transparent md:py-0 md:opacity-100 text-[20px] font-bold">

                        <a href="#about" className="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300">About</a>
                        <a href="#provide" className="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300">Service</a>
                        <a href="#worked" className="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300">Work</a>
                        <a href="#contact" className="text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300">Contact</a>
                        <button
                            type="button"
                            onClick={handleThemeSwitch}
                            className="bg-white text-base p-1 rounded-full px-[10px] py-[4px] cursor-pointer font-bold dark:text-white dark:bg-slate-600"
                        >
                            {theme === 'dark' ? '🌙   Dark' : 'Light  🌞'}
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar