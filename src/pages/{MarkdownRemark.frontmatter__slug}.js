import React from "react"
import {graphql} from "gatsby"

import {Centered} from "../components/sections"
import Layout from "../components/layout"

export default function Template({
                                   data
                                 }) {
  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark

  return (
    <Layout>
      <Centered additionalClasses="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" dangerouslySetInnerHTML={{__html: html}}/>
        </div>
      </Centered>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
