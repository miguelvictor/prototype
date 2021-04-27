import * as React from "react"

import SimulationPane from "./simulation-pane"
import SymbolsPane from "./symbols-pane"
import WorkspacePane from "./workspace-pane"
import * as styles from "./shell.module.scss"

export default function Shell() {
  return (
    <div className={styles.container}>
      <SymbolsPane />
      <div className={styles.flex}>
        <WorkspacePane />
      </div>
      <SimulationPane />
    </div>
  )
}
