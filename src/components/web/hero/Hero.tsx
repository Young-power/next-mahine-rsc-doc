"use client";
import Image from "next/image"
import TextMotion from "../motion/TextMotion"
import ZoomElement from "../motion/ZoomElement"

const Hero = () => {
    return (
        <section className="mt-12">
            <div className="flex flex-col items-center text-center gap-6">
                {/* Title */}
                <TextMotion delay={0.5}>

                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight">
                        Next Mahine RSC Inspector
                    </h1>
                </TextMotion>
                {/* Subtitle */}
                <TextMotion delay={0.7}>
                    <p className="max-w-xl text-sm md:text-base text-muted-foreground">
                        The developer-friendly library to analyze React Server and Client Components in Next.js applications.
                    </p>
                </TextMotion>
                {/* Logo */}
                <div className="flex justify-center">
                    <ZoomElement>
                        <Image
                            src="/assets/logobib.png"
                            width={200}
                            height={200}
                            alt="logo"
                            className="w-96 md:w-48 lg:w-56 h-auto animate-spin animation-duration-[8s]"
                            priority
                        />
                    </ZoomElement>
                </div>
                <ZoomElement>
                    <button className="btn btn-outline btn-success px-10 py-2 mb-5">
                        <a href="#install">Getting Started</a>
                    </button>
                </ZoomElement>
            </div>
            <ZoomElement>
                <div className="mx-auto max-w-xl   text-center text-gray-500 dark:text-muted-foreground  rounded-2xl py-5 md:text-xl border-black space-y-5 lg:p-3 bg-muted dark:bg-white/10">
                    <p>  Next-mahine-rsc-inspector is an open-source tool that scans your Next.js
                        App Router project to analyze the usage of React Server Components.
                    </p>
                    <p>
                        It supports both app/ and src/app structures, provides CLI and programmatic
                        APIs, and allows exporting results as JSON for CI pipelines or reports.
                    </p>
                </div>
            </ZoomElement>
        </section>
    )
}

export default Hero
