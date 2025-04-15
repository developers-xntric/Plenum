import Hero from "@/components/Home/hero";
import HomeServices from "@/components/Home/HomeServices";

export default function Home() {
  return (
    <div className="text-primary font-['Chakra'] bg-black">
      <Hero />
      <HomeServices />
    </div>
  );
}
