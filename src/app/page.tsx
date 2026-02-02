
import ButtonTop from "@/components/goTop/ButtonTop";
import Api from "@/components/web/api/Api";
import Author from "@/components/web/author/Author";
import CardBib from "@/components/web/CardBib";
import Cli from "@/components/web/cli/Cli";
import Exemple from "@/components/web/exemples/Exemple";
import Footer from "@/components/web/footer/Footer";
import Hero from "@/components/web/hero/Hero";
import Install from "@/components/web/install/Install";
import License from "@/components/web/license/License";
import LogoSection from "@/components/web/logoSection/LogoSection";

export default function Home() {
  return (
 <CardBib>
  <ButtonTop />
   <Hero />
   <Install />
   <Cli />
   <Api />
   <Exemple />
   <Author />
   <License  />
   <LogoSection />
   <Footer />
 </CardBib>
 
  );
}
