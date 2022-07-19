import { Info, Play } from 'phosphor-react'
import image from '../assets/highlighted.jpg'
import image1 from '../assets/highlighted1.jpg'

export function NetflixHighlightedContent() {
    return (
        <div>
            <img
                src={image1}
                alt="highlighted content"
                className='mb-[-340px] w-[100vw] h-[810px]'
            />

            <div className='flex flex-row gap-4 absolute left-14 top-[57%]'>
                <div className=' flex flex-row gap-5 px-7 py-4 bg-white rounded-md  align-middle justify-center hover:ring-2 ring-offset-2 ring-blue-600 hover:cursor-pointer'>
                    <Play size={24} weight="fill" className='mt-1' />
                    <p className='font-medium text-2xl'>Play</p>
                </div>

                <div className=' flex flex-row gap-5 px-7 py-4 bg-white rounded-md text-white align-middle justify-center bg-opacity-30 hover:cursor-pointer hover:bg-opacity-100 hover:text-black'>
                    <Info size={24} className='mt-1' weight='bold'/>
                    <p className='font-medium text-2xl '>Information</p>
                </div>
            </div>

        </div>
    )
}