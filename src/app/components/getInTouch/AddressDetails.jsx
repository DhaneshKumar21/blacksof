import React from 'react'

const AddressDetails = () => {
    return (
        <div className='text-white w-full md:w-[40%]'>
            <ul className='flex flex-col gap-2'>
                <li>
                    <h6 className='font-bold'>Get in touch</h6>
                </li>
                <hr className='w-[10%] border-[1px]' />
                <li>
                    <p className='leading-6 font-normal'>For general enquiries</p>
                </li>
                <li>
                    <h5 className='font-semibold'>Address :</h5>
                    <p className='leading-6 font-normal'>For general enquiries</p>
                </li>
                <li>
                    <h5 className='font-semibold'>Phone :</h5>
                    <p className='leading-6 font-normal'>+91 22 25208822</p>
                </li>
                <li>
                    <h5 className='font-semibold'>Email :</h5>
                    <p className='leading-6 font-normal'>info@supremegroup.co.in</p>
                </li>
            </ul>
        </div>
    )
}

export default AddressDetails