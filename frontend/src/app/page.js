import BottomNavbar from "@/components/BottomNavbar";
import FilterTags from "@/components/Home/FilterTags";
import VideoFeed from "@/components/Home/VideoFeed";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <div className="w-full">
      <NavBar/>
      <div className="home-content">
        <FilterTags/>
        <VideoFeed/>
      </div>
      <BottomNavbar/>
    </div>
  );
}
