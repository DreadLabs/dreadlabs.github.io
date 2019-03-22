import React from "react"

import Styles from "./node.module.scss"

export default (props) => (
  <div className={`${Styles.node} mdc-layout-grid__cell mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-12-phone mdc-card`}>
    <div className={`${Styles.avatar} mdc-card__media mdc-card__media--square`}>
      <picture>
        <source media="(min-width: 840px)"
                data-srcset={props.image480.srcSet} />
        <source media="(min-width: 480px)"
                data-srcset={props.image396.srcSet} />
        <img className={`${Styles.avatar__image} lazy`}
             data-src={props.image480.src}
             data-srcset={props.image480.srcSet}
             alt={`Porträt: ${props.firstname} ${props.lastname}`} />
      </picture>
    </div>

    <div className={Styles.headerPrimary}>{props.firstname} {props.lastname}</div>

    <p className={`${Styles.headerSecondary} mdc-typography--body2`}>
      {props.children}
    </p>

    <div className={`${Styles.node__actions} mdc-card__actions`}>
      <div className="mdc-card__action--buttons">
        <a className="mdc-button mdc-card__action mdc-card__action--button" href={props.url}>
          <i className="material-icons mdc-button__icon" aria-hidden="true">person</i>
          <span className="mdc-button__label">
            Mehr über {props.firstname}
          </span>
        </a>
      </div>
    </div>
  </div>
)
