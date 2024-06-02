"use client";
import { Description, Title } from "@radix-ui/react-dialog";
  import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGit, FaFigma } from "react-icons/fa";
  import { SiTailwindcss, SiNextdotjs} from "react-icons/si";

  //about data
  const about ={
    Title: "About me",
    Description: "A dedicated personality with comprehensive knowledge in planning, organizing and implementing, seeking a suitable position where this knowledge in sure to add value to the organization as well as my career. Proven ability to work independently and as part of a team to deliver projects on time",
    info: [
      {
        fieldName: "Name:",
        fieldValue: "Mahmudul Hassan Ratul",
      },
      {
        fieldName: "Phone:",
        fieldValue: "01521431510",
      },
      {
        fieldName: "Experience:",
        fieldValue: "1 year+",
      },
      {
        fieldName: "Email:",
        fieldMail: "mahmudulhassanratul.dev@gmail.com",
      },
    ]
  };
    //experience data

    const experience = {
      icon:"/assets/resume/badge.svg",
      Title: "Experience",
      Description:"I have been working with different technologies and have extensive experience in developing web applications. I am always looking for new and challenging projects to work on.",
        items: [
          {
            company: "Codechef",
            position: "Front-End Developer",
            duration: "2023 - Present",
          },
          {
            company: " Farazy Hospital Ltd.",
            position: "System & Network Engineer",
            duration: "2022 - 2023",
          },
          {
            company: "Codechef",
            position: "Intern",
            duration: "2021 - 2022",
          },
          {
            company: "Digital Ocean",
            position: "UI/UX Developer",
            duration: "2020 - 2021",
          },
          {
            company: "Somokaron Coaching ",
            position: "Teaching Assistant",
            duration: "2016 - 2021",
          },
        ]
    
    };

    //Education data

    const education = {
      icon:"/assets/resume/ca.svg",
      Title: "My Education",
      Description:"I have been study in Computer Science and have extensive experience in developing web applications. I am always looking for new and challenging projects to work on.",
        items: [
          {
            institution: "National University",
            Degree: "CSE",
            
          },
          {
            institution: "Birshreshtha Munshi Abdur Rouf Public College",
            Degree: "HSC",
          },
          {
            institution: "Jatrabari Ideal School and College",
            Degree: "SSC",
          },

        ],
    
    };

    //Skills data
    const skills = {
      Title: "My Skills",
      Description:"I have been working with different technologies and have extensive experience in developing web applications. I am always looking for new and challenging projects to work on.",
      skillList: [
        {
          name: "HTML 5",
          icon: <FaHtml5 />,
        },
        {
          name: "CSS",
          icon: <FaCss3 />,
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
        },
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
        {
          name: "Figma",
          icon: <FaFigma />,
        },
        {
          name: "Git",
          icon: <FaGit />,
        },
      ],
    };

    import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

    import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

    import { ScrollArea } from "@/components/ui/scroll-area";
    import { motion } from "framer-motion";

    const Resume = () => {
  return (
  <motion.div 
   initial={{ opacity: 0 }}
   animate={{ 
    opacity: 1, 
    transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
   }}
   
   className= "min-h-[80vh] flex  justify-center items-center py-12 xl:py-0"
   
   >
    
    <div className="container mx-auto">
       <Tabs 
       defaultValue="experience"
       className="flex flex-col xl:flex-row gap-[60px]"
       >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:-mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}

          <div className="min-h-[70vh] w-full">
          
          {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.Title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{experience.Description}</p>
              </div>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                  {experience.items.map((item, index) => {
                    return (
                       <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-2xl  ">{item.company}</span>
                      <h3 className="max-w-[260px] min-h-[60px]
                      text-center lg:text-left text-accent">{item.position}</h3>
                      <div className="flex items-center gap-0">
                        {/* dot */}
                        <span className="flex items-center">
                          <p className="text-md text-white/60  ">{item.duration}</p>
                        </span>
                      </div>
                    </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>

             {/* education */}
             <TabsContent value="education" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.Title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{education.Description}</p>
              </div>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                  {education.items.map((item, index) => {
                    return (
                       <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-xl  ">{item.institution}</span>
                      <h3 className="max-w-[260px] min-h-[60px]
                      text-center lg:text-left text-accent">{item.Degree}</h3>
                      <div className="flex items-center gap-0">
                        {/* dot */}
                        <span className="flex items-center">
                          <p className="text-md text-white/60  ">{item.duration}</p>
                        </span>
                      </div>
                    </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            
             {/* skill */}
             <TabsContent value="skills" className="w-full h-full ">
              <div className='flex flex-col gap-[30]'>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.Title}</h3>
                  <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{skills.Description}</p>
                </div>
                <ul className="grid grid-cols-2 mt-5 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center items-center xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px]  bg-[#232329] rounded-xl transition-all duration-500  flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            
             {/* about */}
             <TabsContent value="about" className="w-full text center xl:text-left">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.Title}</h3>
                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">{about.Description}</p>
                <ul className="grid grid-cols-1  xl:grid-cols-2  gap-y-6 justify-center items-center max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:xl:justify-start gap-4">
                        <span className='text-white/60'> {item.fieldName}</span>
                        <span className='text-md'>{item.fieldValue}</span>
                        <span className='text-md text-accent underline underline-offset-4'> <a href="mailto:">{item.fieldMail}</a></span>
                      </li>
                    );
                  })}
                </ul>      
              </div>
            </TabsContent>
          </div>

       </Tabs>
    </div>
  
    </motion.div>
  );
};

export default Resume;