import React from "react"

import modulesStyles from "./index.module.scss"

export default ({children}) => (
  <div className={modulesStyles.fullWidthSection}>
    {children}
  </div>
)
