import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaDiscord} from 'react-icons/fa'
import {ImYoutube2} from 'react-icons/im'
export const Links = () =>{
    return (
        <div className="links">
            <ul className="list-link">
                <li title='Aller sur mon profil Facebook' className="list-link-elt"><a href="https://www.facebook.com/Yoanparede1" target='_blank' rel='noreferrer' ><FaFacebookF/></a></li>
                <li title='Aller sur mon profil LinkedIn' className="list-link-elt"><a href="https://www.linkedin.com/in/yoan-parede-b95893198" target='_blank' rel='noreferrer'><FaLinkedinIn/></a></li>
                <li title='Aller sur ma chaîne YouTube' className="list-link-elt"><a href="https://www.youtube.com/channel/UCT2QcSh-hHZnZF05NHaw45Q" target='_blank' rel='noreferrer'><ImYoutube2 /></a></li>
                <li title='Rejoindre le discord' className="list-link-elt"><a href="https://discord.gg/s3RTawtE8T" target='_blank' rel='noreferrer'><FaDiscord /></a></li>
            </ul>
        </div>
    )
}