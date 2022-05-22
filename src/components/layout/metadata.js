import React from "react"
import { Helmet } from "react-helmet"

const Metadata = () => (
    <Helmet defaultTitle="Thomas Juhnke — Softwareentwickler"
            titleTemplate={`%s | Thomas Juhnke — Softwareentwickler`}
            meta={[
                {
                    name: 'description',
                    content: 'Individuelle Softwareentwicklung, Qualitätssicherung und Beratung für kleine bis mittelgroße Softwareprojekte.'
                }
            ]}
    >
        <html lang="de"/>
    </Helmet>
);

export default Metadata
