"use client"
import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { toast } from 'react-toastify'
import CardMotion from '../motion/CardMotion'
import ZoomElement from '../motion/ZoomElement'

const Author = () => {
    return (
        <section id='author' className="mx-auto max-w-3xl py-16 text-center">
        <CardMotion delay={0.7}>
            <Image
                src="/assets/Mahine.jpg"
                alt="Mahaman Mahine Kamagaté"
                width={120}
                height={120}
                className="mx-auto rounded-full"
            />
        </CardMotion>
            <CardMotion delay={0.5}>
                <h1 className="mt-6 text-2xl font-bold">
                    Mahaman Mahine Kamagaté
                </h1>
            </CardMotion>

          <CardMotion delay={0.7}>
              <p className="mt-2 text-sm text-muted-foreground">
                Web & Mobile Developer · JavaScript Library Creator
            </p>
          </CardMotion>
<ZoomElement>

            <p className="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                I’m the creator and maintainer of <strong>next-mahine-rsc-inspector</strong>.
                I build developer tools focused on improving architecture, performance,
                and developer experience in modern Next.js applications,from Côte d’Ivoire 🇨🇮.
            </p>
</ZoomElement>

            <div className="mt-6 flex justify-center items-center gap-4 text-sm">
               <CardMotion delay={0.5}>
                 <a
                    href="https://github.com/dashboard"
                    target="_blank"
                    className=""
                >
                    <IoLogoGithub className='text-xl lg:text-2xl' />
                </a>
               </CardMotion>

               <CardMotion delay={0.6}>
                <a
                    href="https://www.linkedin.com/in/mahine-kamagat%C3%A9-"
                    target="_blank"
                    className=""
                >
                    <FaLinkedinIn className='text-xl lg:text-2xl' />
                </a>
               </CardMotion>
               

               <CardMotion delay={0.7}>
                 <span
                    onClick={() => toast.info("I don't have account no yet")}
                    className="hover:underline cursor-pointer"
                >
                    Buy me a coffee
                </span>
               </CardMotion>

                <CardMotion delay={0.8}>
                <a
                    href="https://my-portfolio-one-livid-10.vercel.app/"
                    target="_blank"
                    className="hover:underline"
                >
                    Portfolio
                </a>
               </CardMotion>
                  <CardMotion delay={0.8}>
                <a
                    href="https://www.youtube.com/@youngworker"
                    target="_blank"
                    className="hover:underline"
                >
                    Youtube
                </a>
               </CardMotion>
            </div>
        </section>
    )
}

export default Author
