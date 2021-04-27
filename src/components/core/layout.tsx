import * as React from "react"

import Header from "./header"
import "./layout.scss"

export interface LayoutProps {
  readonly children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <main className="container">
      <Header />
      <noscript>
        <p>
          Your browser has Javascript disabled. Please go to your browser
          preferences and enable Javascript in order to use Scratch.
        </p>
      </noscript>
      <div className="children">{props.children}</div>
    </main>
  )
}
