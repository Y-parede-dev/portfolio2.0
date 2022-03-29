import { Techno as IterTechno } from "../libs/MaginJS"
/*IMG TECHNO BEFORE IMPL. BDD*/

import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';

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
        })
    )
    TechnoArr.push(el)
})
console.log(TechnoArr)