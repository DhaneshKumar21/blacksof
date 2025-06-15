"use client"

import { useState } from "react";

/**
 * This is uncontrolled form. A primary level validation is implemented.
 * @param {Boolean} isPending- It will be used for showing loader while form is submitting
 * @param {Object} error- This state will be used to show errors in particular field.
*/

const ContactForm = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState({});

    const validateForm = (formData) => {
        try {
            let isValid = true
            const _errors = {}
            for (let key in formData) {
                if (!formData[key]) {
                    _errors[key] = "VALUE_IS_REQUIRED"
                    isValid = false
                }
            }
            return { isValid, _errors }

        } catch (error) {
            console.error(error)
            return { isValid: false }
        }
    }

    const handleSubmit = async (e) => {
        try {
            e?.preventDefault()
            const formElement = new FormData(e.target)
            const formValues = Object.fromEntries(formElement)
            const { message, ...valuesToValidate } = formValues
            const { isValid, _errors } = validateForm(valuesToValidate)
            if (!isValid) {
                setError(_errors)
                return
            }

            setIsPending(true)
            const rUrl = "https://api.emailjs.com/api/v1.0/email/send-form"
            const response = await fetch(rUrl, {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                    "Origin": "https://supreme-group.vercel.app",
                    "Referer": "https://supreme-group.vercel.app/",
                }
            });

            const result = await response.json();
            if (result.httpCode !== 200) {
                alert("Oops something went wrong")
            } else {
                e.target.reset();
                setError({});
            }

        } catch (error) {
            consol.error(error)
        } finally {
            setIsPending(false)
        }
    }

    return (
        <div className='w-full md:w-[40%] text-white'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                <Input
                    type='text'
                    placeholder='Full name'
                    name='fullName'
                    error={error?.fullName}
                />
                <Input
                    type='email'
                    placeholder='Email'
                    name='email'
                    error={error?.email}
                />
                <Input
                    type='text'
                    placeholder='Company'
                    name='company'
                    error={error?.company}
                />

                <textarea
                    placeholder='Message'
                    className='outline-0 border-b-2 border-gray-200  placeholder-gray-200'
                    rows="4" cols="50"
                    name='message'
                />

                <button type="submit" className='btn !bg-white' disabled={isPending}>{isPending ? "Sending..." : "Send"}</button>
            </form>
        </div>
    )
}

const Input = ({ type = "text", placeholder = "", name = "", error = "" }) => {
    const requiredError = {
        VALUE_IS_REQUIRED: `${placeholder} is required`
    }

    return <div className="w-full">
        <input
            type={type}
            placeholder={placeholder}
            className='outline-0 border-b-2 border-gray-200  placeholder-gray-200 w-full'
            name={name}
        // required={true}
        />
        {error && <p className="text-red-500 text-sm">{requiredError[error] || error}</p>}
    </div>
}

export default ContactForm