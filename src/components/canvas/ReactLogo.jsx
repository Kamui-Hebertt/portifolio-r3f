import { useGLTF } from "@react-three/drei"
import { useMemo } from "react";

const ReactLogo = () => {
  const reactLogo = useMemo(()=> useGLTF('./reactLogo/scene.gltf'), []);
   
  return (
    <mesh>
      <primitive
      object={reactLogo.scene}
      rotation={[0, -5, 0]}
      scale={0.65} />

    
    </mesh>
  )
}

export default ReactLogo;