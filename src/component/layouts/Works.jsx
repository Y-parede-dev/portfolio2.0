import { ProjectArr } from "../Projet"
import { slidetoCarouselLeft, slidetoCarouselRight } from "../../config/GSAP.config"
import { useState } from "react"
export const Works = (props) => {
    
    
    
    let count = 0
    const btnT = (direction) => {
        
        if(1==1){
            if(direction==='left'){
                count++
                if(count===ProjectArr.length){
                    count=0
                }
                slidetoCarouselLeft('.elt',  count)
            }else{
                count--
                if(count===-1){
                    count=ProjectArr.length-1
                }
                slidetoCarouselRight('.elt', count)
            }
        }
        console.log(count)
    }
    return(
        <div className="container-works container">
            
            <div className="content-work">
                <div className="carrousels">
                    <div id="img-carou" className="carou-img carou-cust">
                        {ProjectArr.map((e)=>(                        
                            <div key={`${e.id}-img`} className="content-img elt">
                                <div className="btn">
                                    <button className="btn-prev" onClick={()=>btnT('right')}>prev</button>
                                    <button className="btn-next"onClick={()=>btnT('left')}>next</button>
                                </div>
                                <img className="img-project" src={e.img}/>
                            </div>
                            ))}
                        </div>
                        <div className="content-txt-work">
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
                                    </div>
                                ))}
                            </div>    
                    </div>
                </div>
            </div>
            
        </div>
    )
}