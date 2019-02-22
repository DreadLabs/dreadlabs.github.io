import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"
import SiteMetadata from "../components/site-metadata"

const FooterLink = props => (
  <li><Link to={props.to}>{props.children}</Link></li>
)

export default ({ children }) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
    <SiteMetadata />
    <header className="mdl-layout__header mdl-color--white">
      <div className="mdl-layout__header-row">
        <div className="mdl-layout__title">
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className="mdl-layout-spacer mdl-layout--large-screen-only"></div>
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <a className="mdl-navigation__link" href="/#mission-statement">Leitbild</a>
          <a className="mdl-navigation__link" href="/#about-me">Über mich</a>
          <a className="mdl-navigation__link" href="/#contact">Kontakt</a>
          <a className="mdl-navigation__link" href="/#network">Netzwerk</a>
        </nav>
      </div>
    </header>

    <div className="mdl-layout__drawer">
      <span className="mdl-layout__title mdl-color--white">
        <a href="/">
            <Logo />
        </a>
      </span>
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="/#mission-statement">Leitbild</a>
        <a className="mdl-navigation__link" href="/#about-me">Über mich</a>
        <a className="mdl-navigation__link" href="/#contact">Kontakt</a>
        <a className="mdl-navigation__link" href="/#network">Netzwerk</a>
      </nav>
    </div>

    <main className="mdl-layout__content">
      <div id="top" className="page-content">
        {children}
      </div>

      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <ul className="mdl-mini-footer__link-list">
            <FooterLink to="/">Startseite</FooterLink>
            <FooterLink to="/impressum">Impressum</FooterLink>
          </ul>
        </div>

        <div className="mdl-mini-footer__right-section">
          <a className="mdl-button mdl-js-button mdl-button--icon" href="#top" title="nach oben">
            <i className="fa fa-angle-up material-icons"></i>
          </a>
          <a className="mdl-button mdl-js-button mdl-button--icon" href="https://www.xing.com/profile/Thomas_Juhnke"
             title="Xing">
            <i className="fa fa-xing material-icons"></i>
          </a>
          <a className="mdl-button mdl-js-button mdl-button--icon" href="https://github.com/DreadLabs" title="GitHub">
            <i className="fa fa-github material-icons"></i>
          </a>
          <a className="mdl-button mdl-js-button mdl-button--icon" href="https://twitter.com/dreadwarrior"
             title="Twitter">
            <i className="fa fa-twitter material-icons"></i>
          </a>
        </div>
      </footer>
    </main>
  </div>
)
