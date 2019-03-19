import React from "react"
import {graphql} from "gatsby"

import {Centered} from "../components/sections"
import Layout from "../components/layout"

export default function Template({
                                   data
                                 }) {
  const {markdownRemark: page} = data

  return (
    <Layout>
      <Centered additionalClasses="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" dangerouslySetInnerHTML={{__html: page.html}}/>
        </div>
      </Centered>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`
