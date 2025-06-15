import Link from 'next/link'
import React from 'react'
import brandLogo from "../../../../public/images/Supreme_logos.svg";
import Image from 'next/image';
import { CloseIcon } from '@/app/commonSvgIcons';
import translate from "../../../../public/images/translate.svg"


const SideBar = ({ onToggleSideBar }) => {
    return (
        <div className='bg-white w-11/12 !px-5'>
            <div className="flex justify-between items-center p-5 bg-white">
                <Image src={brandLogo} alt="Supreme Group" className="h-16 aspect-auto" />
                <button
                    onClick={onToggleSideBar}
                    aria-label="Close sidebar"
                    className="absolute top-4 right-4 z-50 p-2 rounded-full hover:bg-gray-200 transition"
                >
                    <CloseIcon />
                </button>
            </div>

            <ul className="space-y-4 overflow-auto h-[80vh] flex flex-col gap-5" onClick={onToggleSideBar}>
                <ul className='flex flex-col gap-5'>
                    <li className='font-bold uppercase text-opacity-90'>Applications</li>
                    <li><Link href="/apparel">Apparel</Link></li>
                    <li><Link href="/automotive">Automotive</Link></li>
                    <li><Link href="/filtration">Filtration</Link></li>
                    <li><Link href="/customized-solutions">Customized Solutions</Link></li>
                </ul>
                <ul className='flex flex-col gap-5'>
                    <li className='mb-2 sg-translate font-bold uppercase text-opacity-90'>Company</li>
                    <li><Link href="/innovation">Innovation</Link></li>
                    <li><Link href="/global-competency">Global Competency</Link></li>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="#contact-us">Contact Us</Link></li>
                </ul>
                <ul className='flex flex-col gap-5'>
                    <li className='mb-2 sg-translate font-bold uppercase text-opacity-90'>More</li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
                </ul>
            </ul>
            <div>
                <Link href="/" className='flex justify-start items-center gap-2  font-medium'><Image src={translate} alt='Select language' /><span>ENG</span></Link>
            </div>
        </div>
    )
}

export default SideBar