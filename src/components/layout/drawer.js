import React from "react"

import Logo from "../logo";
import Styles from "./drawer.module.scss"

const DrawerLink = props => (
  <a className="mdc-list-item" href={`/#${props.target}`}>
    <span className="mdc-list-item__text">{props.title}</span>
  </a>
)

export default () => (
  <>
    <aside className="mdc-drawer mdc-drawer--modal">
      <div className="mdc-drawer__header">
        <span className={`${Styles.title} mdc-drawer__title`}>
          <a href="/">
            <Logo context="drawer" />
          </a>
        </span>
      </div>

      <div className="mdc-drawer__content">
        <nav className="mdc-list">

          <DrawerLink target="mission-statement" title="Leitbild" />
          <DrawerLink target="about-me" title="Über mich" />
          <DrawerLink target="contact" title="Kontakt" />
          <DrawerLink target="network" title="Netzwerk" />

        </nav>
      </div>
    </aside>

    <div className="mdc-drawer-scrim" />
  </>
)
