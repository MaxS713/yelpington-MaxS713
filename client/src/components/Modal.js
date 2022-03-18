import React, { useRef, useEffect } from "react";
import './modal.css';


export default function ModalComponent (props){
    if (props.modalState === true){
      return(
        <main id="overlay" onClick={props.handleClick}>
          <div id="modal-background">
          <section id="modal-content">Buy my stuff!</section>
          </div>
        </main>
      )
    } else {
      return(
        <div style={{display: 'none'}}></div>
        )
    } 
}