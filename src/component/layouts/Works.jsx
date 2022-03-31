import { ProjectArr } from "../Projet"
import { slideTo, slidetoCarouselLeft, slidetoCarouselRight } from "../../config/GSAP.config"
import { useCallback, useEffect, useState } from "react"
import{AiFillGithub, AiOutlineArrowRight} from 'react-icons/ai'
import{CgWebsite} from 'react-icons/cg'

export const Works = (props) => {
    const[arrLeft, setArrLeft] = useState(false)
    const[arrRight, setArrRight] = useState(true)
    const [save, setSave] = useState(0)
    const [widthSlide, setWidthSlide] = useState(0)

    let countMax = ProjectArr.length-1
   
    const btnT = (direction) => {
        // console.log(document.getElementById(`elt-1`).offsetWidth)
         setWidthSlide(document.getElementById(`elt-1`).offsetWidth)
         if(widthSlide===0){
             return alert('PD')
         }
         if(direction==='right'){
            if(save<countMax){
                setSave(save+1)
            }
            console.log(`taille de la slide : ${widthSlide}`)
            // console.log(widthSlide)

            slidetoCarouselLeft(`.elt`,  save, ProjectArr, setArrLeft, setArrRight, widthSlide)

        }
        // setWidthSlide(document.getElementById(`elt-1`).offsetWidth)
        if(direction === "left"){
            
            setSave(save-1)
            slidetoCarouselRight(`.elt`, save, ProjectArr, setArrLeft, setArrRight, widthSlide)
        }
    }
    useEffect(()=>{
        let ele= document.getElementsByClassName('elt') 
        if(widthSlide>0){

            for(let i =0; i<ele.length;i++){
                ele[i].style.maxWidth= widthSlide+'px'
            }
        }
    },[])
    useEffect(()=>{
        setWidthSlide(document.getElementById(`elt-1`).offsetWidth)
        console.log(widthSlide)
    },[widthSlide, save])
    useEffect(()=>{
        slideTo(".content-txt-work", 'left')
    },[])
    useEffect(()=>{
        slideTo('.img-circle-W',"top", .5)
    },[])
    
    useEffect(()=>{
        slideTo(".carou-img", 'bottom', .35)
    },[])
   
    return(
        <div className="container-works container">
            <div className="content-work">
                <div className="carrousels">
                 <img src={props.circlePink} className='img-circle-W img-article-circle ' alt='circle design'/>
                    <div id="img-carou" className="carou-img carou-cust">
                        {ProjectArr.map((e)=>(                        
                            <div id={`elt-${e.id}`} key={`${e.id}-img`} className={`content-img elt `}>
                                <div className="btn">{arrRight ?

                                    <button title="projet suivant" className="btn-next"onClick={()=>btnT('right')}><AiOutlineArrowRight alt='fleche suivant'/></button>
                                    :
                                    ""
                                }
                                </div>
                                <div className="btn">{arrLeft ?

                                    <button title="projet précédent" className="btn-prev" onClick={()=>btnT('left')}><AiOutlineArrowRight alt='fleche précédent'/></button>
                                    :""
                                }
                                    </div>
                                <img id={`img-carou-${e.id}`} className="img-project img-all" src={e.img}/>
                                 
                            </div>
                        ))}
                    </div>
                    <div className="content-txt-work-container">
                        <h2 className="title-works title-art">works</h2>
                        <div className="carou carou-cust">
                            {ProjectArr.map((e)=>(
                                <div key={`${e.id}-txt`} className="content-art content-txt-work elt">
                                    <h3 className="title-project">{e.name}</h3>
                                    <p className="description-project txt-art">{e.description}</p>
                                    <div className="techno">
                                        <ul className="list-techno-carou">
                                            {e.techno[0].map((tec)=>(
                                                <li key={`${tec}-${e.id}`} className="tec">{tec}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {e.code?
                                    <div className="site-code">
                                        <div  className="code">
                                            <a 
                                                title={`Lien vers le gitHub de ${e.name}`} 
                                                className="web-gh-icon"
                                                href={e.codeUrl}
                                                target="_blank">
                                                    <AiFillGithub alt='lien vers site git hub - lien vers le code'/>
                                            </a>
                                        </div>
                                        <div className="site">
                                            <a 
                                                title={`Lien vers le site de ${e.name}`} 
                                                className="web-site-icon" 
                                                href={`${e.url}`} 
                                                target="_blank"><CgWebsite alt='lien vers site web'/></a>
                                        </div>
                                    </div>
                                :<div className="site-code">
                                    <div className="site">
                                        <a 
                                            title={`Lien vers le site de ${e.name}`}
                                            className="web-site-icon"
                                            href={`${e.url}`}
                                            target="_blank">
                                                <CgWebsite alt='lien vers site web'/>
                                        </a>
                                    </div>
                                </div>}
                                    
                                </div>
                            ))}
                        </div>    
                    </div>
                </div>
            </div>
            
        </div>
    )
}