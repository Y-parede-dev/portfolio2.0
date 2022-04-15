import { Techno as IterTechno } from "../libs/MaginJS"
/*IMG TECHNO BEFORE IMPL. BDD  -- anulate images remplace to react-icons*/

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMysql } from 'react-icons/si'
export const TechnoArr = []
const tec = [{ref:"FaHtml5",name:'HTML 5'}, {ref:"FaCss3Alt",name:'CSS 3'},{ref:"FaJsSquare",name:'JavaScript'}, {ref:"FaReact",name:'React Js'},{ref:"FaNodeJs",name:'Node Js'} ,{ref:"SiExpress",name:'Express Js'} ,{ref:"SiMysql",name:'MySQL'} ]
const logo = [FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, SiExpress, SiMysql]
let id = 0;
tec.forEach((e)=>{
    let ic = logo[id] 
    id++
    const el = new IterTechno(
        id,
        e.name,
        e.ref,
        ic
    )
    TechnoArr.push(el)
})