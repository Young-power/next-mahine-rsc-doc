"use client";

import { useState } from "react";
import { cliCommands } from "./cliData";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { IoCopyOutline } from "react-icons/io5";
import TextMotion from "../motion/TextMotion";
import CardMotion from "../motion/CardMotion";

const Cli = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = cliCommands[activeIndex];

    return (
        <div id="cli" className="w-full max-w-2xl mx-auto space-y-8 mt-16">

            {/* Header */}
            <div className="space-y-2">
                <TextMotion delay={0.5}>
                    <h2 className="text-3xl italic text-center  text text-muted-foreground lg:text-4xl font-bold tracking-tight">
                        NMRI - CLI
                    </h2>
                </TextMotion>

                <TextMotion delay={0.6}>
                    <p className="text-sm lg:text-md text-zinc-500 text-center">
                        Inspect React Server Components directly from your terminal
                    </p>
                </TextMotion>

            </div>

            {/* Command selector */}
            <div className="grid gap-3">
                {cliCommands.map((cmd, index) => {
                    const isActive = index === activeIndex;


                    return (

                        <CardMotion key={cmd.title} delay={index * 0.3} style={"w-full"} >
                            <button

                                onClick={() => setActiveIndex(index)}
                                className={`
    cursor-pointer shadow-xl w-full
    group relative text-left p-4 rounded-xl border transition-all
    ${isActive
                                        ? `
        bg-white border-slate-300
        dark:bg-slate-900 dark:border-slate-700
        shadow-sm
      `
                                        : `
        bg-white border-slate-200 hover:border-sky-400/50
        dark:bg-slate-950 dark:border-slate-800 dark:hover:border-sky-400/40
      `
                                    }
  `}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="font-semibold text-slate-900 dark:text-slate-100">
                                            {cmd.title}
                                        </div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400">
                                            {cmd.description}
                                        </div>
                                    </div>

                                    {isActive && (
                                        <p className="
        text-sm px-2 py-1 rounded-full
        bg-green-500/10 text-green-600
        dark:bg-green-400/10 dark:text-green-400 lg:text-lg flex justify-center items-center
      "><VscDebugBreakpointData />
                                            <span>active</span>
                                        </p>
                                    )}
                                </div>
                            </button>
                        </CardMotion>


                    );
                })}
            </div>


            <TextMotion delay={0.7}>
                <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
                    {/* Code block */}

                    {/* top bar */}
                    <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900">
                        <span className="text-xs text-sky-50 lg:text-lg font-mono">
                            CLI command
                        </span>
                        <button
                            onClick={() => navigator.clipboard.writeText(active.command)}
                            className="text-xl py-1 "
                        >
                            <IoCopyOutline className="text-green-300 text-xl lg:text-2xl" />

                        </button>
                    </div>


                    {/* code */}
                    <pre className="p-4 text-sm lg:text-lg font-mono text-zinc-100 whitespace-pre-wrap">
                        <span className="text-green-400">$ </span>
                        {active.command}
                    </pre>
                </div>
            </TextMotion>

        </div>
    );
};

export default Cli;







