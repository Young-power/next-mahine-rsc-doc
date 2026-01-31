"use client"
import Image from 'next/image'
import TextMotion from '../motion/TextMotion'
import ZoomElement from '../motion/ZoomElement'

const LogoSection = () => {
    return (
        <section className="mt-16 rounded-lg bg-muted/40 py-8">
            <div className="flex flex-col items-center gap-6">
                <TextMotion delay={0.5}>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        Powered by
                    </p>
                </TextMotion>

                <div className="flex items-center gap-12">


                    <ZoomElement>
                        <Image src="/assets/nextdotjs.svg" alt="Next.js" width={56} height={56} className='dark:bg-white dark:rounded-full dark:p-1 ' />

                    </ZoomElement>
                    <ZoomElement>
                        <Image src="/assets/react.svg" alt="React" width={56} height={56} className='dark:bg-white dark:rounded-full dark:p-1 animate-spin animation-duration-[8s]' />

                    </ZoomElement>
                </div>
            </div>
        </section>

    )
}

export default LogoSection
