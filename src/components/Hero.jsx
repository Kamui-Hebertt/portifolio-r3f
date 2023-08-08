import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";



const Hero = () => {

  const h1variants = {
    visible: {
      opacity: 1,
      scale:1,
      transition: {
        type:'spring',
        bounce: 0.5,
        satisfies:100,
        duration: 1,
        delay: 1,
      },

    },
    hidden : { opacity:0, scale:0.5 }
  }
  
  return(
    <section className="w-screen h-screen mx-auto">
      <div className="absolute left-[5%] top-[5%] xl:top-[14%] mx-auto fredoka-font text-white">
      <motion.h1 variants={h1variants} className="text-5xl lg:text-7xl">Hi, i'm <span className="hover-text-glow light-blue-text font-semibold">Hebertt</span></motion.h1>
        </div>  

    </section>
  )
}


export default Hero;