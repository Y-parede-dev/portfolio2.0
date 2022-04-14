import { useEffect, useState } from 'react'
import { scrollToPage } from '../../config/GSAP.config'
import { AiFillHome } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { FaHammer } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
import { Links } from '../widget/Links'
export const Header = (props) => {
    const [classN, setClassN] = useState('')
    useEffect(()=>{
        if(window.innerWidth>props.seizeChange && window.pageYOffset > 250){
            setClassN('mobile')
        }
        window.onscroll=()=>{
            if(window.pageYOffset > 250){
                setClassN('mobile')
            }else{
                setClassN('')
            }
        }
        return (()=>setClassN(''))
    },[props.seizeChange])
    return(
        <header className='header-principal' id="header">
            <nav className={classN}>
                <ul>
                    <li className="nav-list-elt">
                        <button className='btn-nav' onClick={()=>scrollToPage('.header-principal')}>{props.onmobile?<AiFillHome className='icons-nav'/>:'accueil'}</button>
                    </li>
                    <li className="nav-list-elt">
                        <button className='btn-nav' onClick={()=>scrollToPage('.About-container')}>{props.onmobile?<SiAboutdotme className='icons-nav'/>:'à propos'}</button>
                    </li>
                    <li className="nav-list-elt">
                        <button className='btn-nav' onClick={()=>scrollToPage('.container-skills')}>{props.onmobile?<FaHammer className='icons-nav'/>:'compétences'}</button>
                    </li>
                    <li className="nav-list-elt">
                        <button className='btn-nav' onClick={()=>scrollToPage('.container-works')}>{props.onmobile?<MdWork className='icons-nav'/>:'réalisation'}</button>
                    </li>
                    <li className="nav-list-elt">
                        <button className='btn-nav' onClick={()=>scrollToPage('.footer')}>{props.onmobile?<RiContactsFill className='icons-nav'/>:'contact'}</button>
                    </li>
                </ul>
            </nav>
            <div id='ct' className="container-data-h">
            <img className='img-back-head' src={props.backgroundImg} alt="backgroud-heaser" />
                <div className='data-start'>
                    <h1 className='name-dev'>
                        parede yoan
                    </h1>
                    <h2 className='fonction-dev'>
                        développeur Web React.js
                    </h2>
                        <Links/>
                </div>
            </div>
        </header>
    )
}