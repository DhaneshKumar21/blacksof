import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='main-section flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-3'>
        <h2 className='text-[15vw] text-[#00bfff]'>404</h2>
        <p className='text-wrap '>Could not find requested resource</p>
        <div className='flex justify-center items-center gap-5'>
          <Link href="./" className='btn' replace={true}>Go Back</Link>
          <Link href="/" className='btn' replace={true}>Home</Link>
        </div>
      </div>
    </div>
  )
}
