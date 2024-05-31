"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div>
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full relative mix-blend overflow-hidden shadow-2xl">
                <Image src="/assets/3.png" priority quality={100} fill
                alt="me" className="w-full h-full object-contain" />
            </div>
        </motion.div>
    </div>
  )
}

export default Photo