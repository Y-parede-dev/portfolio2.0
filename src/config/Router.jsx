import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import {App} from "../component/App"

export const RouterReact = ()=>{
    return(
        <Router>
            
            <Routes>
                <Route path="/" element = {<App/>} />
                <Route path="*" element = {<div style={{fontSize:64, color:"red"}}>ERROR 404 none other route this just my portFolio </div>} />

            </Routes>
        </Router>
    )
}