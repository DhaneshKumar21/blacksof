import Image from 'next/image'
import React from 'react'
import brandLogo from "../../../public/images/Supreme_logos.svg"
import footerBg from "../../../public/images/footer-bg.svg"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='relative'>
      <div className='flex justify-center items-center w-full !my-10'>
        <div className='w-2/3 flex flex-col gap-10'>
          <Image src={brandLogo} alt='Supreme Group' className='h-16 aspect-auto' />
          <div className='flex justify-between md:justify-between flex-wrap gap-5'>
            <ul className='flex flex-col gap-5'>
              <li className='font-semibold uppercase text-opacity-90'>Applications</li>
              <li><Link href="/apparel">Apparel</Link></li>
              <li><Link href="/automotive">Automotive</Link></li>
              <li><Link href="/filtration">Filtration</Link></li>
              <li><Link href="/customized-solutions">Customized Solutions</Link></li>
            </ul>
            <ul className='flex flex-col gap-5'>
              <li className='mb-2 sg-translate font-semibold uppercase text-opacity-90'>Company</li>
              <li><Link href="/innovation">Innovation</Link></li>
              <li><Link href="/global-competency">Global</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
            <ul className='flex flex-col gap-5'>
              <li className='mb-2 sg-translate font-semibold uppercase text-opacity-90'>More</li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
            </ul>
            <ul className='flex flex-col gap-5'>
              <li className='mb-2 sg-translate font-semibold uppercase text-opacity-90'>Follow Us</li>
              <li><Link href="/twitter">Twitter</Link></li>
              <li><Link target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/supreme-group-company/"
              >LinkedIn</Link></li>
              <li><Link href="/instagram">Instagram</Link></li>
              <li><Link href="/medium">Medium</Link></li>
            </ul>
          </div>
          <div className='flex justify-between flex-wrap gap-5'>
            <p>&copy;2023. All Rights Reserved.</p>
            <p>Supreme house: 110, 16th Road,Chembur, Mumbai - 400071.</p>
          </div>
        </div>
      </div>
      <Image src={footerBg} width="100" alt='footer background' className='absolute bottom-5 right-0 w-1/6' />
    </footer>
  )
}

export default Footer