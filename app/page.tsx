"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { WavyBackground } from "@/components/ui/wave";
import { Button } from "@/components/ui/cssbutton";
import Link from 'next/link';

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    },
  };

  return (
    <WavyBackground className="fixed flex flex-col justify-center items-center h-screen">
      <div className="text-white -mb-7 font-yeseva-one text-center">
        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-9xl font-bold">
          calm<span className="text-green-500">X</span>pace
        </motion.p>
        <p className=" font-thin  text-lg md:text-xl lg:text-2xl mt-2">
          Inner <span className='text-green-500 font-semibold'>peace</span> made simple.
        </p>
      </div>
     
      <div className="content-center absolute top-2/3 font-semibold">
      <Link href="temp" passHref>
        <Button 
          borderRadius="1.75rem"
          className="bg-purple bg-opacity-40 bg-purple-500 size-full"
        >
          Join the waitlist 
        </Button>
      </Link>
      </div>

    </WavyBackground>
  );
};

export default ContactPage;
