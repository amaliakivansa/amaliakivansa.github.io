import Bio from "@/components/Bio";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <div>
     <Hero />
     <Bio />
     <Products />
     <SelectedWorks />
     <Footer />
    </div>
  );
}
