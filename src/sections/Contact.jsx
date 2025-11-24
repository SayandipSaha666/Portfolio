import { section } from 'framer-motion/client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert'
import Particles from '../components/Particles'
function Contact() {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message: ""
    })
    const [loading,setLoading] = useState(false)
    const [showAlert,setShowAlert] = useState(false)
    const [alertType,setAlertType] = useState("success")
    const [alertText,setAlertText] = useState("")
    const getMessage = (type,text) => {
        setAlertType(type)
        setAlertText(text)
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        try {
            console.log(formData)
            await emailjs.send(serviceID,templateID,{
                from_name: formData.name,
                to_name: "Sayandip Saha",
                from_email: formData.email,
                to_email: "sahasayandip480@gmail.com",
                message: formData.message
            },publicKey)
            setLoading(false)
            setFormData({
                name:"",
                email:"",
                message: ""
            })
            getMessage("success","Message sent successfully")
            console.log("Message sent successfully")
        } catch (error) {
            setLoading(false)
            console.log(error)
            getMessage("danger","Something went wrong")
            console.log("Something went wrong")
        }
        
    }
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value});
    }
  return (
    <section className="relative flex items-center c-space section-spacing mt-20" id="contact">
        <Particles
        className='absolute inset-0 -z-50'
        quantity={400}
        ease={80}
        color="#ffffff"
        refresh={true}
        />
        {showAlert && <Alert type={alertType} text={alertText} />}
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
            <div className='flex flex-col items-start w-full gap-5 mb-10'>
                <h2 className='text-heading'>
                    Let's Connect
                </h2>
                <p className="font-normal text-neutral-400">For any quaries connect with me</p>
            </div>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='mb-5'>
                    <label htmlFor="name" className='field-label'>
                        Full Name
                    </label>
                    <input 
                    id='name' 
                    name='name' 
                    type="text" 
                    className='field-input field-input-focus'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='John Doe'
                    required/>
                </div>
                <div className='mb-5'>
                    <label htmlFor="email" className='field-label'>
                        Email
                    </label>
                    <input 
                    id='email' 
                    name='email' 
                    type="email" 
                    className='field-input field-input-focus'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='john@gmail.com'
                    autoComplete='email'
                    required/>
                </div>
                <div className='mb-5'>
                    <label htmlFor="message" className='field-label'>
                        Full Name
                    </label>
                    <textarea
                    id='message' 
                    rows="4"
                    name='message' 
                    type="text" 
                    className='field-input field-input-focus'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Share your message...'
                    required/>
                </div>
                <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from bg-lavender to'>
                    {!loading ? "Send" : "Sending..."}
                </button>
            </form>
        </div>

    </section>
  )
}

export default Contact