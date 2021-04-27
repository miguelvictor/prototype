import * as React from "react"
import { Canvas } from "@react-three/fiber"

import * as styles from "./simulation-pane.module.scss"
import Box from "./box"

export default function SimulationPane() {
  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}
