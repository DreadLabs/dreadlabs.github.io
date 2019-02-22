import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"

export default function Template({
                                   data
                                 }) {
  const {markdownRemark: page} = data
  return (
    <Layout>
      <section className="section--center mdl-grid">
        <div className="mdl-cell mdl-cell--12-col" dangerouslySetInnerHTML={{__html: page.html}}/>
      </section>
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
