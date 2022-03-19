import React, { useRef, useEffect } from "react";
import './modal.css';


export default function ModalComponent (props){
    if (props.modalState === true){
      return(
        <main id="overlay" onClick={props.handleClick}>
          <div id="modal-background">
          <div id="modal-content">
            <h1>{props.currentRestaurantData.name}</h1>
            <p>{props.currentRestaurantData.cuisine}</p>
            <p>Address: {props.currentRestaurantData.address}</p>
            <p>Phone Number: {props.currentRestaurantData.phoneNumber}</p>
            <p>Hours: {props.currentRestaurantData.hours}</p>
            <p>Hours: {props.currentRestaurantData.about}</p>
            </div>
          </div>
        </main>
      )
    } else {
      return(
        <div style={{display: 'none'}}></div>
        )
    } 
}