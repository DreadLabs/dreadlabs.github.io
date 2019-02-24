import React from "react"
import {useStaticQuery, graphql} from "gatsby"
// 480, 396
export default () => {
  const data = useStaticQuery(graphql`
    fragment network480 on File {
      childImageSharp {
        fixed(width: 480, height: 480) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fragment network396 on File {
      childImageSharp {
        fixed(width: 480, height: 480) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    
    query NetworkQuery {
      micha480: file(relativePath: { regex: "/network\/michael-gerstmann\\\\.jpg$/" }) {
        ...network480
      }
      micha396: file(relativePath: { regex: "/network\/michael-gerstmann\\\\.jpg$/" }) {
        ...network396
      }
      christophe480: file(relativePath: { regex: "/network\/christophe-maurice\\\\.jpg$/" }) {
        ...network480
      }
      christophe396: file(relativePath: { regex: "/network\/christophe-maurice\\\\.jpg$/" }) {
        ...network396
      }
      robert480: file(relativePath: { regex: "/network\/robert-schoenthal\\\\.jpg$/" }) {
        ...network480
      }
      robert396: file(relativePath: { regex: "/network\/robert-schoenthal\\\\.jpg$/" }) {
        ...network396
      }
    }
  `)

  return (
    <section className="network mdc-layout-grid">
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-12-phone mdc-card network-card mdl-shadow--2dp">
          <div className="network__avatar-container mdc-card__media mdc-card__media--square mdl-color--white">
            <picture>
              <source media="(min-width: 840px)"
                      data-srcset={data.micha480.childImageSharp.fixed.srcSet} />
              <source media="(min-width: 480px)"
                      data-srcset={data.micha396.childImageSharp.fixed.srcSet} />
              <img className="network__avatar lazy"
                   data-src={data.micha480.childImageSharp.fixed.src}
                   data-srcset={data.micha480.childImageSharp.fixed.srcSet}
                   alt="Porträt: Michael Gerstmann" />
            </picture>
          </div>

          <div className="network-card__primary">
            <strong className="mdc-typography--headline6">Michael Gerstmann</strong>
          </div>

          <p className="network-card__secondary mdc-typography--body2">
            Michael ist Spezialist für Webanwendungen mit HTML5, CSS3 und JavaScript.
            Seine Expertise erstreckt sich von Mobile-First Responsive Web Designs über
            Suchmaschinenoptimierung bis hin zur Entwicklung von Content Management Systemen.
          </p>

          <div className="mdc-card__actions mdl-card--border">
            <div className="mdc-card__action--buttons">
              <a className="mdc-button mdc-card__action mdc-card__action--button mdl-button--colored" href="http://micha.seiler-gerstmann.de/">
                <span className="mdc-button__label">
                  Weitere Informationen
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-12-phone mdc-card network-card mdl-shadow--2dp">
          <div className="network__avatar-container mdc-card__media mdc-card__media--square mdl-color--white">
            <picture>
              <source media="(min-width: 840px)"
                      data-srcset={data.christophe480.childImageSharp.fixed.srcSet} />
              <source media="(min-width: 480px)"
                      data-srcset={data.christophe396.childImageSharp.fixed.srcSet} />
              <img className="network__avatar lazy"
                   data-src={data.christophe480.childImageSharp.fixed.src}
                   data-srcset={data.christophe480.childImageSharp.fixed.srcSet}
                   alt="Porträt: Christophe Maurice" />
            </picture>
          </div>

          <div className="network-card__primary">
            <strong className="mdc-typography--headline6">Christophe Maurice</strong>
          </div>

          <p className="network-card__secondary mdc-typography--body2">
            Christophe ist ein Produktstratege und Unternehmensberater. Er hilft Unternehmen
            klare Strategien für erfolgreiche Produkte zu gestalten, sowie die passenden digital
            Teams und Prozesse dafür aufzubauen. Seine internationale Erfahrung reicht von Start-Ups
            bis hin zu Blue Chips.
          </p>

          <div className="mdc-card__actions mdl-card--border">
            <div className="mdc-card__action--buttons">
              <a className="mdc-button mdc-card__action mdc-card__action--button mdl-button--colored" href="https://www.linkedin.com/in/christophe-maurice/">
                <span className="mdc-button__label">
                  Weitere Informationen
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-12-phone mdc-card mdl-shadow--2dp">
          <div className="network__avatar-container mdc-card__media mdc-card__media--square mdl-color--white">
            <picture>
              <source media="(min-width: 840px)"
                      data-srcset={data.robert480.childImageSharp.fixed.srcSet} />
              <source media="(min-width: 480px)"
                      data-srcset={data.robert396.childImageSharp.fixed.srcSet} />
              <img className="network__avatar lazy"
                   data-src={data.robert480.childImageSharp.fixed.src}
                   data-srcset={data.robert480.childImageSharp.fixed.srcSet}
                   alt="Porträt: Robert Schönthal" />
            </picture>
          </div>

          <div className="network-card__primary">
            <strong className="mdc-typography--headline6">Robert Schönthal</strong>
          </div>

          <p className="network-card__secondary mdc-typography--body2">
            Robert ist ein erfahrener und qualitätsbewusster Softwareentwickler &amp; -architect
            mit Vorliebe zum <strong>tests first</strong> Ansatz. Seine polyglotte Orientierung
            macht ihn zu einem ausgezeichneten Allrounder, der bereits einige große Projekte
            durchgeführt und betreut hat.
          </p>

          <div className="mdc-card__actions mdl-card--border">
            <div className="mdc-card__action--buttons">
              <a className="mdc-button mdc-card__action mdc-card__action--button mdl-button--colored" href="https://digitalkaoz.net/">
                <span className="mdc-button__label">
                  Weitere Informationen
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
