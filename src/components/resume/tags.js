import React from "react"
import {MDCMenu} from "@material/menu";

import Styles from "./tags.module.scss"

class Tags extends React.Component {
   componentDidMount() {
     let tagState = 'off';
     const tags = document.querySelectorAll(`.${Styles.resume__positionTags}`);
     const tagToggle = document.querySelector('#resume-tags-toggle__menu ul li');
     const tagToggleState = tagToggle.querySelector('.resume-tags-toggle__state');

     const menu = new MDCMenu(document.getElementById('resume-tags-toggle__menu'));
     const button = document.getElementById('resume-tags-toggle__button');
     button.addEventListener('click', (event) => {
       menu.open = true;
     });

     tagToggle.addEventListener('click', function() {
       [].map.call(tags, function(tag) {
         tag.classList.toggle(Styles.resume__positionTagsOn);
       });
       if (tagState === 'off') {
         tagToggleState.innerHTML = 'deaktivieren';
         tagState = 'on';
       } else if (tagState === 'on') {
         tagToggleState.innerHTML = 'aktivieren';
         tagState = 'off';
       }
     });
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
