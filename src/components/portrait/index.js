import React from "react"
import {useStaticQuery, graphql} from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query PortraitQuery {
      site {
        siteMetadata {
          portraitStyle
        }
      }
      portrait271: file(relativePath: { regex: "/portrait\/Thomas-Juhnke_portrait-business\\\\.jpg$/" }) {
        childImageSharp {
          fixed(width: 271, height: 271) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      portrait185: file(relativePath: { regex: "/portrait\/Thomas-Juhnke_portrait-business\\\\.jpg$/" }) {
        childImageSharp {
          fixed(width: 185, height: 185) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <picture>
      <source media="(min-width: 840px)"
              srcSet={data.portrait271.childImageSharp.fixed.srcSet}/>
      <source media="(min-width: 480px)"
              srcSet={data.portrait185.childImageSharp.fixed.srcSet}/>
      <img className="vcard__avatar"
           src={data.portrait271.childImageSharp.fixed.src}
           srcSet={data.portrait271.childImageSharp.fixed.srcSet}
           alt="Thomas Juhnke Softwareentwickler"/>
    </picture>
  )
}
