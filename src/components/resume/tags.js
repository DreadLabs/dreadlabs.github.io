import React from "react"

import Styles from "./tags.module.scss"

class Tags extends React.Component {
   componentDidMount() {
   }

   render() {
     const props = this.props

     return (
       <p className={`${Styles.resume__positionTags} mdc-chip-set`}>
         {props.tags.map((tag, index) => {
           return (
             <span key={index} className={`${Styles.resume__positionTagsMdcChip} mdc-chip`}>
               <span className="mdc-chip__text"><small>{tag}</small></span>
             </span>
           )
         })}
       </p>
     )
   }
}

export default Tags
