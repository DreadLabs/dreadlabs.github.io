import React from "react"

import {Centered} from "../sections";
import * as Styles from "./index.module.scss"

const Story = (props) => {
    return (
        <Centered additionalClasses="mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4">
                    <h3 id={props.id} className="mdc-typography--headline4">{props.title}</h3>
                </div>
                <div className={`${Styles.story__content} mdc-layout-grid__cell mdc-layout-grid__cell--span-8`}>
                    {props.children}
                </div>
            </div>
        </Centered>
    )
};

export default Story
