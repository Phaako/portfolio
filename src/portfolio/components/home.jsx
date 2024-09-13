import { ArrowRight, FacebookIcon, InstagramIcon, LinkedinIcon, Mail, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import eds from '../../assets/images/eds.jpg'
import Navbar from '../../components/navbar'

const Home = () => {
  return (
    <div className="bg-[#151312] h-screen w-screen ">
      <Navbar/>
<div id='home' className=' pl-10 pt-10 md:pt-28 md:pl-64' >
      <div className='bg-white  relative h-[70vh] w-[80vw] md:w-[20vw] md:h-[60vh] rounded-xl flex flex-col justify-center space-y-28 items-center '>
        <img className='md:w-[300px] w-[190px] rounded-xl absolute top-10' src={eds} alt="img" />

        <div className='flex flex-col justify-center items-center space-y-4 pt-20 md:space-y-7'>
          <h1 className='text-xl md:text-3xl font-bold font-sans  '>YAKUBU EDWARD FAAKO</h1>
          <p className='text-[#6A6B81]   md:text-2xl text-center  '>Mechanical Engineer specializing in digital <br /> fabrication, 3D design, and <br /> product development.</p>

          <div className='flex space-x-4'>
            <a href="https://www.linkedin.com/in/yakubu-edward-faako-9a374612b" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className='md:w-20 md:h-10 text-orange-500' />
            </a>
            <a href="https://x.com/edwardfaako" target="_blank" rel="noopener noreferrer">
              <Twitter className='md:w-20 md:h-10 text-orange-500' />
            </a>
            <a href="mailto:email@example.com" target="_blank" rel="noopener noreferrer">
              <Mail className='md:w-20 md:h-10 text-orange-500' />
            </a>
            <a href="https://www.instagram.com/phaako?utm_source=qr&igsh=MWkwdzluNThxdmRsbw==" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className='md:w-20 md:h-10 text-orange-500' />
            </a>
          </div>
        </div>
      </div>


    </div>
    </div>
    





  )
}

export default Home