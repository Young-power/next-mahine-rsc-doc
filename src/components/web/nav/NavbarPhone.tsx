"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import TextMotion from "../motion/TextMotion";
const NavbarPhone = () => {
  const pathName = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "#install", label: "Getting Started" },
    { href: "#cli", label: "Cli" },
    { href: "#api", label: "Api" },
    { href: "#exemples", label: "Exemples" },
    { href: "#author", label: "Author" },

  ];

  return (
    <div className="w-full">
      <nav className="w-full flex flex-col justify-center items-center text-md font-bold italic ">
        <ul className="w-full flex flex-col justify-center items-center space-y-3">
          {links.map((link, index) => (

            <TextMotion delay={index * 0.3}    key={index}>

              <li
             
                className={`cursor-pointer w-full text-center text-md italic
  ${pathName === link.href ? "text-blue-500" : "text-muted-foreground"}
  hover:text-white hover:bg-linear-to-tl hover:from-blue-600 hover:to-blue-800
  duration-300 ease-in-out
`}

              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            </TextMotion>

          ))}

        </ul>


      </nav>
    </div>
  );
};

export default NavbarPhone;
