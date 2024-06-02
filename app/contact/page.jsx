"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaMap } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    Description: "01521431510",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    Description: "mahmudulhassanratul.dev@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    Description: "100, South Jatrabari, Jatrabari",
  },
];

import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent"> Let's Work Together</h3>
                <p className="text-white"> Fill up the form if you have any work order or question and 
                     I will contact you as soon as possible.Thanks
                </p> 
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="First Name"/>
                  <Input type="lastname" placeholder="Last Name"/>
                  <Input type="email" placeholder="Email address"/>
                  <Input type="phone" placeholder="Phone Number"/>
                </div>
                {/* select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service"/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* textarea */}
                <Textarea
                  className="w-full h-[200px]"
                  placeholder="Your message..."
                
                />
                {/* btn */}
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center ">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.Description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
     </div>
    </motion.section>
  );
};

export default Contact;
