import * as THREE from "three"
import * as React from "react"
import { useRef, useState } from "react"
import { useFrame, Vector3 } from "@react-three/fiber"

export interface BoxProps {
  position: Vector3
}

export default function Box(props: BoxProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x += 0.01))

  return (
    <mesh
      ref={mesh}
      scale={active ? 1.5 : 1}
      position={props.position}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  )
}
