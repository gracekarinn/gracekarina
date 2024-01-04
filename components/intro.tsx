"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() {
    const {ref, inView} = useInView(
        {threshold: 0.5,
        }
    )
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
    
    useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection("Intro")
      }
    }, [inView, setActiveSection, timeOfLastClick])
  return (
    <section ref={ref} id="intro" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 5, scale: 1 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                >
                    <Image src="https://media.licdn.com/dms/image/D5603AQEytUoKDEPf6g/profile-displayphoto-shrink_800_800/0/1691150598189?e=1709769600&v=beta&t=7lW-Gb31FgKDREMPxr-tPzRS-nvctF6QDSnO8zWclQw"
                    alt="Grace's photo"
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className='h-24 w-24 rounded-full 
                    object-cover border-[0.35rem]
                    border-white shadow-xl'
                    />
                </motion.div>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl justify-center items-center font-sans font-normal !leading-[1.5] sm:text-xl'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition = {{ type: 'spring', damping: 10, stiffness: 100 }}
        >
            <span> Hello fellow coders! 🚀 I'm Grace, a student in the world of Computer Science. 
                Fueled by coffee as my energy source 💻🌐, I'm on a mission to master Java, Python, and all the coding challenges that cross my path!</span> 
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial = {{ opacity: 0, y:100}}
        animate = {{ opacity: 1, y: 0}}
        transition = {{ type: 'spring', damping: 10, stiffness: 100 }}
        >
            <Link id="#contact" className='bg-black text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 ransation cursor-pointer border border-black/10'
            href='mailto:gracekarina12@gmail.com?subject=Hi%2C%20Grace!!!' target='_blank'> Contact Me! <BsArrowRight />
            </Link>
            <a className='bg-slate-300 text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10' 
            href='https://www.linkedin.com/in/grace-karina-5a2688259' target='_blank'>
                <BsLinkedin />
            </a>
        </motion.div>
    </section>
  )
}
