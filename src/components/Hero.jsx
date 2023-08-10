import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";



const Hero = ({isLoaded}) => {
  // const isMobile = window.innerWidth <= 767;
  // const delayTime = isMobile ? 2.8 : 1.8;

  const h1variants = {
    visible: {
      opacity: 1,
      scale:1,
      transition: {
        type:'spring',
        bounce: 0.5,
        satisfies:100,
        duration: 1 ,
        delay: 3.5,
      },

    },
    hidden : { opacity:0, scale:0.5 }
  }



  const h2variants = {
    visible: {
      opacity: 1,
      scale:1.5,
      transition: {
        type:'spring',
        bounce: 0.5,
        satisfies:100,
        duration: 0.8,
        delay: 4.3,
      },

    },
    hidden : { opacity:0, scale:0.5 }
  }


  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(()=> {
    // if(inView) {
    //   controls.start('visible');
    if(isLoaded && inView) {
      controls.start('visible');

    }


  },[controls, inView, isLoaded]);
  
  return(
    <section className="w-screen h-screen mx-auto">
      <div className="absolute left-[5%] top-[5%] xl:top-[14%] mx-auto fredoka-font text-white">
      <motion.h1
       ref={ref}
       animate={controls}
       initial='hidden'
       variants={h1variants}
        className="text-5xl lg:text-7xl">Hi, i'm <span className="hover-text-glow light-blue-text font-semibold">Hebertt</span>
        </motion.h1>
        <motion.h2
       ref={ref}
       animate={controls}
       initial='hidden'
       variants={h2variants}
        className="mt-8 text-3x1 w-3/3 text-center">i'm a full stack web developer 
        </motion.h2>
        </div>  
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


export default Hero;