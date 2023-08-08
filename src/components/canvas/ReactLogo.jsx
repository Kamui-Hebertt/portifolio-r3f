import { useAnimations, useGLTF } from "@react-three/drei"

import { useEffect, useMemo } from "react";


const actionNames = [
  'SphereAction',
  'TorusAction1',
  'TorusAction2',
  'TorusAction3',
]

const ReactLogo = () => {
  const reactLogo = useMemo(()=> useGLTF('./reactLogo/scene.gltf'), []);
   

  // animation
  const animations = useAnimations(reactLogo.animations, reactLogo.scene);


  useEffect(()=> {
    actionNames.forEach((actionsName) => {
      const action = animations.actions[actionsName];
      action.play();
    })
  },[animations]);


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