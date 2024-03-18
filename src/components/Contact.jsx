import React from 'react'
import SectionTitle from './SectionTitle'

const Contact = () => {
    return (
        <div id='contact' className='py-12'>
            <SectionTitle>Want to Hire Me...?</SectionTitle>
            <div className='flex flex-col md:flex-row w-full justify-center bg-white dark:bg-slate-800 rounded-md shadow-xl py-20 px-3 gap-10 md:gap-20 items-center'>
                <div className="max-w-md md:w-7/12 p-6 bg-white dark:bg-slate-300 rounded-md shadow-md sm:ml-5">
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="3543f7d9-04ef-4fcd-a812-083dd7ed7330" />
                        <div className="mb-4">
                            <label for="name" className="block text-sm font-medium text-gray-700">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter your first name" className="w-full mt-2 px-3 py-2 rounded-md border-gray-300 border focus:outline-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label for="subject" className="block text-sm font-medium text-gray-700">Phone No.:</label>
                            <input type="number" id="subject" name="subject" placeholder="Enter your last name" className="w-full mt-2 px-3 py-2 rounded-md border-gray-300 border focus:outline-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block text-sm font-medium text-gray-700">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full mt-2 px-3 py-2 rounded-md border-gray-300 border focus:outline-blue-500" />
                        </div>
                        <div className="mb-6">
                            <textarea name="msg" id="msg" rows="5" placeholder="How can I help you...!" className="w-full mt-2 px-3 py-2 rounded-md shadow-lg border-gray-300 border focus:outline-blue-500"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-indigo-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600">Submit</button>
                        </div>
                    </form>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1362.999416780851!2d90.3846848200058!3d23.886335153603003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5943adefbc7%3A0xbd44881183b5ff40!2sRhythm%20Italy%20Garden!5e1!3m2!1sen!2sbd!4v1710793726847!5m2!1sen!2sbd"
                        width="600" height="500"
                        allowFullScreen=""
                        loading="lazy"
                        title='Google maps locations'
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    )
}

export default Contact
