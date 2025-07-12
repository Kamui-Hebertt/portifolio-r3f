import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import '../index.css';

const About = () => {
  const aboutVariants = {
    visible: { opacity: 1, scale: 1, transition: {duration: 1}},
    hidden: {opacity: 0, scale: 0},
  };


    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(()=> {
      if(inView){
        controls.start('visible');
      }
    }, [controls, inView]);


    const DowloadResume = () => {
      const resumeFilePath = '/cv-en.pdf';
      const downloadLink = document.createElement('a');
      downloadLink.href = resumeFilePath;
      downloadLink.download = 'resume-en.pdf'; 
      downloadLink.click();
    }

  return(
    <section className="relative w-screen h-screen mt-20">
      <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={aboutVariants}
      className="absolute left-[0%] mx-3 md:left-[10%] xl:left-[25%] md:w-1/2 xl:w-1/3 text-white py-3 glowing-shadow border rounded-lg text-center glass-background">
        <h1 className="text-5xl lg:text-7x1 fredoka-font">About <span className="light-blue-text font-semibold"> Me</span></h1>
        <p className="mt-3 mx-3 text-base text-[0.8rem]">I'm a passionate and skilled technologist . I thrive on exploring new opportunities to learn and grow. In addition to
        my professional experience, I actively teach coding classes, giving back to the community. With my own freelance
        business, I excel in communication, leadership, and project management. I continuously update my skills to deliver
        top-notch solutions. I'm excited to contribute to innovative projects, learn from new experiences, and make a
        positive impact in the tech field. Let's connect and create something great!</p>
        <button onClick={DowloadResume} className="w-30 h-10 hover-glowing-shadow-and-scale mt-3 pl-2  pr-2 ">Download Resume</button>
      </motion.div>

      <div className="absolute flex flex-col bottom-[13%] left-[50%] translate-x-[-50%]">
          <div className="slide-bottom">
            <div className="down-arrow"></div>
            <div className="down-arrow"></div>
            <div className="down-arrow"></div>
          </div>
        </div>

    </section>
  )
}

export default About;