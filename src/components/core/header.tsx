import * as React from "react"
import * as styles from "./header.module.scss"

export default function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>Prototype</div>
    </header>
  )
}
