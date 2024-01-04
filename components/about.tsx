"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', damping: 10, stiffness: 100 }}
      id='aboutme'
      ref={ref}
    >
      <SectionHeading>About Me!! ^___^</SectionHeading>
      <p className='mb-3'>
      My name is <span className="font-bold">Grace Karin</span>, 
      a first-year <span className="font-bold">Computer Science </span>
      student currently pursuing my degree at <span className="font-bold">University of Indonesia</span>. 
      My studies inspire my love for technology and I&apos;m especially interested in the exciting world of <span className="font-bold">web development</span>,
      <span className="font-bold"> data science</span>, 
      and the strategic intersections of <span className="font-bold">technology and business</span>.
      When I&apos;m not deeply engaged in programming, you&apos;ll catch me solving <span className="font-bold">Rubik&apos;s Cubes</span> :D
      As a <span className="font-bold">coffee enthusiast</span> and <span className="font-bold">coding explorer</span>, 
      I&apos;m excited about the endless possibilities that lie ahead in my exploration of web development, data science, and business.
      Let&apos;s connect and share insights about these exciting realms of technology!
      </p>
    </motion.section>
  );
}
