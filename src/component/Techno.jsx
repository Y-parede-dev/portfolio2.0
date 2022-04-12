import { Techno as IterTechno } from "../libs/MaginJS"
/*IMG TECHNO BEFORE IMPL. BDD  -- anulate images remplace to react-icons*/

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMysql } from 'react-icons/si'
export const TechnoArr = []
const tec = ["FaHtml5", "FaCss3Alt", "FaJsSquare", "FaReact", "FaNodeJs", "SiExpress", "SiMysql"]
const logo = [FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, SiExpress, SiMysql]
let id = 0;

tec.forEach((e)=>{
    let ic = logo[id] 
    id++
    // for(let i;i<tec.length;i++){

    // }
    // ic = logo.find(er=>{
       
    //     if(e === er.name) {
    //         return er}}
    // )
    
    const el = new IterTechno(
        id,
        e,
        e,
        ic
    )
    TechnoArr.push(el)
})