"use client"

import CountUp from "react-countup"

const stats =[
    {
        num: 1,
        text: "Years of Experience",
    },
    {
        num: 30,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Technologies used",
    },
    {
        num: 500,
        text: "Code commits",
    },
]

const Stats = () => {
  return(
  <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
    <div className="container mx-auto">
        <div className= "flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index) => {
                return (
                <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                    <CountUp 
                    start={0} 
                    end={item.num} 
                    duration={4} 
                    delay={1} 
                    className="text-4xl font-bold xl:text-6xl"/>
                    <p
                        className={`${
                        item.text.length <15 ? "max-w-[100px]" : "max-w-[150px]"
                        } leading-snug text-accent`}
                    >
                        {item.text}
                    </p>
                </div>
                );
            })}
        </div>
    </div>
  </section>
  );

}

export default Stats