import React from "react"

import * as Styles from "./tags.module.scss"

class Tags extends React.Component {
   componentDidMount() {
   }

   render() {
     const props = this.props

     return (
       <span className={`${Styles.resume__positionTags} ${props.even ? Styles.resume__positionTagsRight : ''} mdc-evolution-chip-set`} role="grid">
           <span className="mdc-evolution-chip-set__chips" role="presentation">
                 {props.tags.map((tag, index) => {
                   return (
                     <span key={index} className={`${Styles.resume__positionTagsMdcChip} mdc-evolution-chip mdc-evolution-chip--disabled`} role="row">
                         <span className="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell">
                             <button className="mdc-evolution-chip__action mdc-evolution-chip__action--primary" type="button">
                                <span className="mdc-evolution-chip__text-label"><small>{tag}</small></span>
                             </button>
                         </span>
                     </span>
                   )
                 })}
           </span>
       </span>
     )
   }
}

export default Tags
