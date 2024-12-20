import profile from "@/../public/image/profile.webp";
import Card from "@/components/card";
import HeroSection from "@/components/Herosection";
import Navbar from "@/components/navbar";
// import Page from "@/ Page";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#1C1E53] w-full h-[560px]">
      <Navbar />
      <HeroSection />
      {/* <Card
        comments="20k"
        designation="YouTuber & Blogger"
        image={profile.src}
        likes="60.4k"
        name="CodingLab"
        share="12.4k"
      /> */}
      {/* <Page/> */}
    </div>
  );
}
