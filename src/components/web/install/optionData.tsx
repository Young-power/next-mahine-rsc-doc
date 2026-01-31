import { FaYarn } from "react-icons/fa";
import { SiNpm, SiPnpm } from "react-icons/si";

export type PackageManager = "NPM" | "Yarn" | "PNPM";

export interface OptionType {
    item: PackageManager;
    value: string;
    icon: React.ReactNode
}

export const options: OptionType[] = [
    {
        item: "NPM",
        value: "npm install next-mahine-rsc-inspector",
        icon: <SiNpm className="text-red-500 text-2xl" />

    },
    {
        item: "Yarn",
        value: "yarn add next-mahine-rsc-inspector",
        icon: <FaYarn className="text-sky-500 text-2xl" />
    },
    {
        item: "PNPM",
        value: "pnpm add next-mahine-rsc-inspector",
        icon: <SiPnpm className="text-orange-500 text-2xl

" />

    }
];
