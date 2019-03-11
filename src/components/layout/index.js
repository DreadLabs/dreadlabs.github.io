import React from "react"
import {MDCDrawer} from "@material/drawer";
import {MDCTopAppBar} from "@material/top-app-bar";
import Lazyload from "vanilla-lazyload/dist/lazyload.es2015"

import Drawer from "./drawer"
import SiteMetadata from "../site-metadata"
import Styles from "./index.module.scss"
import TopBar from "./top-bar"

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

    new Lazyload({elements_selector: '.lazy'});
  }

  render() {
    const { children } = this.props

    return (
      <div className="mdl-dreadlabs">
        <SiteMetadata />

        <Drawer />

        <div>

          <TopBar />

          <main className="mdc-top-app-bar--fixed-adjust">
            <div id="top" className="page-content">
              {children}
            </div>

            <footer className={`${Styles.footer} mdc-layout-grid`}>
              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-9-desktop">
                  <div className="mdc-tab-bar" role="tablist">
                    <div className="mdc-tab-scroller">
                      <div className="mdc-tab-scroller__scroll-area">
                        <div className="mdc-tab-scroller__scroll-content">

                          <a className="mdc-tab mdc-tab--min-width" role="tab" href="/">
                            <span className="mdc-tab__content">
                              <span className={`${Styles.footer__linkListLabel} mdc-tab__text-label`}>Startseite</span>
                            </span>
                          </a>
                          <a className="mdc-tab mdc-tab--min-width" role="tab" href="/impressum">
                            <span className="mdc-tab__content">
                              <span className={`${Styles.footer__linkListLabel} mdc-tab__text-label`}>Impressum</span>
                            </span>
                          </a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${Styles.footer__sectionAlignEnd} mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-3-desktop`}>
                  <a className="mdc-icon-button" href="#top" title="nach oben">
                    <i className={`${Styles.footer__icon} fa fa-angle-up`}></i>
                  </a>
                  <a className="mdc-icon-button" href="https://www.xing.com/profile/Thomas_Juhnke" title="Xing">
                    <i className={`${Styles.footer__icon} fa fa-xing`}></i>
                  </a>
                  <a className="mdc-icon-button" href="https://github.com/DreadLabs" title="GitHub">
                    <i className={`${Styles.footer__icon} fa fa-github`}></i>
                  </a>
                  <a className="mdc-icon-button" href="https://twitter.com/dreadwarrior" title="Twitter">
                    <i className={`${Styles.footer__icon} fa fa-twitter`}></i>
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

