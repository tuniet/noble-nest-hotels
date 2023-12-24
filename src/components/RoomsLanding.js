import '../styles/RoomsLanding.css'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Booking = () => {
  const { t } = useTranslation();
    let delindexleft = 1;
    let delindexright = 5;

    const $ = selector => {
        return document.querySelector(selector);
    };

    function next() {
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
        addedEl.classList.add("next","new-next", 'room' + delindexleft);
        if(delindexleft < 5)
          delindexleft = delindexleft + 1;
        else{
          delindexleft = 1;
        }
    }
  
    function prev() {
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
        addedEl.classList.add("hide" , 'room' + delindexright);
        if(delindexright > 1)
        delindexright = delindexright - 1;
        else{
          delindexright = 5;
        }
    }
  
  function slide(e){
    /* Next slide */
    let element = e.target
    if (element.classList.contains('next')) {
      next();
      
    /* Previous slide */
      
    } else if (element.classList.contains('prev')) {
      prev();
    }
  }
  


  return (
    <div className="roomslanding">
        <ul className="list" onClick={slide}>
            <li className="hide room1" ></li>
            <li className="prev room2"></li>
            <li className="act room3"></li>
            <li className="next room4"></li>
            <li className="next new-next room5"></li>
        </ul>
    </div>
  );
};

export default Booking;