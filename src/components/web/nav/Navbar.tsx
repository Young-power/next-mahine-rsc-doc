"use client"
import { useEffect, useState } from "react"
import NavbarLaptop from "./NavbarLaptop"
import NavbarPhone from "./NavbarPhone"
import Image from "next/image";
import { ModeToggle } from "@/components/ui/dark/ModeToggle";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import CardMotion from "../motion/CardMotion";
import TextMotion from "../motion/TextMotion";
import ZoomElement from "../motion/ZoomElement";
const Navbar = () => {


    const [shadowNav, SetShadowNav] = useState<boolean>(false);
    const [version, setVersion] = useState<string>("");




    const handleShowNavbar = (): void => {
        SetShadowNav(!shadowNav);
    };


    
        useEffect(() => {
            getVersion();
        }, [])
    
        const getVersion = async () => {
    
            try {
                const res = await fetch("../../api/version");
                const data = await res.json();
                setVersion(data.version)
    
            } catch (error) {
    
                console.log(`Erreur de la récuperation de la version: ${error}`)
    
            }
    
        }

    return (
        <header
            className="
    w-full relative grid grid-cols-1 lg:px-42 py-5 lg:py-0
    bg-gray-100 text-black
    dark:bg-linear-to-br dark:from-stone-900 dark:to-stone-950 dark:text-white
    border-b border-gray-300 dark:border-gray-100
  "
        > <div className="w-full flex relative justify-between   lg:justify-center items-center lg:px-7">


                <div className="hidden lg:flex   relative  ">
                    <CardMotion delay={0.5} >
                        <Image
                            src="/assets/logobib.png"
                            width={90}
                            height={130}
                            alt="logo"
                            className="w-52 h-auto"
                        />
                    </CardMotion>



                </div>


                <div className=" lg:hidden flex   relative  ">
                    <CardMotion delay={0.5}>
                        <Image
                            src="/assets/logobib.png"
                            width={90}
                            height={130}
                            alt="logo"
                            className="w-32.5 h-auto"
                        />

                    </CardMotion>

                </div>

                {/*Laptop Bar*/}

                <div className="hidden max-w-xl mx-auto w-full lg:flex">
                    <NavbarLaptop />
                    <div className=" absolute right-16 top-[35%] space-x-3">
                        <CardMotion delay={0.5}>
                            <ModeToggle />
                            <span className="text-sm mb-1 italic text-muted-foreground  ml-2 font-bold -mt-3">V^{version}</span>

                        </CardMotion>

                    </div>
                </div>







                <div className=" lg:hidden mr-5">
                    <div className="flex flex-col justify-center items-center space-y-3 ">
                        <div className="flex flex-col justify-center items-center ">
                            {
                                <CardMotion delay={0.9} style="flex flex-col">
                                    <span className="text-[10px] mb-1 italic font-bold -mt-3">V^{version}</span>
                                    <ModeToggle />
                                </CardMotion>

                            }

                        </div>
                        {
                            shadowNav ? <ZoomElement> <CgClose className="text-3xl cursor-pointer" onClick={handleShowNavbar} /></ZoomElement> :
                                <ZoomElement>                             <FiMenu className="text-3xl cursor-pointer" onClick={handleShowNavbar} />
                                </ZoomElement>}
                    </div>

                </div>
            </div>





            {/*navbarPhone*/}
            <div
                className={` lg:hidden   text-white transition-transform duration-300 
                 ${shadowNav ? "translate-y-0" : "-translate-y-full"}`}>
                {shadowNav ? <TextMotion delay={0.3}><NavbarPhone /></TextMotion> : null}
            </div>




        </header>
    )
}

export default Navbar


