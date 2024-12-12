import Card from "@/components/card";
import profile from "@/../public/image/profile.webp";

export default function Home() {
  return (
    <div className="space-x-6 p-10">
      <Card
        comments="20k"
        designation="YouTuber & Blogger"
        image={profile.src}
        likes="60.4k"
        name="CodingLab"
        share="12.4k"
      />
    </div>
  );
}
