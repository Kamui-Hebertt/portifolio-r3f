import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { EffectCube, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';

const slides = [
  {
    id: 0,
    JobTitle: "Full Stack Web Developer Freelancer (Co-founder)",
    companyName: "Mirai Software Development",
    datesWorked: "March 2018 to August 2023",
    jobDescription: `At Mirai Software Development, we craft cutting-edge web applications using technologies like React, Redux, Next.js, TypeScript, and Docker. Our team pushes the boundaries of what's possible in web development, shaping the future of technology. We also leverage tools like GitHub for collaboration, SCSS/Sass for stylish designs, and testing frameworks like Testing RTL for code reliability. Our expertise extends to Node.js, MySQL, MongoDB, REST API, and GraphiQL for seamless data management.`
  },
  {
    id: 1,
    JobTitle: "Front-end Developer (Part-time)",
    companyName: "Pets IA",
    datesWorked: "December 2020 to September 2023",
    jobDescription: `Since I've been working part-time as a front-end developer at Pets IA. Collaborating with a talented team, our goal was to create a captivating website for pet lovers. Using Vue and TypeScript, I brought visually stunning and intuitive web pages to life, celebrating our love for furry companions.`
  },
  {
    id: 2,
    JobTitle: "Front-end Developer (Part-time)",
    companyName: "Dev Launchers",
    datesWorked: "March 2022 to September 2023",
    jobDescription: `I've joined Dev Launchers as a part-time full-stack web developer. In this role, I engaged in project management and prioritized customer satisfaction. Alongside a dedicated team, we undertook exciting projects for clients, turning their visions into reality. Utilizing technologies like Next.js, Node.js, Strapi and Docker, we built dynamic web solutions that exceeded client expectations.`
  },
  {
    id: 3,
    JobTitle: "Full Stack Developer (Full-time)",
    companyName: "VIP Seguro",
    datesWorked: "April 2022 to Present",
    jobDescription: `As a Full Stack Developer at VIP Seguro, my responsibilities extend to deploying and maintaining the robust betting platform. I specialize in designing intuitive layouts using React for the front end and Adonis for the backend, ensuring a seamless user experience. Leveraging various deployment technologies and frameworks, I streamline the release and management of our applications, contributing to the continuous enhancement and optimization of VIP Seguro's online betting services and other platforms. Webpage: https://vipbet.digital/`
  },
  {
    id: 4,
    JobTitle: "Web Developer (Part-time)",
    companyName: "ZhuFangJie 房租街",
    datesWorked: "September 2022 to August 2023",
    jobDescription: `Maintained and updated the company’s official website 54zfj.cn, which helps Chinese students find housing and accommodation overseas. Implemented front-end fixes and performance improvements to enhance user experience. Assisted with content updates and basic SEO optimizations to support visibility in search engines. Collaborated remotely with the Chinese team to ensure website stability and responsiveness across devices.`
  }
]


const WorkExperience = () => {

  const Card = ({
    JobTitle, companyName, datesWorked, jobDescription
  }) => {
    return(
    <div className="font-text-9 border-1 w-full h-full glass-background rounded-lg flex flex-col glowing-shadow bg-[#111827]/90 px-5 overflow-y-auto">
        <div className="text-white flex flex-col justify-start items-center mx-1 my-5">
          <h2 className="text-lg text-center mb-5">{JobTitle}</h2>
          <h3 className="text-lg text-center mb-5">{companyName}</h3>
          <p className="text-center mb-5 text-[0.9rem]">{datesWorked}</p>
          <p className="text-center  border-t-2 pt-7 text-[0.8rem]">{jobDescription}</p>
        </div>
      </div>
    )
  }


  return(
    <section className='relative w-screen h-screen overflow-hidden '>
      <div className='w-full h-full flex flex-col justify-center items-center text-white z-10 my-5 text-11'>
        <h1 className='text-5xl lg:text-7xl mt-10 fredoka-font text-center mx-1'>
          Work
          <span className=' light-blue-text font-semibold '> Exp</span>
          erience
        </h1>
        <p className="mt-5">Swipe or drag the items</p>
    <div className="w-[98%] lg:w-1/4 my-10 h-[500px] perspective-[1200px]">
  <Swiper
    grabCursor={true}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{
      delay: 6000,
      disableOnInteraction: false
    }}
    speed={2000}
    loop={true}
    effect={'cube'}
    cubeEffect={{
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
      slideShadows: true,
    }}
    modules={[EffectCube, Autoplay]}
    className="mySwiper h-full"
  >
    {slides.map((slide) => (
      <SwiperSlide key={slide.id} className="h-full">
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