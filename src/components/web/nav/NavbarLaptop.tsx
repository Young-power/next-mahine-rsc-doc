"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import CardMotion from "../motion/CardMotion";

const NavbarLaptop = () => {
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
    <nav className="w-full">
      <ul className="flex items-center justify-center gap-8">
        {links.map((link, index) => (
          <CardMotion delay={index * 0.3}  key={index}>
            <li
             
              className={`
              cursor-pointer
              font-bold
              italic
              text-md
              text-nowrap
              duration-300
              ${pathName === link.href
                  ? "text-green-500"
                  : "text-muted-foreground dark:text-white"
                }
              hover:text-green-600
            `}
            >

              <Link href={link.href}>{link.label}</Link>


            </li>
          </CardMotion>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarLaptop;
