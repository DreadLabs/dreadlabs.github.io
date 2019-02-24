import React from "react"
import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from "@material/top-app-bar";

import Logo from "./logo"
import SiteMetadata from "../components/site-metadata"

class Layout extends React.Component {
  componentDidMount() {
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    const listEl = document.querySelector('.mdc-drawer .mdc-list');

    topAppBar.setScrollTarget(document.getElementById('top'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
    listEl.addEventListener('click', (event) => {
      drawer.open = false;
    });
  }

  render() {
    const { children } = this.props

    return (
      <div className="mdl-dreadlabs">
        <SiteMetadata />

        <aside className="mdc-drawer mdc-drawer--modal">
          <div className="mdc-drawer__header">
            <span className="mdc-drawer__title">
               <a href="/">
                  <Logo />
              </a>
            </span>
          </div>
          <div className="mdc-drawer__content">
            <nav className="mdc-list">
              <a className="mdc-list-item" href="/#mission-statement">
                <span className="mdc-list-item__text">Leitbild</span>
              </a>
              <a className="mdc-list-item" href="/#about-me">
                <span className="mdc-list-item__text">Über mich</span>
              </a>
              <a className="mdc-list-item" href="/#contact">
                <span className="mdc-list-item__text">Kontakt</span>
              </a>
              <a className="mdc-list-item" href="/#network">
                <span className="mdc-list-item__text">Netzwerk</span>
              </a>
            </nav>
          </div>
        </aside>

        <div className="mdc-drawer-scrim" />

        <div>

          <header id="app-bar" className="mdc-top-app-bar mdc-top-app-bar--fixed">
            <div className="mdc-top-app-bar__row">
              <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <button className="demo-menu material-icons mdc-top-app-bar__navigation-icon">menu</button>
                <div className="mdc-top-app-bar__title">
                  <a href="/">
                    <Logo />
                  </a>
                </div>
              </section>

              <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                <div className="mdc-tab-bar" role="tablist">
                  <div className="mdc-tab-scroller">
                    <div className="mdc-tab-scroller__scroll-area">
                      <div className="mdc-tab-scroller__scroll-content">
                        <a className="mdc-tab mdc-tab--min-width" role="tab" tabIndex="0" href="/#mission-statement">
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label">Leitbild</span>
                      </span>
                        </a>
                        <a className="mdc-tab mdc-tab--min-width" role="tab" href="/#about-me">
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label">Über mich</span>
                      </span>
                        </a>
                        <a className="mdc-tab mdc-tab--min-width" role="tab" href="/#contact">
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label">Kontakt</span>
                      </span>
                        </a>
                        <a className="mdc-tab mdc-tab--min-width" role="tab" href="/#network">
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label">Netzwerk</span>
                      </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </header>

          <main className="mdc-top-app-bar--fixed-adjust">
            <div id="top" className="page-content">
              {children}
            </div>

            <footer className="mdc-layout-grid">
              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-10">
                  <div className="mdc-tab-bar" role="tablist">
                    <div className="mdc-tab-scroller">
                      <div className="mdc-tab-scroller__scroll-area">
                        <div className="mdc-tab-scroller__scroll-content">
                          <a className="mdc-tab mdc-tab--min-width" role="tab" href="/">
                        <span className="mdc-tab__content">
                          <span className="mdc-tab__text-label">Startseite</span>
                        </span>
                          </a>
                          <a className="mdc-tab mdc-tab--min-width" role="tab" href="/impressum">
                        <span className="mdc-tab__content">
                          <span className="mdc-tab__text-label">Impressum</span>
                        </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mdc-layout-grid__cell--span-2">
                  <a className="mdc-icon-button" href="#top" title="nach oben">
                    <i className="fa fa-angle-up"></i>
                  </a>
                  <a className="mdc-icon-button" href="https://www.xing.com/profile/Thomas_Juhnke" title="Xing">
                    <i className="fa fa-xing"></i>
                  </a>
                  <a className="mdc-icon-button" href="https://github.com/DreadLabs" title="GitHub">
                    <i className="fa fa-github"></i>
                  </a>
                  <a className="mdc-icon-button" href="https://twitter.com/dreadwarrior" title="Twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
              </div>
            </footer>

          </main>
        </div>
      </div>
    )
  }
}

export default Layout

