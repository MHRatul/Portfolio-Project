"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description, Title } from "@radix-ui/react-dialog";

const services =[
  {
    num: "01",
    title: "Web Development",
    Description: " I build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "#",
  },
  {
    num: "02",
    title: "UI/UX Design",
    Description: "Make websites and applications more easy to use and engaging, with user interfaces that are easily navigable and intuitive.",
    href: "#",
  },
  {
    num: "03",
    title: "Logo Design",
    Description: " I create custom logos and brand identity that represent company and its values.",
    href: "#",
  },
  {
    num: "04",
    title: "SEO",
    Description: " I optimize website for search engines to rank higher in search engine results.",
    href: "#",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
      <section className=" min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1 ,
              transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[60px]"
            >
              {services.map((service, index) => {
                 return (
                 <div key={index} className="flex flex-col justify-center gap-6 group">
                      {/* top */}
                      <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-bold text-outline text-transparent group-hover:text-accent-hover
                        transition-all duration-500">
                          {service.num}
                          </div>
                        <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white
                        group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                          <BsArrowDownRight className="text-primary text-3xl"/>
                        </Link>
                      </div>
                      {/* title */}
                      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover
                      transition-all duration-500">{service.title}</h2>
                      {/* description */} 
                      <p className="text-white/60">{service.Description}</p>
                      {/* border */}
                      <div className="border-b border-slate-500 w-full"></div>
                 </div>
                 );
              })}
            </motion.div>
        </div>
      </section>
      );

}

export default Services;