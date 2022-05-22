import React from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

import * as Styles from "./node.module.scss"

const Node = ({image, firstname, lastname, url, children}) => (
    <div
        className={`${Styles.node} mdc-layout-grid__cell mdc-layout-grid__cell--span-3 mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-12-phone mdc-card`}>
        <div className={`${Styles.avatar} mdc-card__media mdc-card__media--square`}>
            <GatsbyImage
                alt={`Porträt: ${firstname} ${lastname}`}
                image={getImage(image)}
                width={396}
                height={396}
            />
        </div>

        <h3 className={`${Styles.headerPrimary} mdc-typography--headline6`}>{firstname} {lastname}</h3>

        <p className={`${Styles.headerSecondary} mdc-typography--body2`}>
            {children}
        </p>

        <div className={`${Styles.node__actions} mdc-card__actions`}>
            <div className="mdc-card__action--buttons">
                <a className="mdc-button mdc-card__action mdc-card__action--button" href={url}>
                    <i className="material-icons mdc-button__icon" aria-hidden="true">person</i>
                    <span className="mdc-button__label">
                        Mehr über {firstname}
                    </span>
                </a>
            </div>
        </div>
    </div>
)

export default Node
