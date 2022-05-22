import * as React from "react";

import {Centered} from "../sections";

const Contact = () => (
    <Centered additionalClasses="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <h2 id="contact" className="mdc-typography--headline3">Kontakt</h2>
                <p>Ich freue mich über Ihre Nachricht. Nehmen Sie gern Kontakt über einen der folgenden Kanäle mit mir auf:</p>
            </div>

            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <ul className="mdc-deprecated-list">
                    <li className="mdc-deprecated-list-item mdc-deprecated-list-item--disabled">
                        <span className="mdc-deprecated-list-item__graphic"><i className="fa fa-envelope fa-lg" /></span>
                        <span className="mdc-deprecated-list-item__text">contact@dreadlabs.de</span>
                        <span className="mdc-deprecated-list-item__meta">E-Mail</span>
                    </li>
                    <li className="mdc-deprecated-list-item mdc-deprecated-list-item--disabled">
                        <span className="mdc-deprecated-list-item__graphic"><i className="fa fa-twitter fa-lg" /></span>
                        <span className="mdc-deprecated-list-item__text">@dreadwarrior</span>
                        <span className="mdc-deprecated-list-item__meta">Twitter</span>
                    </li>
                    <li className="mdc-deprecated-list-item mdc-deprecated-list-item--disabled">
                        <span className="mdc-deprecated-list-item__graphic"><i className="fa fa-github fa-lg" /></span>
                        <span className="mdc-deprecated-list-item__text">@dreadwarrior</span>
                        <span className="mdc-deprecated-list-item__meta">GitHub</span>
                    </li>
                </ul>
            </div>
        </div>
    </Centered>
)

export default Contact