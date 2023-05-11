import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
const REACT_APP_EMAILJS_USER_ID="user_ym7j7CksbJN1yrkmvvIF5";
const REACT_APP_EMAILJS_SERVICE_ID="service_kj7chsm";
const REACT_APP_EMAILJS_TEMPLATE_ID="template_kwn8v9j";

export const Contact = () => {
    const formRef = useRef()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [valid, setValid] = useState(false)
    const [show, setShow] = useState(false)
    const resetInit = ()=>{
        setName('')
        setEmail('')
        setMessage('')
    }
    const closeModale = () =>{
        setShow(false)
        window.location.reload()
    }
    const sendEmail = (e) => {
        e.preventDefault();
        const formInit = {
            from_name: name,
            mail: email,
            message:message,
            to_name:"Yoan"
        }
        emailjs.send(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, formInit, REACT_APP_EMAILJS_USER_ID)
          .then(() => {
              setValid(true)
              resetInit()
              setShow(true)
              const timer = setTimeout(()=>{
                  setShow(false)
                  window.location.reload()
                    return(()=>{
                      clearTimeout(timer)
                    }
                  )
              },5000)
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <div id='contact' className='ctc'>
            <h2 className='tilte-contact title-art'>Contact</h2>
            <h3 className='drop-me'>Avez-vous des questions ? Écrivez-moi quelques lignes, si vous souhaitez entrer en contact.</h3>
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                <div className="form-elt">
                    <input onChange={(e)=>setName(e.target.value)} id='Name' type="text" name="user_name" required/>
                    <label className='lbl lbl-nom' htmlFor='Name'>{name<1?"Nom/Prénom":""}</label>
                </div>
                <div className="form-elt">
                    <input onChange={(e)=>setEmail(e.target.value)} id='Name' type="email" name="user_email" required/>
                    <label className='lbl lbl-email' htmlFor='Email'>{email<1?"Email":""}</label>
                </div>
                <div className="form-elt">
                    <textarea onChange={(e)=>setMessage(e.target.value)} id='Message' name="message" required minLength={5}/>
                    <label className='lbl lbl-mess' htmlFor='Message'>{message<1?'Message':''}</label>
                </div>
                <input title="cliquer pour m'envoyé un email" className='btn-form' type="submit" value="Envoyer le message" />
            </form>
            {show?
                <div className="modale-valid">
                    <div className="modale-inside">
                        <button onClick={closeModale}>X</button>
                        {valid?<p style={{"color":'green'}}>Votre message a été envoyé avec succès</p>:<p style={{"color":'red'}}>Une erreur imprévue est survenue, veuillez réessayer.</p>}
                    </div>
                </div>:''
            }
        </div>
    )
}