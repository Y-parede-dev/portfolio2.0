import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import {App} from "../component/App"

export const RouterReact = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element = {
                    <App/>
                } />
                <Route path="*" element = {
                    <div style={{fontSize:64, color:"red"}}>ERREUR 404 Il n'y a pas d'autres pages sur mon portFolio si vous souhaitez travailler avec moi je vous invite a remplir <a>le formulaire du site</a>  </div>} 
                /> {/* Ne pas laisser ça en production faire une page 404 avec plus de styles */}
            </Routes>
        </Router>
    )
}