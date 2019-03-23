import React from "react"
import { Helmet } from "react-helmet"

export default () => (
  <Helmet defaultTitle="Thomas Juhnke — DreadLabs Softwareentwicklung"
          titleTemplate={`%s | Thomas Juhnke — DreadLabs Softwareentwicklung`}
          meta={[
            {name: 'description', content: 'Individuelle Softwareentwicklung, Qualitätssicherung und Beratung für kleine bis mittelgroße Softwareprojekte.'}
          ]}
  >
    <html lang="de" />
  </Helmet>
)
