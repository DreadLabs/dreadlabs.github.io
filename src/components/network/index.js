import React from "react"
import {useStaticQuery, graphql} from "gatsby"

import {Fullwidth} from "../sections"
import Node from "./node"

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
      
      jana480: file(relativePath: { regex: "/network\/jana-eger\\\\.jpg$/" }) {
        ...network480
      }
      jana396: file(relativePath: { regex: "/network\/jana-eger\\\\.jpg$/" }) {
        ...network396
      }
    }
  `)

  return (
    <Fullwidth>
      <section className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">

          <Node firstname="Michael" lastname="Gerstmann"
                url="http://micha.seiler-gerstmann.de/"
                image480={data.micha480.childImageSharp.fixed}
                image396={data.micha396.childImageSharp.fixed}>
            <>
              Michael ist Spezialist für Webanwendungen mit HTML5, CSS3 und JavaScript.
              Seine Expertise erstreckt sich von Mobile-First Responsive Web Designs über
              Suchmaschinenoptimierung bis hin zur Entwicklung von Content Management Systemen.
            </>
          </Node>

          <Node firstname="Christophe" lastname="Maurice"
                url="https://www.linkedin.com/in/christophe-maurice/"
                image480={data.christophe480.childImageSharp.fixed}
                image396={data.christophe396.childImageSharp.fixed}>
            <>
              Christophe ist ein Produktstratege und Unternehmensberater. Er hilft Unternehmen
              klare Strategien für erfolgreiche Produkte zu gestalten, sowie die passenden digital
              Teams und Prozesse dafür aufzubauen. Seine internationale Erfahrung reicht von Start-Ups
              bis hin zu Blue Chips.
            </>
          </Node>

          <Node firstname="Robert" lastname="Schönthal"
                url="https://digitalkaoz.net/"
                image480={data.robert480.childImageSharp.fixed}
                image396={data.robert396.childImageSharp.fixed}>
            <>
              Robert ist ein erfahrener und qualitätsbewusster Softwareentwickler &amp; -architect
              mit Vorliebe zum <strong>tests first</strong> Ansatz. Seine polyglotte Orientierung
              macht ihn zu einem ausgezeichneten Allrounder, der bereits einige große Projekte
              durchgeführt und betreut hat.
            </>
          </Node>

          <Node firstname="Jana" lastname="Eger"
                url="https://jana-eger.com/"
                image480={data.jana480.childImageSharp.fixed}
                image396={data.jana396.childImageSharp.fixed}>
            <>
              Jana ist Designerin, mit Fokus auf klaren digitalen und analogen Designs von
              Outline-Icons, Infografiken, Corporate Publishing und Websites. Ihr Anspruch ist nicht
              nur schöne, sondern gute Projekte umzusetzen – Kommunikation ist ein wichtiger Bestandsteil
              ihres Workflows.
            </>
          </Node>

        </div>
      </section>
    </Fullwidth>
  )
}
