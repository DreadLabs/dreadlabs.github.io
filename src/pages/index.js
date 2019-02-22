import React from "react"

import Contact from "../components/contact_simple"
import Layout from "../components/layout"
import Network from "../components/network"
import Portrait from "../components/portrait"
import Resume from "../components/resume"

export default () => (
  <Layout>
    <section className="section--center mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <blockquote className="mdl-color-text--grey-400">The function of good software is to make the complex appear to
          be simple.
          <cite>Grady Booch</cite></blockquote>
      </div>
    </section>

    <section className="section--center mdl-grid vcard">
      <div
        className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-cell--middle mdl-typography--text-center vcard__avatar-container">
        <Portrait />
      </div>
      <div className="mdl-cell mdl-cell--8-col mdl-cell--6-col-tablet mdl-cell--4-col-phone mdl-cell--middle">
        <h1 className="vcard__header mdl-typography--text-uppercase">
          <small className="vcard__header--small">Thomas</small>
          <br/>
          Juhnke<br/>
          <small className="vcard__header--small">Software&shy;entwickler</small>
        </h1>
      </div>
    </section>

    <section id="mission-statement"
             className="section--center mdl-grid mdl-shadow--4dp mdl-color--indigo-900 mdl-color-text--white">
      <div className="mdl-cell mdl-cell--12-col">
        <h2>Leitbild</h2>

        <p>Ich entwickle <strong>Software nach Ihren Wünschen</strong> mit hohen Anforderungen an
          <strong>Qualität, Sicherheit und Zuverlässigkeit</strong>, testgetrieben und unter
          Berücksichtigung Ihrer Geschäftsdomäne in Anlehnung an Domain Driven
          Design-Praktiken.</p>

        <p>Die <strong>Pflege und Weiterentwicklung Ihrer bestehenden Softwarelösungen</strong> sind
          für mich ebenso bedeutsam wie die Integration von <strong>neuen Technologien, wenn
            es sinnvoll ist</strong> und es die Anforderungen zulassen.</p>
      </div>
    </section>

    <section className="section--center mdl-grid">
      <h3 className="mdl-cell mdl-cell--4-col">Mein Angebot</h3>
      <div className="mdl-cell mdl-cell--8-col">
        <p>Ich unterstütze Sie bei …</p>
        <ul>
          <li>der Konzeption &amp; Planung von kleinen bis mittelgroßen Softwareprojekten</li>
          <li>der Softwareentwicklung und -architektur mit agilen Vorgehensmodellen, auch im Team</li>
          <li>der Pflege und Weiterentwicklung Ihrer bestehenden Softwarelösungen</li>
          <li>der Verbesserung der Softwarequalität und -stabilität</li>
        </ul>
      </div>
    </section>


    <section id="about-me" className="section--center mdl-grid">
      <h3 className="mdl-cell mdl-cell--4-col">Über mich</h3>

      <div className="mdl-cell mdl-cell--8-col">
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

      <h4 className="mdl-cell mdl-cell--12-col">Berufserfahrung</h4>
    </section>

    <div className="mdl-color--grey-100">
      <div className="mdl-grid">
        <div className="mdl-cell--12-col mdl-typography--text-right resume-tags-toggle">
          <button id="resume-tags-toggle__button" className="mdl-button mdl-js-button mdl-button--icon">
            <i className="material-icons">more_vert</i>
          </button>
          <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
              htmlFor="resume-tags-toggle__button">
            <li className="mdl-menu__item">Recruiter-Modus <strong><span
              className="resume-tags-toggle__state">aktivieren</span></strong>
            </li>
          </ul>
        </div>
      </div>
      <section className="section--center mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <Resume/>
        </div>
      </section>
    </div>

    <section id="contact" className="section--center mdl-grid">
      <h2 className="mdl-cell mdl-cell--12-col">Kontakt</h2>

      <Contact/>
    </section>

    <section id="network" className="section--center section__network mdl-grid">
      <h2 className="mdl-cell mdl-cell--12-col">Netzwerk</h2>
    </section>

    <div className="mdl-color--grey-50">
      <Network/>
    </div>
  </Layout>
)
