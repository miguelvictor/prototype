import * as React from "react"

import * as styles from "./symbols-pane.module.scss"

export default function SymbolsPane() {
  return (
    <div className={styles.container}>
      <div className={styles.symbol}>
        <p className={styles.label}>TERMINATOR</p>
        <div className={styles.terminator}></div>
      </div>
      <div className={styles.symbol}>
        <p className={styles.label}>DECISION</p>
        <div className={styles.decision}></div>
      </div>
      <div className={styles.symbol}>
        <p className={styles.label}>PROCESS</p>
        <div className={styles.process}></div>
      </div>
      <div className={styles.symbol}>
        <p className={styles.label}>CONNECTOR</p>
        <div className={styles.connector}></div>
      </div>
      <div className={styles.symbol}>
        <p className={styles.label}>INPUT/OUTPUT</p>
        <div className={styles.io}></div>
      </div>
    </div>
  )
}
