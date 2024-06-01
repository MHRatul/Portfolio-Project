"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay:.5, duration: 0.5, ease: "easeIn"}} 
        >
            <motion.div 
            initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay:.5, duration: 0.5, ease: "easeInOut"}}
            className="w-[298px] h-[298px] xl:w-[500px] xl:h-[500px] mt-[50px] rounded-full  mix-blend absolute overflow-hidden shadow-2xl">
                <Image src="/assets/3.png" priority quality={100} fill
                alt="me" className="object-contain" />
            </motion.div>
            
        {/* circle */}
        <motion.svg 
             className="w-[295px] h-[355px] xl:w-[490px] xl:h-[530px]" 
             fill="transparent"
             viewBox="0 0 498 450"
             xmlns="http://www.w3.org/2000/svg"
        >
            <motion.circle 
               cx="254" 
               cy="250" 
               r="245" 
               stroke="#00ff99" 
               strokeWidth="4"
               strokeLinecap="round"
               strokeLinejoin="round"
               initial={{ strokeDasharray:"20 10 0 0"}}
               animate={{
                   strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                   rotate:[120, 360],
               }}
               transition={{ 
                repeat: Infinity, 
                repeatType: "reverse",
                duration: 20, 
                ease: "easeInOut"}}
           />
          </motion.svg>
        </motion.div>

    </div>
  )
}

export default Photo