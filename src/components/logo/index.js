import React from "react"

import LogoSvg from "./DreadLabs-Logo.svg"
import LogoPng from "./DreadLabs-Logo.png"
import Styles from "./index.module.scss"

export default (props) => (
  <picture className={Styles[props.context]}>
    <source srcSet={LogoSvg} type="image/svg+xml" />
    <img className={Styles[props.context + '__image']} src={LogoPng} alt="Logo: DreadLabs Softwareentwicklung" />
  </picture>
)
