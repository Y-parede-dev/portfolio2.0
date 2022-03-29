import { ProjectArr } from "../Projet"
import { slideTo, slidetoCarouselLeft, slidetoCarouselRight } from "../../config/GSAP.config"
import { useEffect, useState } from "react"
import{AiOutlineArrowRight} from 'react-icons/ai'

export const Works = (props) => {
    const[arrLeft, setArrLeft] = useState(true)
    const[arrRight, setArrRight] = useState(true)
    // const [count, setCount] = useState(1)

    let count = 0
    let countMax = ProjectArr.length-1
    const btnT = (direction) => {
        if(direction==='right'){
            count++
            // if(count===1){
            //     setArrLeft(true)
    
            // }else{
            //     setArrLeft(false)

            // }
            //alert(count)

            // alert(count)
            // if(count===ProjectArr.length-1){
            //     setArrRight(false)

            // }
            
            slidetoCarouselLeft('.elt',  count, ProjectArr, setArrLeft, setArrRight)
        }
        if(direction === "left"){
            countMax--
           
            // alert(count)
            count--
            
        
            // if(countMax===0){
            //     setArrLeft(false)
    
            // }else{
            //     setArrLeft(true)

            // }
            // if(countMax===ProjectArr.length-1){
            //     setArrRight(false)

            // }
            // if(countMax===ProjectArr.length-2){
            //     setArrRight(true)

            // }
            // else{
            //     setArrRight(true)

            // }
         
            slidetoCarouselRight('.elt', count, ProjectArr, setArrLeft, setArrRight)
            console.log(`up ${count}`)
        }
       
    }
    // // useEffect(()=>{
    // //     if(count>=0 && count <= countMax){
    // //         setArrRight(true)
    // //     }
    // //     return(()=>{
    // //         setArrRight(true)
    // //     })
        
    // // },[count])
    // // useEffect(()=>{
    // //     if(count===0){
    // //         setArrLeft(false)

    // //     }else{
    // //         setArrLeft(true)

    // //     }
        
    // //     return(()=>{
    // //         setArrLeft(true)
    // //     })
        
    // },[count])
    useEffect(()=>{
        slideTo(".content-txt-work", 'left')
    },[])
    // useEffect(()=>{
    //     slideTo('.image-design-back',"top", .5)
    // },[])
    useEffect(()=>{
        slideTo(".carou-img", 'bottom', .35)
    },[])

    return(
        <div className="container-works container">
            <div className="content-work">
                <div className="carrousels">
                    <div id="img-carou" className="carou-img carou-cust">
                        {ProjectArr.map((e)=>(                        
                            <div key={`${e.id}-img`} className="content-img elt">
                                <div className="btn">{arrRight ?

                                    <button className="btn-next"onClick={()=>btnT('right')}><AiOutlineArrowRight /></button>
                                    :
                                    ""
                                }
                                </div>
                                <div className="btn">{arrLeft ?

                                    <button className="btn-prev" onClick={()=>btnT('left')}><AiOutlineArrowRight /></button>
                                    :""
                                }
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