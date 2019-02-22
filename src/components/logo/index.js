import React from "react"

import LogoSvg from "./DreadLabs-Logo.svg"
import LogoPng from "./DreadLabs-Logo.png"

export default () => (
  <picture className="logo">
    <source srcSet={LogoSvg} type="image/svg+xml" />
    <img src={LogoPng} alt="Logo: DreadLabs Softwareentwicklung" />
  </picture>
)
