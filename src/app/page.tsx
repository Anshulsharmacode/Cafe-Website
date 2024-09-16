
import Cafe from "@/Components/Cafe";
import Front from "@/Components/Front"
import VerticalEventPricingCards from "@/Components/Prince"
import ThreeDCardDemo from "@/Components/Card"
import Footer from "@/Components/Footer"
import Gallery from "@/Components/Gallery";

export default function Home() {
  return (
<div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 backdrop-blur-md">
    <Front/>
    <Cafe/>
    <VerticalEventPricingCards/>
    <ThreeDCardDemo/>
    <Gallery/>
    
    <Footer/>
    </div>

  );
}
