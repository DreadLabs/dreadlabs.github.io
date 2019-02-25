import React from "react"
import Tags from "./resume__position-tags"

export default() => (
  <section className="resume">
    <div className="resume__position">
      <div className="resume__position-waypoint" />

      <div className="resume__position-content">
        <h5 className="mdc-typography--headline6">Postcon Deutsch­land B.V.&nbsp;&amp;&nbsp;Co.&nbsp;KG</h5>
        <ul>
          <li>Entwicklung in einer verteilten Systemarchitektur</li>
          <li>Verwendung des Message queuing service RabbitMQ für den Nachrichtenaustausch</li>
          <li>Implementierung von REST APIs, u.a. als Schnittstelle für Frankiermaschinen von Pitney Bowes und Neopost</li>
          <li>Optimierung des Rechnungssystems im firmeneigenen ERP-System gemäß der <abbr title="Grundsätze ordnungsmäßiger Buchführung">GoB</abbr></li>
          <li>Datenaustausch und -verarbeitung von SAP Schnittstellendaten</li>
          <li>Enge Zusammenarbeit mit anderen Teammitgliedern für die Planung, das Design und die Entwicklung von robusten Softwarelösungen</li>
        </ul>

        <Tags tags={["OOP", "OOA & OOD", "TDD", "MQS", "CQRS", "Event Sourcing", "REST", "Scrum", "Event Storming", "PHP", "SQL", "JavaScript", "Symfony 2", "AngularJS", "MariaDB", "MongoDB", "RabbitMQ", "Docker", "Jenkins"]} />

        <span className="resume__position-date">seit 2017<br /><i className="fa fa-map-marker"></i> Berlin</span>
      </div>
    </div>

    <div className="resume__position">
      <div className="resume__position-waypoint" />

      <div className="resume__position-content">
        <h5 className="mdc-typography--headline6">McFIT Global&nbsp;Group&nbsp;GmbH</h5>
        <ul>
          <li>Planung &amp; Design von API-getriebenen, RESTful Webanwendungen</li>
          <li>Implementierung von CouchDB als API für Frontendanwendungen</li>
          <li>Koordination &amp; Planung der Hostinginfrastruktur für Webanwendungen</li>
          <li>Automatisierung der Infrastruktur für Continous Integration und Continuous Delivery mithilfe der Jenkins Job-DSL und automatisierter Verwaltung von Authentifizierungsmerkmalen</li>
          <li>Implementierung von Docker als Laufzeitumgebung für lokale Entwicklungsumgebungen</li>
        </ul>

        <Tags tags={["OOP", "TDD", "REST", "Scrum", "PHP", "Groovy", "Python", "SQL", "JavaScript", "Symfony 2", "node.js", "Express.js", "MariaDB", "CouchDB", "Ansible", "Docker", "Jenkins"]} />

        <span className="resume__position-date">2016<br /><i className="fa fa-map-marker"></i> Berlin</span>
      </div>
    </div>

    <div className="resume__position">
      <div className="resume__position-waypoint" />

      <div className="resume__position-content">
        <h5 className="mdc-typography--headline6">bytepark GmbH</h5>
        <ul>
          <li>Entwicklung von Content Management Lösungen mit Symfony 2, dem Java Content Repository und TYPO3</li>
          <li>Projektautomation mit Jenkins CI, Ansible/Phing</li>
          <li>paketbasierte Auslieferung von Web-Applikationen</li>
          <li>Requirements Engineering und technische Konzeption</li>
          <li>Teamleitung und -koordination</li>
        </ul>

        <Tags tags={["OOP", "REST", "JCR", "Kanban", "PHP", "Symfony 2", "Ansible", "MariaDB", "nginx", "Varnish", "Vagrant", "Jenkins"]} />

        <span className="resume__position-date">2013 - 2016<br /><i className="fa fa-map-marker"></i> Berlin</span>
      </div>
    </div>

    <div className="resume__position">
      <div className="resume__position-waypoint" />

      <div className="resume__position-content">
        <h5 className="mdc-typography--headline6">K - New Media GmbH&nbsp;&amp;&nbsp;Co.&nbsp;KG</h5>
        <ul>
          <li>Wartung und Weiterentwicklung der E-Commerce Plattform MB3</li>
          <li>Rückportierung von Funktionen des aktuellen TYPO3-Kerns in den archaischen MB3-Kern</li>
        </ul>

        <Tags tags={["OOP", "Kanban", "PHP", "Vagrant", "Jira"]}/>

        <span className="resume__position-date">2012 - 2013<br /><i className="fa fa-map-marker"></i> Berlin</span>
      </div>
    </div>

    <div className="resume__position">
      <div className="resume__position-waypoint" />

      <div className="resume__position-content">
        <h5 className="mdc-typography--headline6">profi.it internet&nbsp;technology</h5>
        <ul>
          <li>Entwicklung eines Baukastensystems für Hotelportale</li>
          <li>Entwicklung eines firmeninternen CRM-Systems</li>
          <li>Entwicklung von Webservices (SOAP und REST)</li>
          <li>Implementierung von Webanwendungen in Content Mangement Systemen</li>
          <li>Planung und Entwicklung von TYPO3 Extensions</li>
          <li>Entwicklung und Erweiterung interaktiver Frontendkomponenten</li>
          <li>Betreuung und Wartung von Root-Servern mit Debian</li>
          <li>Einführung der Versionsverwaltungssysteme git und svn in den Entwicklungsprozess</li>
        </ul>

        <Tags tags={["OOP", "SOAP", "Kanban", "PHP", "JavaScript", "symfony 1.x", "TYPO3", "Extbase", "Debian"]} />

        <span className="resume__position-date">2007 - 2012<br /><i
          className="fa fa-map-marker"></i> Lana, Italien</span>
      </div>
    </div>

    <div className="resume__position">
      <div className="resume__position-waypoint" />

      <div className="resume__position-content">
        <h5 className="mdc-typography--headline6">Haus&nbsp;Neuer&nbsp;Medien GmbH</h5>
        <ul>
          <li>Implementierung von Webseiten und -anwendungen in TYPO3</li>
          <li>Unterstützung bei der Betreuung und Wartung von Root-Servern</li>
          <li>Betreuung eines Schülerprojekts in Zusammenarbeit mit dem Verein „Fit für die Wirtschaft“</li>
          <li>Entwicklung von Gewinnspiel-, News- und Quizmodulen</li>
          <li>Entwicklung und Debugging der JavaScript RTE-Komponente für das firmeneigene CMS</li>
        </ul>

        <Tags tags={["OOP", "PHP", "JavaScript", "TYPO3", "Debian"]} />

        <span className="resume__position-date">2004 - 2006<br /><i className="fa fa-map-marker"></i> Greifswald</span>
      </div>
    </div>

    <div className="resume__position">
      <div className="resume__position-waypoint" />

      <div className="resume__position-content">
        <h5 className="mdc-typography--headline6">Contas&nbsp;GmbH / geist-nord&nbsp;gmbh</h5>
        <ul>
          <li>Reportgenerierung mit Crystal Reports</li>
          <li>Programmierung einer Anwendung zur Berechnung der Wirtschaftlichkeit von Kreditsicherheiten</li>
        </ul>

        <Tags tags={["OOP", "Delphi", "SQL", "Crystal Reports"]} />

        <span className="resume__position-date">2001<br /><i className="fa fa-map-marker"></i> Greifswald</span>
      </div>
    </div>
  </section>
)
