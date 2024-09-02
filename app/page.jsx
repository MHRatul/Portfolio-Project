import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            
            <h1 className="text-4xl h1 mb-6"> Hello I'm <br /> <span className="shadow-gray-500">Mahmudul Hassan</span> <br />
              <span className="text-accent text-pretty text-5xl xl:text-6xl"> Ratul</span></h1>
              <span className="text-xl text-slate-400 italic">Web Developer</span>
            <p className="max-w-[500px] leading-snug mb-9 gap-0 text-white/80">
              I excel at crafting elegant digital experiences that delight and inform. I am passionate about building excellent websites that improves the lives of those around me.
            </p>

            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 "
              >
                <a href="https://drive.google.com/file/d/14cKdS4YOT_yBUxyVjzUzk-Nj1iCsI_Ad/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
                <FiDownload className="text-xl" />

              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full
                  flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary duration-300"  />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
