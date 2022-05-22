import React from "react"

import {Centered, Fullwidth} from "../sections"
import Node from "./node"
import {graphql, useStaticQuery} from "gatsby";

const Network = () => {

  const NetworkQuery = useStaticQuery(graphql`
    query NetworkQuery {
      michaelGerstmann: file(
        sourceInstanceName: {eq: "network-avatars"}
        name: {eq: "michael-gerstmann"}
      ) {
        childImageSharp {
          gatsbyImageData(width: 396, height: 396, placeholder: BLURRED)
        }
      }
      christopheMaurice: file(
        sourceInstanceName: {eq: "network-avatars"}
        name: {eq: "christophe-maurice"}
      ) {
        childImageSharp {
          gatsbyImageData(width: 396, height: 396, placeholder: BLURRED)
        }
      }
      robertSchoenthal: file(
        sourceInstanceName: {eq: "network-avatars"}
        name: {eq: "robert-schoenthal"}
      ) {
        childImageSharp {
          gatsbyImageData(width: 396, height: 396, placeholder: BLURRED)
        }
      }
      janaEger: file(
        sourceInstanceName: {eq: "network-avatars"}
        name: {eq: "jana-eger"}
      ) {
        childImageSharp {
          gatsbyImageData(width: 396, height: 396, placeholder: BLURRED)
        }
      }
    }
  `)

  return (
      <>
        <Centered additionalClasses="section__network mdc-layout-grid">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            <h2 id="network" className="mdc-typography--headline3">Netzwerk</h2>
          </div>
        </Centered>

        <Fullwidth>
          <section className="mdc-layout-grid">
            <div className="mdc-layout-grid__inner">

              <Node firstname="Jana" lastname="Eger"
                    url="https://jana-eger.com/"
                    image={NetworkQuery.janaEger}
              >
                <>
                  Jana ist Designerin, mit Fokus auf klaren digitalen und analogen Designs von
                  Outline-Icons, Infografiken, Corporate Publishing und Websites. Ihr Anspruch ist nicht
                  nur schöne, sondern gute Projekte umzusetzen – Kommunikation ist ein wichtiger Bestandsteil
                  ihres Workflows.
                </>
              </Node>

              <Node firstname="Michael" lastname="Gerstmann"
                    url="http://micha.seiler-gerstmann.de/"
                    image={NetworkQuery.michaelGerstmann}
              >
                <>
                  Michael ist Spezialist für Webanwendungen mit HTML5, CSS3 und JavaScript.
                  Seine Expertise erstreckt sich von Mobile-First Responsive Web Designs über
                  Suchmaschinenoptimierung bis hin zur Entwicklung von Content Management Systemen.
                </>
              </Node>

              <Node firstname="Christophe" lastname="Maurice"
                    url="https://www.linkedin.com/in/christophe-maurice/"
                    image={NetworkQuery.christopheMaurice}
              >
                <>
                  Christophe ist ein Produktstratege und Unternehmensberater. Er hilft Unternehmen
                  klare Strategien für erfolgreiche Produkte zu gestalten, sowie die passenden digital
                  Teams und Prozesse dafür aufzubauen. Seine internationale Erfahrung reicht von Start-Ups
                  bis hin zu Blue Chips.
                </>
              </Node>

              <Node firstname="Robert" lastname="Schönthal"
                    url="https://digitalkaoz.net/"
                    image={NetworkQuery.robertSchoenthal}
              >
                <>
                  Robert ist ein erfahrener und qualitätsbewusster Softwareentwickler &amp; -architect
                  mit Vorliebe zum <strong>tests first</strong> Ansatz. Seine polyglotte Orientierung
                  macht ihn zu einem ausgezeichneten Allrounder, der bereits einige große Projekte
                  durchgeführt und betreut hat.
                </>
              </Node>

            </div>
          </section>
        </Fullwidth>
      </>
  );
}

export default Network
