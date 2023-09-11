import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/autoplay'

import thumbNail from '../assets/thumbNail.jpg'

const slides = [
  // {
  //   id: 0,
  //   imageSrc: thumbNail,
  //   projectName: 'Project 1',
  //   projectLink: '#',
  //   projectDescription:
  //     'This is the description for project 1. You can talk about the technologies you used for the project, what you learned, or maybe even make a link to a blog post you wrote about the projec that goes into more details than can be placed in a card! ',
  //   githubLink: '#',
  // },
  {
    id: 1,
    imageSrc: 'https://uploaddeimagens.com.br/images/004/401/999/full/Screenshot_%281%29.png?1679456233',
    projectName: 'Mirai',
    projectLink: 'https://miraisoftware.com.br/',
    projectDescription:
      'Our company current web site',
    githubLink: '#',
  },
  {
    id: 2,
    imageSrc: 'https://uploaddeimagens.com.br/images/004/316/589/full/3ebdbf24-b778-4848-bac5-889519778124.png?1674864175',
    projectName: 'Recipe app',
    projectLink: 'recipe-app-react-jade.vercel.app/',
    projectDescription:
      'A recipe app, developed by me and my team, RTL test was implemented in this projects, (You can sign in with any email and any password with at least 10 characters)',
    githubLink: 'https://github.com/Kamui-Hebertt/recipe-app-react',
  },
  {
  
    id: 3,
    imageSrc: 'https://uploaddeimagens.com.br/images/004/572/013/full/Screenshot_%28205%29.png?1691632317',
    projectName: 'Dev launchers',
    projectLink: 'https://devlaunchers.org/',
    projectDescription:
      'I had a great participation in the construction of the site, I used react, strapi, monorepo and more',
    githubLink: 'https://github.com/dev-launchers/dev-launchers-platform',
  },


  {
    
    id: 4,
    imageSrc: 'https://uploaddeimagens.com.br/images/004/604/188/original/Screenshot_%28248%29.png?1694475768',
    projectName: 'Stumble',
    projectLink: 'https://bright-front-stumble.vercel.app/',
    projectDescription:
      "I've developed this game when i was working for Bright, this game is unfinished because the company has changed its goals. I used react three fiber on this project. ",
    githubLink: 'https://bright-front-stumble.vercel.app/',
  },
]

const Projects = () => {
  const Card = ({
    imageSrc,
    projectName,
    projectLink,
    projectDescription,
    githubLink,
  }) => {
    return (
      <div className='border-4 w-full glass-background rounded-lg overflow-hidden flex flex-col'>
        <div className='w-full'>
          <a href={projectLink} className='block w-full h-full'>
            <img
              src={imageSrc}
              alt={projectName}
              className='w-full object-cover cursor-pointer flex-shrink'
            />
          </a>
        </div>
        <div className='text-white flex flex-col justify-start items-center h-[40%] mx-1 my-1'>
          <h2 className='text-center font-bold my-3'> {projectName}</h2>
          <p className='text-center mb-5'>{projectDescription}</p>
          <div className='flex justify-center mb-1'>
            <a href={githubLink}>
              <img
                src='https://img.icons8.com/material-outlined/24/61dbfb/github.png'
                alt='github link'
                className='w-10 h-10 hover-glowing-shadow-and-scale rounded-full'
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
  return (
    <section className=' relative w-screen h-full '>
      <div className='w-full h-screen flex flex-col justify-center items-center text-white z-10'>
        <h1 className='text-5xl lg:text-7xl mt-10 fredoka-font text-center'>
          Portfolio
          <span className=' light-blue-text font-semibold '> Pro</span>
          jects
        </h1>
        <p className='mt-5'>Swipe or drag the items</p>
        <div className='w-full h-screen sm:w-3/4 lg:w-1/2 xl:w-1/3 my-10 '>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            // Responsive breakpoints
            breakpoints={{
              // when window width is >=
              1: {
                slidesPerView: 1.3,
                spaceBetween: 120,
              },
              400: {
                slidesPerView: 1.3,
                spaceBetween: 200,
              },
              1024: {
                slidesPerView: 1.3,
                spaceBetween: 175,
              },
              1280: {
                slidesPerView: 1.5,
                spaceBetween: 150,
              },
              1580: {
                slidesPerView: 1.5,
                spaceBetween: 175,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 200,
              modifier: 3,
              slideShadows: true,
            }}
            autoHeight={true}
            resizeObserver={true}
            modules={[EffectCoverflow, Autoplay]}>
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Card
                  imageSrc={slide.imageSrc}
                  projectName={slide.projectName}
                  projectLink={slide.projectLink}
                  projectDescription={slide.projectDescription}
                  githubLink={slide.githubLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Projects