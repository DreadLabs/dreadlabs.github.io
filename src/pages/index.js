import React from "react"

import {MDCMenu} from "@material/menu"

import Contact from "../components/contact_simple"
import Layout from "../components/layout"
import Network from "../components/network"
import Resume from "../components/resume"
import Vcard from "../components/vcard"

class Index extends React.Component {
  componentDidMount() {
    let tagState = 'off';
    const tags = document.querySelectorAll('.resume__position-tags');
    const tagToggle = document.querySelector('#resume-tags-toggle__menu ul li');
    const tagToggleState = tagToggle.querySelector('.resume-tags-toggle__state');

    const menu = new MDCMenu(document.getElementById('resume-tags-toggle__menu'));
    const button = document.getElementById('resume-tags-toggle__button');
    button.addEventListener('click', (event) => {
      menu.open = true;
    });

    tagToggle.addEventListener('click', function() {
      [].map.call(tags, function(tag) {
        tag.classList.toggle('resume__position-tags--on');
      });
      if (tagState === 'off') {
        tagToggleState.innerHTML = 'deaktivieren';
        tagState = 'on';
      } else if (tagState === 'on') {
        tagToggleState.innerHTML = 'aktivieren';
        tagState = 'off';
      }
    });
  }

  render() {
    return (
      <Layout>
        <section className="section--center mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <blockquote>
                The function of good software is to make the complex appear to be simple. <cite>Grady Booch</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <Vcard />

        <section id="mission-statement"
                 className="section--center mdc-layout-grid mdl-shadow--4dp mdl-color--indigo-900 mdl-color-text--white">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <h2>Leitbild</h2>

              <p>Ich entwickle <strong>Software nach Ihren Wünschen</strong> mit hohen Anforderungen an
                <strong>Qualität, Sicherheit und Zuverlässigkeit</strong>, testgetrieben und unter
                Berücksichtigung Ihrer Geschäftsdomäne in Anlehnung an Domain Driven
                Design-Praktiken.</p>

              <p>Die <strong>Pflege und Weiterentwicklung Ihrer bestehenden Softwarelösungen</strong> sind
                für mich ebenso bedeutsam wie die Integration von <strong>neuen Technologien, wenn
                  es sinnvoll ist</strong> und es die Anforderungen zulassen.</p>
            </div>
          </div>
        </section>

        <section className="section--center mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <h3 className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">Mein Angebot</h3>
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
              <p>Ich unterstütze Sie bei …</p>
              <ul>
                <li>der Konzeption &amp; Planung von kleinen bis mittelgroßen Softwareprojekten</li>
                <li>der Softwareentwicklung und -architektur mit agilen Vorgehensmodellen, auch im Team</li>
                <li>der Pflege und Weiterentwicklung Ihrer bestehenden Softwarelösungen</li>
                <li>der Verbesserung der Softwarequalität und -stabilität</li>
              </ul>
            </div>
          </div>
        </section>


        <section id="about-me" className="section--center mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <h3 className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">Über mich</h3>

            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
              <p>Bereits seit 1999 entwickle ich Software in verschiedenen Programmiersprachen.
                Durch mein Studium der Informatik und Wirtschaftsinformatik und meine <strong>langjährige
                  Erfahrung</strong> in Unternehmen unterschiedlicher Größe und Aufgabengebieten decke
                ich die umfangreiche Palette der Anforderungen an einen Softwareentwickler sehr
                gut ab:</p>

              <ul>
                <li>technische Konzeption, Planung und Kommunikation mit allen Interessensgruppen</li>
                <li>Continuous Integration und Continous Delivery</li>
                <li>Profiling und statische Codeanalyse</li>
                <li>infrastrukturnahe Tätigkeiten ("DevOps")</li>
              </ul>
            </div>

            <h4 className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">Berufserfahrung</h4>
          </div>
        </section>

        <div className="mdl-color--grey-100">
          <div className="mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-menu-surface--anchor mdl-typography--text-right resume-tags-toggle">
                <button id="resume-tags-toggle__button" className="mdc-icon-button">
                  <i className="material-icons">more_vert</i>
                </button>
                <div id="resume-tags-toggle__menu" className="mdc-menu mdc-menu-surface" tabIndex="-1">
                  <ul className="mdc-list mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                      role="menu"
                      aria-hidden="true"
                      aria-orientation="vertical">
                    <li className="mdc-list-item">
                      <span className="mdc-list-item__text">
                        Recruiter-Modus <strong><span className="resume-tags-toggle__state">aktivieren</span></strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section className="section--center mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <Resume/>
              </div>
            </div>
          </section>
        </div>

        <section id="contact" className="section--center mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <h2 className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">Kontakt</h2>

            <Contact/>
          </div>
        </section>

        <section id="network" className="section--center section__network mdc-layout-grid">
          <h2 className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">Netzwerk</h2>
        </section>

        <div className="mdl-color--grey-50">
          <Network/>
        </div>
      </Layout>
    )
  }
}

export default Index
