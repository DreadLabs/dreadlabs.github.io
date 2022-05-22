import React from "react"

import * as Styles from "./drawer.module.scss"

const DrawerLink = props => (
  <a className={`${Styles.listItem} mdc-deprecated-list-item`} href={props.target} aria-current="page">
    <span className={`mdc-deprecated-list-item__graphic material-icons`}>{props.icon}</span>
    <span className="mdc-deprecated-list-item__text">{props.title}</span>
  </a>
)

const Drawer = () => (
    <>
        <aside className="mdc-drawer mdc-drawer--modal">
            <div className={`${Styles.header} mdc-drawer__header`}>
                <span className={`${Styles.title} mdc-drawer__title`}>Thomas Juhnke</span>
                <span className={`${Styles.subtitle} mdc-drawer__subtitle`}>Softwareentwickler</span>
            </div>

            <div className={`${Styles.content} mdc-drawer__content`}>
                <nav className="mdc-list">

                    <DrawerLink target="/#mission-statement" title="Leitbild" icon="fingerprint"/>
                    <DrawerLink target="/#about-me" title="Über mich" icon="face"/>
                    <DrawerLink target="/#skills" title="Kompetenzen" icon="explore" />
                    <DrawerLink target="/#professional-expirience" title="Berufserfahrung" icon="grade" />
                    <DrawerLink target="/#contact" title="Kontakt" icon="question_answer"/>
                    <DrawerLink target="/#network" title="Netzwerk" icon="people" />

                    <li role="separator" className="mdc-list-divider"/>

                    <DrawerLink target="/impressum" title="Impressum" icon="policy" />
                </nav>
            </div>
        </aside>

        <div className="mdc-drawer-scrim"/>
    </>
)

export default Drawer
