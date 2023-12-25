import '../styles/RoomsLanding.css'
import React, {useEffect, useState} from 'react';
import { useNavigate  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Booking = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
    let currentRoom = 1;

    const $ = selector => {
        return document.querySelector(selector);
    };

    function next() {
      let added = 0
      if(currentRoom === 1 || currentRoom === 2){
        added = currentRoom + 3
      }
      else {
        added = currentRoom -2
      }
        if ($(".hide")) {
        $(".hide").remove(); 
        }
  
        /* Step */
  
        if ($(".prev")) {
        $(".prev").classList.add("hide");
        $(".prev").classList.remove("prev");
        }
  
        $(".act").classList.add("prev");
        $(".act").classList.remove("act");
    
        $(".next").classList.add("act");
        $(".next").classList.remove("next");
    
        /* New Next */
    
        $(".new-next").classList.remove("new-next");
        
        const addedEl = document.createElement('li');
       
        $(".list").appendChild(addedEl);
        addedEl.classList.add("next","new-next", 'room' + added);
        if(currentRoom != 5){
          currentRoom = currentRoom + 1
        }
        else{
          currentRoom = 1;
        }
    }
  
    function prev() {
      let added = 0
      if(currentRoom === 5 || currentRoom === 4){
        added = currentRoom - 3
      }
      else {
        added = currentRoom + 2
      }
        $(".new-next").remove();
        
        /* Step */
    
        $(".next").classList.add("new-next");
    
        $(".act").classList.add("next");
        $(".act").classList.remove("act");
    
        $(".prev").classList.add("act");
        $(".prev").classList.remove("prev");
    
        /* New Prev */
    
        $(".hide").classList.add("prev");
        $(".hide").classList.remove("hide");
    
        const addedEl = document.createElement('li');
    
        $(".list").insertBefore(addedEl, $(".list").firstChild);
        addedEl.classList.add("hide" , 'room' + added);
        if(currentRoom != 1){
          currentRoom = currentRoom - 1
        }
        else{
          currentRoom = 5;
        }
    }
  
  function slide(e){
    /* Next slide */
    let element = e.target
    if (element.classList.contains('next')) {
      next();
    }
    /* Previous slide */
     else if (element.classList.contains('prev')) {
      prev();
    }
    else if (element.classList.contains('act')){
      
      if(currentRoom === 1){
        navigate('/rooms/' + 'standartroom')
      }
      else if(currentRoom === 2){
        navigate('/rooms/' + 'deluxeroom')
      }
      else if(currentRoom === 3){
        navigate('/rooms/' + 'executivesuite')
      }
      else if(currentRoom === 4){
        navigate('/rooms/' + 'presidentialsuite')
      }
      else if(currentRoom === 5){
        navigate('/rooms/' + 'royalsuite')
      }
      console.log("Click")
    }
  }
  


  return (
    <div className="roomslanding">
        <ul className="list" onClick={slide}>
            <li className="hide room4" ></li>
            <li className="prev room5"></li>
            <li className="act room1"></li>
            <li className="next room2"></li>
            <li className="next new-next room3"></li>
        </ul>
    </div>
  );
};

export default Booking;