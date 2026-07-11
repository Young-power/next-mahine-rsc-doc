import Image from 'next/image'
import React from 'react'
import ZoomElement from '../motion/ZoomElement'

const BannerBib = () => {
    return (

        <ZoomElement>
            <div className='relative  w-full flex py-7 justify-center'>

                <Image
                    src="/assets/banner.jpeg"
                    width={300} height={300}
                    quality={100} priority
                    alt="banner"
                    className='rounded-2xl  dark:border dark:border-white dark:shadow dark:shadow-amber-50'
                />

            </div>
        </ZoomElement>

    )
}

export default BannerBib
