"use client";

import Image from 'next/image'
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin, BsMailbox, BsMailbox2, BsMailbox2Flag, BsSpotify } from "react-icons/bs"
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref, inView } = useInView({
      threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  
    useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection("Intro");
      }
    }, [inView, setActiveSection, timeOfLastClick]);
  
    return (
      <section
        ref={ref}
        id="intro"
        className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 5, scale: 1 }}
              transition={{ type: 'spring', damping: 10, stiffness: 100 }}
            >
              <Image
                src="https://media.licdn.com/dms/image/D4D03AQEjTgQkF_SDSw/profile-displayphoto-shrink_800_800/0/1704387302028?e=1709769600&v=beta&t=uXG_1S36QAWljBeANdfqha3y9pD49Oiewa95f_H5S14"
                alt="Graces photo"
                width="192"
                height="192"
                quality="95"
                className="h-45 w-45 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl justify-center items-center font-medium !leading-[1.5] sm:text-xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        >
          <span>
            Hello fellow coders! 🚀 I&apos;m Grace, a student in the world of
            Computer Science. I&apos;m on a mission to master Java, Python, and all the coding challenges
            that cross my path! Let&apos;s embark on this coding journey together and
             turn every challenge into an opportunity for growth!!
          </span>
        </motion.h1>
  
        <motion.div
          className="flex flex-col  items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        >
          <Link
            href="mailto:gracekarina12@gmail.com?subject=Hi%2C%20Grace!!!"
            target="_blank"
            className="bg-blue-800 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 transition cursor-pointer border border-black/10"
          >
            Contact Me!! <BsMailbox2Flag />
          </Link>
          <a
            href="https://www.linkedin.com/in/grace-karina-5a2688259"
            target="_blank"
            className="bg-blue-800 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 transition cursor-pointer border border-black/10"
          >
            Let&apos;s Connect<BsLinkedin />
          </a>
          <Link 
            href="https://open.spotify.com/user/hum8h8pawch3picc2tdzqxuar?si=1c9e5768fccd4bcd"
            target="_blank"
            className="bg-green-600 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 transition cursor-pointer border border-black/10"
          >
            Spotify!! ^__^ <BsSpotify />
          </Link>
        </motion.div>
      </section>
    );
  }
  