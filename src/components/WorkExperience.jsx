import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCube, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';

const slides = [
  {
    id:0,
    JobTitle: `full stack web developer \n
  
    freelacer-(Co-founder)
    `,

    companyName: "Mirai Software",
    datesWorked: "March 2021 to present",
    jobDescription: `At Mirai Software Development, we craft cutting-edge web applications using technologies like React, Redux, Next.js, TypeScript, and Docker. Our
    team pushes the boundaries of what's possible in web development, shaping the future of technology.
    We also leverage tools like GitHub for collaboration, SCSS/Sass for stylish designs, and testing frameworks like Testing RTL for code reliability. Our
    expertise extends to Node.js, MySQL, MongoDB, REST API, and GraphiQL for seamless data management.
    Together, we're on an exhilarating journey, driving innovation in the web development industry.`
  },

  {
    id:1,
    JobTitle: "Front-end Developer (part-time)",

    companyName: "Pets IA ",
    datesWorked: "December 2022 to present",
    jobDescription: `Since I've been working part-time as a front-end developer at Pets IA. Collaborating with a talented team, our goal is to create a
    captivating website for pet lovers. Using Vue and TypeScript, I bring visually stunning and intuitive web pages to life, celebrating our
    love for furry companions.`
    
  },


  {
    id:2,
    JobTitle: "Front-end Developer (part-time)",

    companyName: "Dev Launchers",
    datesWorked: "March 2022 to present",
    jobDescription: `I've also joined Dev Launchers as a part-time full-stack web developer. In this role, I engage in project management and prioritize
    customer satisfaction. Alongside a dedicated team, we undertake exciting projects for clients, turning their visions into reality.
    Utilizing technologies like Next.js, Node.js, Strapi and Docker, we build dynamic web solutions that exceed client expectations.
    `
    
  },


 
]



const WorkExperience = () => {

  const Card = ({
    JobTitle, companyName, datesWorked, jobDescription
  }) => {
    return(
      <div className="mb-[-10rem] border-2 w-[98%] glass-background rounded-lg flex flex-col glowing-shadow">
        <div className="text-white flex flex-col justify-start items-center mx-1 my-5">
          <h2 className="text-lg text-center mb-5">{JobTitle}</h2>
          <h3 className="text-lg text-center mb-5">{companyName}</h3>
          <p className="text-center mb-5">{datesWorked}</p>
          <p className="text-center mb-5 border-t-2 pt-5">{jobDescription}</p>
        </div>
      </div>
    )
  }


  return(
    <section className='relative w-screen h-screen overflow-hidden '>
      <div className='w-full h-full flex flex-col justify-center items-center text-white z-10 my-5'>
        <h1 className='text-5xl lg:text-7xl mt-10 fredoka-font text-center mx-1'>
          Work
          <span className=' light-blue-text font-semibold '> Exp</span>
          erience
        </h1>
        <p className="mt-5">Swipe or drag the items</p>
        <div className="w-[98%] lg:w-1/4 my-10">
          <Swiper
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay:6000,
            disableOnInteraction: false}}

            speed={2000}
            loop={true}
            effect={'cube'}
            cubeEffect={{
              shadow:true,
              shadowOffset:20,
              shadowScale: 0.94,
            }}
            modules={[EffectCube, Autoplay]}
            className='mySwiper'
            >
              {slides.map((slide)=> (
                <SwiperSlide key={slide.id}>
                  <Card
                  JobTitle={slide.JobTitle}
                  companyName={slide.companyName}
                  datesWorked={slide.datesWorked}
                  jobDescription={slide.jobDescription}
                   />
                  </SwiperSlide>
              ))}

          </Swiper>
        </div>
      </div>

    </section>
  )

}

export default WorkExperience;