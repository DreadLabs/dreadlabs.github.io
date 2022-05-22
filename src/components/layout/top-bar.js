import React from "react"
import {StaticImage} from "gatsby-plugin-image"

import * as Styles from "./top-bar.module.scss"

/*
const AppBarLink = props => (
  <a className="mdc-tab mdc-tab--min-width" role="tab" href={`/#${props.target}`}>
    <span className="mdc-tab__content">
      <span className="mdc-tab__text-label">{props.title}</span>
    </span>
  </a>
)
*/

const Topbar = () => (
    <header id="app-bar" className={`${Styles.elevated} mdc-top-app-bar mdc-top-app-bar--fixed`}>
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button
              className={`${Styles.elevated__button} material-icons mdc-top-app-bar__navigation-icon mdc-icon-button`}
              aria-label="Navigation öffnen">menu</button>

          <div className={`${Styles.title} mdc-top-app-bar__title`}>
            <a href="/" title="zur Startseite">
                <StaticImage
                    src="../../images/logo/Logo-Thomas-Juhnke-Softwareentwickler.svg"
                    alt=""
                    width={48}
                    height={48}
                    placeholder="blurred"
                />
            </a>
          </div>
        </section>

        {/*
        <section className={`${Styles.elevated__toolbar} mdc-top-app-bar__section mdc-top-app-bar__section--align-end`} role="toolbar">
          <div className="mdc-tab-bar" role="tablist">
            <div className="mdc-tab-scroller">
              <div className="mdc-tab-scroller__scroll-area">
                <div className={`${Styles.elevated__toolbarLinkList} mdc-tab-scroller__scroll-content`}>

                  <AppBarLink target="mission-statement" title="Leitbild" />
                  <AppBarLink target="about-me" title="Über mich" />
                  <AppBarLink target="contact" title="Kontakt" />
                  <AppBarLink target="network" title="Netzwerk" />

                </div>
              </div>
            </div>
          </div>
        </section>
        */}
      </div>
    </header>
)

export default Topbar
