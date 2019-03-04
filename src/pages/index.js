import React from "react"

import {Centered} from "../components/sections"
import Contact from "../components/contact_simple"
import Layout from "../components/layout"
import MissionStatement from "../components/mission-statement"
import Network from "../components/network"
import Quote from "../components/quote"
import Resume from "../components/resume"
import Story from "../components/story"
import Vcard from "../components/vcard"

class Index extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <Quote />

        <Vcard />

        <MissionStatement />

        <Story title="Mein Angebot">
          <p>Ich unterstütze Sie bei …</p>
          <ul>
            <li>der Konzeption &amp; Planung von kleinen bis mittelgroßen Softwareprojekten</li>
            <li>der Softwareentwicklung und -architektur mit agilen Vorgehensmodellen, auch im Team</li>
            <li>der Pflege und Weiterentwicklung Ihrer bestehenden Softwarelösungen</li>
            <li>der Verbesserung der Softwarequalität und -stabilität</li>
          </ul>
        </Story>

        <Story id="about-me" title="Über mich">
          <p>Bereits seit 1999 entwickle ich Software in verschiedenen Programmiersprachen.
            Durch mein Studium der Informatik und Wirtschaftsinformatik und meine <strong>langjährige
              Erfahrung</strong> in Unternehmen unterschiedlicher Größe und Aufgabengebieten decke
            ich die umfangreiche Palette der Anforderungen an einen Softwareentwickler sehr
            gut ab:
          </p>

          <ul>
            <li>technische Konzeption, Planung und Kommunikation mit allen Interessensgruppen</li>
            <li>Continuous Integration und Continous Delivery</li>
            <li>Profiling und statische Codeanalyse</li>
            <li>infrastrukturnahe Tätigkeiten ("DevOps")</li>
          </ul>
        </Story>

        <Centered id="network" additionalClasses="section__network mdc-layout-grid">
          <h4 className="mdc-typography--headline5 mdc-layout-grid__cell mdc-layout-grid__cell--span-12">Berufserfahrung</h4>
        </Centered>

        <Resume/>

        <Centered id="contact" additionalClasses="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <h2 className="mdc-typography--headline3 mdc-layout-grid__cell mdc-layout-grid__cell--span-12">Kontakt</h2>

            <Contact/>
          </div>
        </Centered>

        <Centered id="network" additionalClasses="section__network mdc-layout-grid">
          <h2 className="mdc-typography--headline3 mdc-layout-grid__cell mdc-layout-grid__cell--span-12">Netzwerk</h2>
        </Centered>

        <Network/>
      </Layout>
    )
  }
}

export default Index
