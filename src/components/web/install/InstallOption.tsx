"use client";

import { useState } from "react";
import { options, PackageManager } from "./optionData";
import { IoCopyOutline } from "react-icons/io5";
import CardMotion from "../motion/CardMotion";

const InstallOption = () => {
    const [selected, setSelected] = useState<PackageManager>("NPM");

    const activeOption = options.find(o => o.item === selected)!;


    const copyFunc = () => {
        navigator.clipboard.writeText(activeOption.value)
    }


    return (
        <div className="w-full max-w-xl mx-auto space-y-4">

            {/* Tabs */}

            <CardMotion delay={0.9}>
                <div className="flex gap-2 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl">
                    {options.map((data) => {
                        const isActive = selected === data.item;

                        return (
                            <button
                                key={data.item}
                                onClick={() => setSelected(data.item)}
                                className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                transition-all cursor-pointer
                ${isActive
                                        ? "bg-white text-zinc-900 shadow dark:bg-zinc-800 dark:text-white"
                                        : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                                    }
              `}
                            >
                                <span>{data.icon}</span>
                                <span className="italic">{data.item}</span>
                            </button>
                        );
                    })}
                </div>
            </CardMotion>


            {/* Code block */}

            <CardMotion delay={0.7}>
                <div className="relative w-full bg-zinc-900 text-zinc-100 rounded-xl p-4 font-mono text-sm">
                    <code className="select-all">
                        {activeOption.value}
                    </code>

                    <button
                        onClick={copyFunc}
                        className="absolute top-3 right-0 text-xs px-3 py-1 rounded-md
                     bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition"
                    >
                        <IoCopyOutline className="text-green-300 text-xl" />
                    </button>
                </div>
            </CardMotion>

        </div>
    );
};

export default InstallOption;
