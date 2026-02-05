"use client";
import { IoLogoGithub } from 'react-icons/io'
import { SiNpm } from 'react-icons/si'
import ZoomElement from '../motion/ZoomElement'

const License = () => {
    return (
        <section className='w-full bg-white flex justify-center dark:bg-black py-5'>
 
            <div className='w-full max-w-xl mx-auto '> 
                <ZoomElement>
                    <div className=' w-full border border-gray-200 rounded-2xl lg:w-150 px-5 text-black shadow-md py-7'>
                        <h1 className='my-5 text-xl font-semibold text-muted-foreground'>PLUGIN DETAIL</h1>
                        <div className='space-y-5'>

                            <div className='flex w-full justify-around items-center gap-3  '>
                                <div className='w-1/2 bg-zinc-100 p-3 rounded-lg flex flex-col'>
                                    <span className='text-muted-foreground font-semibold'>Version</span>
                                    <span>1.0.1</span>
                                </div>

                                <div className='w-1/2 bg-zinc-100 p-3 rounded-lg flex flex-col'>
                                    <span className='text-muted-foreground font-semibold'>License</span>
                                    <span>MIT</span>
                                </div>

                            </div>

                            <div className='flex w-full justify-around items-center gap-3   '>
                                <div className='w-1/2 bg-zinc-100 p-3 rounded-lg flex-col flex'>
                                    <span className='text-muted-foreground font-semibold'>Scope</span>
                                    <span>Next.js only</span>

                                </div>
                                <div className='w-1/2 bg-zinc-100 p-3 rounded-lg flex flex-col'>
                                    <span className='text-muted-foreground font-semibold'>Compatible with</span>
                                    <span>Next.js 14+</span>

                                </div>


                            </div>
                            <div className='flex w-full justify-around items-center gap-3   '>


                                <div className='flex items-center gap-3 bg-zinc-100 w-1/2 p-3 rounded-xl '>
                                    <a
                                        href="https://github.com/Young-power/next-mahine-rsc-inspector"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-80 flex items-center gap-3"
                                    >
                                        <IoLogoGithub className="text-2xl" />  GitHub

                                    </a>
                                </div>

                                <div className='w-1/2 bg-zinc-100 p-3 rounded-lg flex-col flex'>
                                    📦 Packagist
                                </div>

                            </div>
                            <div className='flex w-full justify-around items-center gap-3   '>


                                <div className='flex items-center gap-3 bg-zinc-100 w-1/2 p-3 rounded-xl '>
                                    <a
                                        href="https://www.npmjs.com/package/next-mahine-rsc-inspector"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-80 flex items-center gap-3"
                                    >
                                        <SiNpm className="text-xl text-red-500" />
                                        Npm

                                    </a>
                                </div>

                                <div className='w-1/2 bg-zinc-100 p-3 rounded-lg flex-col flex'>
                                    <span className='text-muted-foreground font-semibold'>
                                        Total downloads
                                    </span>
                                    <span>220</span>
                                </div>

                            </div>

                        </div>



                    </div>



                </ZoomElement>
            </div>




        </section>
    )
}

export default License
