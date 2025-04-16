import CaseStudies from "@/components/home/case-studies";
import Hero from "@/components/Home/hero";
import HomeServices from "@/components/home/home-services";

export default function Home() {
  return (
    <div className="text-primary font-['Chakra'] bg-black">
      <Hero />
      <HomeServices />
      <CaseStudies/>
    </div>
  );
}
