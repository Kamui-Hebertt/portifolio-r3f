import '../index.css';
import { Canvas } from '@react-three/fiber';

const MainContainer = () => {
  const bgColor = ({gl}) => {
    gl.setClearColor('#000000', 1)
  };
  return (
    <Canvas
    id="canvas"
    style={{position: 'fixed'}}
    camera={{position: [20, 3 , 5], fov: 25}}
    onCreated={bgColor} >

    </Canvas>
  )
}

export default MainContainer
