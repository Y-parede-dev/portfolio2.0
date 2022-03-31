import { useRef, useState } from 'react'
import emailjs, {init} from '@emailjs/browser'
// import dotenv from 'dotenv'

const {REACT_APP_EMAILJS_USER_ID, REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID} = process.env
export const Contact = () => {
    const formRef = useRef()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    const sendEmail = (e) => {
        e.preventDefault();
        const formInit = {
            from_name: name,
            mail: email,
            message:message,
            to_name:"Yoan"
        }
        emailjs.send(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, formInit, REACT_APP_EMAILJS_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <div className='ctc'>
            <h2 className='tilte-contact title-art'>Get in Touch</h2>
            <h3 className='drop-me'>Drop me a line.
                I would like to hear from you.</h3>
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
                <div className="form-elt">
                    <input onChange={(e)=>setName(e.target.value)} id='Name' type="text" name="user_name" />
                    <label className='lbl lbl-nom' htmlFor='Name'>Name</label>
                </div>
                <div className="form-elt">
                    <input onChange={(e)=>setEmail(e.target.value)} id='Name' type="email" name="user_email" />
                    <label className='lbl lbl-email' htmlFor='Email'>Email</label>
                </div>
                <div className="form-elt">
                    <textarea onChange={(e)=>setMessage(e.target.value)} id='Message' name="message" />
                    <label className='lbl lbl-mess' htmlFor='Message'>Message</label>
                </div>
                <input title="cliquer pour m'envoyé un email" className='btn-form' type="submit" value="Envoyer Message" />
            </form>
        </div>
        
    )

}