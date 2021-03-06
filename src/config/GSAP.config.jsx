import { gsap} from 'gsap'
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
export const slideTo = (elt, direction='left', delay, duration) => {
    let X,Y,declancheur;
    
    switch(direction){
        case'left':
            X = 600;
            Y = 0;
            declancheur='top center';
        break;
        case'top':
            X = 0;
            Y = -450;
            declancheur='500 center';
        break;
        case'bottom':
            X = 0;
            Y = 450;
            declancheur='-501 center';
        break;
        case'right':
            X = -600;
            Y = 0;
            declancheur='top center';
        break;
        default:
            X=0;
            Y=0;
            declancheur='top center'
        break;
    }
    gsap.fromTo(
        elt,
        {
            opacity:0,
            x: X,
            y: Y
        },
        {
            opacity:1,
            x: 0,
            y:0,
            delay: delay || 0.2,
            duration: duration || 0.6,
            scrollTrigger:{
                trigger:elt,
                start:declancheur,
                end:'bottom center'
            }
        }
    )
    return null
}
export const slidetoCarouselLeft = (elt,  count, arr, setL, setR, widthSlide, op) => {
   let X = -widthSlide 
    || -533
    if(count>=0){
        if(count===arr.length-2){
            setR(false)
            
        }
        if(count===0){
            setL(true)
        }
        
        gsap.fromTo(elt, {
            x: X * (count),
            opacity: op ||0.26
        },{
            x:X*(count+1),
            delay:0.1,
            duration:.55,
            opacity:1,
            ease: "back.inOut(1)"
        })
    }
}
export const slidetoCarouselRight = (elt,  count, arr, setL, setR, widthSlide, op) => {
    let X = -widthSlide || -533
   if(count>=0){
       if(count===1){
           setL(false)
       }
        if(count<=arr.length-1){
           setR(true)
        }
        gsap.fromTo(elt, {
           x: X * (count),
           opacity: op || .26
        },{
           x:X*(count-1),
           delay:0.1,
           duration:.55,
           opacity:1,
           ease: "back.inOut(1)"
        })
    }else{
        alert(count)
    }
 }
export const scrollToPage = (elt)=>{
    gsap.to(window, {duration: 2, scrollTo: `${elt}`})
    return null
}