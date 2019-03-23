import React from "react"
import { Helmet } from "react-helmet"

export default () => (
  <Helmet defaultTitle="Thomas Juhnke — DreadLabs Softwareentwicklung"
          titleTemplate={`%s | Thomas Juhnke — DreadLabs Softwareentwicklung`}>
    <html lang="de" />
  </Helmet>
)
