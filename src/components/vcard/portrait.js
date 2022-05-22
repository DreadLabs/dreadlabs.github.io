import React from "react"

import * as Styles from "./portrait.module.scss"
import {StaticImage} from "gatsby-plugin-image";

const Portrait = () => {
    return (
        <StaticImage src="../../images/portrait/Thomas-Juhnke_portrait-business.jpg"
                     alt="Thomas Juhnke Softwareentwickler"
                     className={Styles.vcard__avatar}
                     placeholder="blurred"
                     width={303}
                     height={303}
                     />
    )
}

export default Portrait
