import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const {REACT_APP_EMAILJS_USER_ID, REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID} = process.env
export const Contact = () => {
    const formRef = useRef()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const resetInit = ()=>{
        setName('')
        setEmail('')
        setMessage('')
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
              resetInit()
          }, (error) => {
              alert(error.text)
              console.log(error.text);
          });
      }
    return (
        <div id='contact' className='ctc'>
            <h2 className='tilte-contact title-art'>Contact</h2>
            <h3 className='drop-me'>Avez-vous une question ?
                                    n'hésitez pas à m'écrire quelques lignes.</h3>
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
        </div>
        
    )

}