import profile from "@/../public/image/profile.webp";
import Card from "@/components/card";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="space-x-6 ">
      <Navbar />
      {/* <Card
        comments="20k"
        designation="YouTuber & Blogger"
        image={profile.src}
        likes="60.4k"
        name="CodingLab"
        share="12.4k"
      /> */}
    </div>
  );
}
