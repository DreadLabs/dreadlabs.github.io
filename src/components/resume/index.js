import React from "react"

import {Centered, Fullwidth} from "../sections"
import Position from "./position"
import Styles from "./index.module.scss"
import Tags from "./tags"

const Positions = [
  {
    headline: `Postcon Deutsch­land B.V. & Co. KG`,
    date: `seit 2017`,
    location: `Berlin`,
    content: <ul>
      <li>Implementierung des Hexagonalen Architekturmusters (Ports und Adapter)</li>
      <li>Dokumentation von Softwarearchitekturen mit dem <a href="https://arc42.de/">arc42 Template</a></li>
      <li>Enge Zusammenarbeit mit anderen Teammitgliedern für die Planung, das Design und die Entwicklung von robusten Softwarelösungen</li>
      <li>Datenaustausch und -verarbeitung von SAP Schnittstellendaten</li>
      <li>Optimierung des Rechnungssystems im firmeneigenen ERP-System gemäß der <abbr title="Grundsätze ordnungsmäßiger Buchführung">GoB</abbr></li>
      <li>Implementierung von REST APIs, u.a. als Schnittstelle für Frankiermaschinen von Pitney Bowes und Neopost</li>
      <li>Verwendung des Message queuing service RabbitMQ für den Nachrichtenaustausch</li>
      <li>Entwicklung in einer verteilten Systemarchitektur</li>
    </ul>,
    tags: [
      "OOP",
      "OOA & OOD",
      "TDD",
      "MQS",
      "CQRS",
      "Event Sourcing",
      "REST",
      "Scrum",
      "Event Storming",
      "PHP",
      "SQL",
      "JavaScript",
      "Symfony 2",
      "AngularJS",
      "MariaDB",
      "MongoDB",
      "RabbitMQ",
      "Docker",
      "Jenkins",
      "arc42",
      "Hexagonale Architektur",
    ]
  },
  {
    headline: `McFIT Global Group GmbH`,
    date: `2016`,
    location: `Berlin`,
    content: <ul>
      <li>Planung &amp; Design von API-getriebenen, RESTful Webanwendungen</li>
      <li>Implementierung von CouchDB als API für Frontendanwendungen</li>
      <li>Koordination &amp; Planung der Hostinginfrastruktur für Webanwendungen</li>
      <li>Automatisierung der Infrastruktur für Continous Integration und Continuous Delivery mithilfe der Jenkins Job-DSL und automatisierter Verwaltung von Authentifizierungsmerkmalen</li>
      <li>Implementierung von Docker als Laufzeitumgebung für lokale Entwicklungsumgebungen</li>
    </ul>,
    tags: [
      "OOP",
      "TDD",
      "REST",
      "Scrum",
      "PHP",
      "Groovy",
      "Python",
      "SQL",
      "JavaScript",
      "Symfony 2",
      "node.js",
      "Express.js",
      "MariaDB",
      "CouchDB",
      "Ansible",
      "Docker",
      "Jenkins",
    ]
  },
  {
    headline: `bytepark GmbH`,
    date: `2013 - 2016`,
    location: `Berlin`,
    content: <ul>
      <li>Entwicklung von Content Management Lösungen mit Symfony 2, dem Java Content Repository und TYPO3</li>
      <li>Projektautomation mit Jenkins CI, Ansible/Phing</li>
      <li>paketbasierte Auslieferung von Web-Applikationen</li>
      <li>Requirements Engineering und technische Konzeption</li>
      <li>Teamleitung und -koordination</li>
    </ul>,
    tags: [
      "OOP",
      "REST",
      "JCR",
      "Kanban",
      "PHP",
      "Symfony 2",
      "Ansible",
      "MariaDB",
      "nginx",
      "Varnish",
      "Vagrant",
      "Jenkins",
    ]
  },
  {
    headline: `K - New Media GmbH & Co. KG`,
    date: `2012 - 2013`,
    location: `Berlin`,
    content: <ul>
      <li>Wartung und Weiterentwicklung der E-Commerce Plattform MB3</li>
      <li>Rückportierung von Funktionen des aktuellen TYPO3-Kerns in den archaischen MB3-Kern</li>
    </ul>,
    tags: [
      "OOP",
      "Kanban",
      "PHP",
      "Vagrant",
      "Jira",
    ]
  },
  {
    headline: `profi.it internet technology`,
    date: `2007 - 2012`,
    location: `Lana, Italien`,
    content: <ul>
      <li>Entwicklung eines Baukastensystems für Hotelportale</li>
      <li>Entwicklung eines firmeninternen CRM-Systems</li>
      <li>Entwicklung von Webservices (SOAP und REST)</li>
      <li>Implementierung von Webanwendungen in Content Mangement Systemen</li>
      <li>Planung und Entwicklung von TYPO3 Extensions</li>
      <li>Entwicklung und Erweiterung interaktiver Frontendkomponenten</li>
      <li>Betreuung und Wartung von Root-Servern mit Debian</li>
      <li>Einführung der Versionsverwaltungssysteme git und svn in den Entwicklungsprozess</li>
    </ul>,
    tags: [
      "OOP",
      "SOAP",
      "Kanban",
      "PHP",
      "JavaScript",
      "symfony 1.x",
      "TYPO3",
      "Extbase",
      "Debian",
    ]
  },
  {
    headline: `Haus Neuer Medien GmbH`,
    date: `2004 - 2006`,
    location: `Greifswald`,
    content: <ul>
      <li>Implementierung von Webseiten und -anwendungen in TYPO3</li>
      <li>Unterstützung bei der Betreuung und Wartung von Root-Servern</li>
      <li>Betreuung eines Schülerprojekts in Zusammenarbeit mit dem Verein „Fit für die Wirtschaft“</li>
      <li>Entwicklung von Gewinnspiel-, News- und Quizmodulen</li>
      <li>Entwicklung und Debugging der JavaScript RTE-Komponente für das firmeneigene CMS</li>
    </ul>,
    tags: [
      "OOP",
      "PHP",
      "JavaScript",
      "TYPO3",
      "Debian",
    ]
  },
  {
    headline: `Contas GmbH / geist-nord gmbh`,
    date: `2001`,
    location: `Greifswald`,
    content:  <ul>
      <li>Reportgenerierung mit Crystal Reports</li>
      <li>Programmierung einer Anwendung zur Berechnung der Wirtschaftlichkeit von Kreditsicherheiten</li>
    </ul>,
    tags: [
      "OOP",
      "Delphi",
      "SQL",
      "Crystal Reports",
    ]
  }
]

export default() => (
  <Fullwidth>

    <Centered additionalClasses="mdc-layout-grid">
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">

          <section className={Styles.resume}>
            {Positions.map((position, i) =>
              <Position headline={position.headline} date={position.date} location={position.location} even={i % 2 === 0}>
                {position.content}

                <Tags tags={position.tags} even={i % 2 === 0}/>
              </Position>
            )}

          </section>
        </div>
      </div>
    </Centered>
  </Fullwidth>
)
