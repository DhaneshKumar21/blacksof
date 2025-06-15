import React from 'react'
import AddressDetails from './AddressDetails'
import ContactForm from './ContactForm'

/**
 * A common get in touch component. Divided in two sections
 *  1. Static Address section
 *  2. A contact form. it will send request to backend.
*/


const GetInTouch = () => {
    return (
        <section className='flex justify-center items-center min-h-[80vh] h-auto bg-[#0067B1]' id="contact-us">
            <div className='flex justify-around items-start w-3/4 gap-5 flex-wrap-reverse md:flex-wrap !py-10 md:!p-2'>
                <AddressDetails />
                <ContactForm />
            </div>
        </section>
    )
}

export default GetInTouch