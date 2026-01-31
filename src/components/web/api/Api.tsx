"use client"
import TextMotion from '../motion/TextMotion'
import CardMotion from '../motion/CardMotion'

const Api = () => {
    return (
        <div id='api' className='max-w-xl mx-auto  space-y-10 mt-20'>
            <TextMotion delay={0.5}>
                <p className="text-center text-2xl  lg:text-3xl italic">📦 API</p>

            </TextMotion>

            <CardMotion delay={0.7}>
                <div className="mb-3 max-w-2xl rounded-md border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs lg:text-md text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-zinc-100">
                        scanProject()
                    </strong>{" "}
                    scans a full Next.js App Router project and returns global Server and Client
                    Components statistics.
                </div>
            </CardMotion>


            <CardMotion delay={0.8}>
                <div className="mb-3 max-w-2xl lg:text-md rounded-md border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-zinc-100">
                        analyzeFile()
                    </strong>{" "}
                    analyzes a single file and detects whether it is a Client or Server Component.
                </div>
            </CardMotion>
            <CardMotion delay={0.9}>
                <div className="mb-3 max-w-2xl lg:text-md rounded-md border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                    <strong className="text-zinc-900 dark:text-zinc-100">
                        computeStats()
                    </strong>{" "}
                    computes aggregated statistics from raw scan results.
                </div>
            </CardMotion>






        </div>
    )
}

export default Api
