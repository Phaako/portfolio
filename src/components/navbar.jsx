import { Briefcase, Contact, Folder, HomeIcon, Phone, UserCog } from 'lucide-react'
import React from 'react'


const Navbar = () => {
    return (
        <div className=' pt-10 flex justify-center items-center'>
            {/* Desktop View Navbar */}
            <div className='hidden md:block bg-[#3f3d3d] md:w-[70vw] p-10 md:rounded-full md:h-[8vh]'>
                <div className='md:flex justify-between items-center text-center text-white'>
                    <h1 className='md:text-3xl'>FAAKO</h1>
                    <nav>
                        <ul className='md:text-3xl md:flex md:space-x-10'>
                            <a href="/"><li>Home</li></a>
                            <a href="about"><li>About</li></a>
                            <a href="skills"><li>Skills</li></a>
                            <a href="experience"><li>Experience</li></a>
                            <a href="projects"><li>Projects</li></a>
                            <a href="contact"><li>Contact</li></a>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile View Navbar */}
            <div className='md:hidden bg-[#3f3d3d] w-[90vw] rounded-xl h-[8vh]'>
                <nav>
                    <ul className='flex justify-center items-center p-3 space-x-7'>
                        <li><HomeIcon className='text-white w-6' /></li>
                        <li><Contact className='text-white w-6' /></li>
                        <li><UserCog className='text-white w-6' /></li>
                        <li><Briefcase className='text-white w-6' /></li>
                        <li><Folder className='text-white w-6' /></li>
                        <li><Phone className='text-white w-6' /></li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar