import { Techno as IterTechno } from "../libs/MaginJS"
/*IMG TECHNO BEFORE IMPL. BDD  -- annulate imge remplace to react-icons*/

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMysql } from 'react-icons/si';

export const TechnoArr = []
const tec = ["FaHtml5", "FaCss3Alt", "FaJsSquare", "FaReact", "FaNodeJs", "SiExpress", "SiMysql"]
const logo = [FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, SiExpress, SiMysql]
let id = 0;
tec.map((e)=>{
    id++
    const el = new IterTechno(
        id,
        e,
        e,
        logo.find((er)=>{
            if(e === er.name){
                return er
            } 
            return
        })
    )
    TechnoArr.push(el)
    return
})
// console.log(TechnoArr)