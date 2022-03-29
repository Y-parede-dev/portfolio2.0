import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap} from 'gsap'
import navFocus from "../../assets/backDesign/NavFocus.svg"
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollToPage } from '../../config/GSAP.config';
// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
export const Header = (props) => {
    const [hovered, setHover] = useState(false)
    const [classN, setClassN] = useState('')
    useEffect(()=>{
        if(window.pageYOffset > 250){
            setClassN('test')
        }
        window.onscroll=()=>{
            if(window.pageYOffset > 250){
                setClassN('test')
            }else{
                setClassN('')
            }
        }
        return (()=>setClassN(''))
    },[window.onscroll])
    
    return(
        <header className='header-principal' id="header">
            <nav className={classN}>
                <ul>
                    <li className="nav-list-elt"><button onClick={()=>scrollToPage('.header-principal')}>home</button></li>
                    <li className="nav-list-elt"><button onClick={()=>scrollToPage('.About-container')}>about</button></li>
                    <li className="nav-list-elt"><button onClick={()=>scrollToPage('.container-skills')}>skills</button></li>
                    <li className="nav-list-elt"><button onClick={()=>scrollToPage('.container-works')}>works</button></li>
                    <li className="nav-list-elt"><button onClick={()=>scrollToPage('.footer')}>contact</button></li>
                    
                </ul>
            </nav>
            <div id='ct' className="container-data-h">
            <img className='img-back-head' src={props.backgroundImg} alt="backgroud-heaser" />

                <div className='data-start'>
                    <h1 className='name-dev'>
                        parede yoan
                    </h1>
                    <h2 className='fonction-dev'>
                        développeur React.js
                    </h2>
                    <ul>
                        <li className="link-list-elt">fb</li>
                        <li className="link-list-elt">gitH</li>
                        <li className="link-list-elt">LI</li>
                        <li className="link-list-elt">ETC.</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}