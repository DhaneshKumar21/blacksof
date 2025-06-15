import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import brandLogo from "../../../../public/images/Supreme_logos.svg"
import linkedin from "../../../../public/images/bxl-linkedin.svg"
import translate from "../../../../public/images/translate.svg"
import MenuButton from './MenuButton'

const Header = () => {
  return (
    <header className='flex justify-between items-center bg-[#F9FBFF] max-h-20 header !px-[2rem] md:!px-[5rem] z-10'>
      <div>
        <Link href="/" className='p-2'>
          <Image className="w-full h-auto aspect-auto" src={brandLogo} alt='supreme-group' />
        </Link>
      </div>
      <div className='hidden md:flex md:gap-5 md:items-center'>
        <Link href="#contact-us" className='btn'>Contact Us</Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/supreme-group-company/"
          className='w-6 h-6  font-bold'
        >
          <Image className="w-full h-auto aspect-auto" src={linkedin} alt='linkedin' />
        </Link>
        <Link href="/" className='flex justify-center items-center gap-1  font-medium'><Image src={translate} alt='Select language' /><span>ENG</span></Link>
      </div>
      <div className='md:hidden'>
        <MenuButton />
      </div>
    </header>
  )
}

export default Header