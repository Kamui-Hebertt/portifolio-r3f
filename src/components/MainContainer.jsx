import '../index.css';
import { Canvas } from '@react-three/fiber';
import ReactLogo from './canvas/ReactLogo';
import {  Loader } from '@react-three/drei';
import StarsAnimated from './StarsAnimated';
import Hero from './Hero';
import { Suspense, useRef, useState } from 'react';
import About from './About';
import Projects from './Projects';
import WorkExperience from './WorkExperience';
import Contact from './Contact';
import Earth from './canvas/Earth';


const MainContainer = () => {
 const [isLoaded, setIsLoaded] = useState();

 const handleCreated = () => {
  setIsLoaded(true);
 };

 const canvasRef = useRef();

  // const bgColor = ({gl}) => {
  //   gl.setClearColor('#000000', 1)
  // };


  return (
    <>
    <Canvas
      ref={canvasRef}
      id="canvas"
      style={{ position: 'fixed' }}
      camera={{ position: [20, 3, 5], fov: 25 }}
      onCreated={handleCreated}>
        <color attach="background" args={['black']}/>
      <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
      <spotLight intensity={1} color={0x61dbfb} position={(-20, 50, 10)} />
  
      <Suspense fallback={null}>
      <ReactLogo />
      <Earth />
      </Suspense>
      <StarsAnimated />
      </Canvas>
      <Loader />
      <Hero isLoaded={isLoaded} />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
    </>
  )
}

export default MainContainer
