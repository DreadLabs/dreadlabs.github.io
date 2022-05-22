import * as React from "react"

import Contact from "../components/contact"
import Layout from "../components/layout"
import MissionStatement from "../components/mission-statement";
import Network from "../components/network";
import Quote from "../components/quote"
import Resume from "../components/resume";
import Story from "../components/story";
import Vcard from "../components/vcard"

// markup
const IndexPage = () => {
  return (
    <Layout>
        <Quote />

        <Vcard />

        <MissionStatement />

        <Story id="about-me" title="Über mich">
            <p>Bereits seit 1999 entwickle ich Software in verschiedenen Programmiersprachen.
                Durch mein Studium der Informatik und Wirtschaftsinformatik und meine <strong>langjährige
                Erfahrung</strong> in Unternehmen unterschiedlicher Größe und Aufgabengebieten decke
                ich die umfangreiche Palette der Anforderungen an einen Softwareentwickler sehr
                gut ab:
            </p>

            <ul>
                <li>technische Konzeption, Planung &amp; Kommunikation mit allen Interessensgruppen</li>
                <li>Continuous Integration &amp; Continous Delivery</li>
                <li>Profiling &amp; statische Codeanalyse</li>
                <li>infrastrukturnahe Tätigkeiten ("DevOps")</li>
            </ul>
        </Story>

        <Story id="skills" title="Kompetenzen">
            <p>Der <strong>Fokus</strong> meiner Arbeit als Softwareentwickler liegt auf …</p>
            <ul>
                <li>der Softwareentwicklung &amp; -architektur mit agilen Vorgehensmodellen in einem permanenten Team</li>
                <li>der Pflege &amp; Weiterentwicklung von bestehenden Softwarelösungen</li>
                <li>der Verbesserung der Softwarequalität &amp; -stabilität</li>
                <li>dem Mentoring von Teamkollegen, z.B. durch Pair- &amp; Mob-Programming</li>
                <li>der technischen Konzeption, Planung &amp; Dokumentation von Softwareprojekten</li>
            </ul>
            <p>Bei Bedarf <strong>unterstütze</strong> ich auch …</p>
            <ul>
                <li>bei der Steuerung, Kontrolle &amp; Verwaltung von Maßnahmen im Anforderungsmanagement</li>
                <li>die Arbeit im Produkt- &amp; Projektmanagement</li>
                <li>die Verbesserung von abteilungs- oder unternehmensweiten Prozessen</li>
            </ul>
        </Story>

        <Resume />

        <Contact />

        <Network />
    </Layout>
  )
}

export default IndexPage
