import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact2 = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        debugger
        emailjs
            .sendForm(
                'service_dh4r8jc',
                'template_bupcn7f',
                form.current,
                'BkRCusMAFNcfKCpcH'
            )
            .then(
                (result) => {
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    )
}
export default Contact2
