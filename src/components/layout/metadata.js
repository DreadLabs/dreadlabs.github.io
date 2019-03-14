import React from "react"
import { Helmet } from "react-helmet"

export default () => (
  <Helmet defaultTitle="Thomas Juhnke — DreadLabs Softwareentwicklung"
          titleTemplate={`%s | Thomas Juhnke — DreadLabs Softwareentwicklung`}>
    <html lang="de" />

    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Source+Sans+Pro:400,700|Material+Icons" rel="stylesheet" />
  </Helmet>
)
