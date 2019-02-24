import React from "react"
import { Helmet } from "react-helmet"

export default () => (
  <Helmet defaultTitle="Thomas Juhnke — DreadLabs Softwareentwicklung"
          titleTemplate={`%s | Thomas Juhnke — DreadLabs Softwareentwicklung`}>
    <html lang="de" />
    {/* Disable tap highlight on IE*/}
    <meta name="msapplication-tap-highlight" content="no" />

    {/* Web Application Manifest*/}
    <link rel="manifest" href="manifest.json" />

    {/* Add to homescreen for Chrome on Android*/}
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="application-name" content="DreadLabs Softwareentwicklung" />
    <link rel="icon" sizes="192x192" href="/images/touch/chrome-touch-icon-192x192.png" />

    {/* Add to homescreen for Safari on iOS*/}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-title" content="DreadLabs Softwareentwicklung" />
    <link rel="apple-touch-icon" href="/images/touch/apple-touch-icon.png" />

    {/* Tile icon for Win8 (144x144 + tile color)*/}
    <meta name="msapplication-TileImage" content="/images/touch/ms-touch-icon-144x144-precomposed.png" />
    <meta name="msapplication-TileColor" content="#2B4797" />

    {/* Color the status bar on mobile devices*/}
    <meta name="theme-color" content="#FFFFFF" />

    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Source+Sans+Pro:400,700|Material+Icons" rel="stylesheet" />
    {/*<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.cyan-blue.min.css" />*/}
  </Helmet>
)
