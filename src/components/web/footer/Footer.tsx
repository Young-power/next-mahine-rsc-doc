"use client"
import { IoLogoGithub } from "react-icons/io";
import { SiNpm } from "react-icons/si";
import TextMotion from "../motion/TextMotion";
import CardMotion from "../motion/CardMotion";
import ZoomElement from "../motion/ZoomElement";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8 text-slate-900 dark:border-slate-800 dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center text-sm">
        
        <TextMotion delay={0.5}>
          <p className="font-medium">
         Built with ❤️
        </p>
        </TextMotion>

       <CardMotion delay={0.7}>
         <p className="text-xs text-muted-foreground lg:text-md">
          © {new Date().getFullYear()} Mahaman Mahine Kamagaté · Open Source
        </p>
       </CardMotion>

        <div className="flex items-center gap-5">
          <ZoomElement>
            <a
            href="https://github.com/Young-power/next-mahine-rsc-inspector"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <IoLogoGithub className="text-xl" />
          </a>
          </ZoomElement>

        <ZoomElement>
            <a
            href="https://www.npmjs.com/package/next-mahine-rsc-inspector"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <SiNpm className="text-xl text-red-500" />
          </a>
        </ZoomElement>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
