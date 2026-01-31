"use client"
import InstallOption from './InstallOption'
import TextMotion from '../motion/TextMotion'

const Install = () => {
    return (
        <section id="install" className='text-center mt-10  flex flex-col justify-center items-center '>

            <TextMotion delay={0.6}>
                <p className='text-3xl font-bold italic text-muted-foreground lg:text-4xl '>How to Install </p>
            </TextMotion>
            <TextMotion delay={0.7}>
                <span className='font-bold tracking-wide text-xl'>Next-Mahine-Rsc-Inspector</span>
            </TextMotion>
            
            <div className='mt-10'>
                <InstallOption />

            </div>
        </section>
    )
}

export default Install
