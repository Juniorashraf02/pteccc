// react imports
import { TopBar } from "@/components/Header/TopBar";
import { NavigationBar } from "@/components/Header/NavigationBar";
import Footer from "@/components/Footer/Footer";
import Info from "@/components/Info/Info";
// import Link from "next/link";

// third party imports
// import Carousel from "../components/Home/Carousel";
// import Image from "next/image";
import { Gallary } from "@/components/Home/Gallary/Gallary";

const home = () => {
  const handleSlideClick = (slideIndex: number) => {
    console.log("Clicked slide index:", slideIndex);
    // Perform any desired actions when a slide is clicked
  };

  return (
    <div className="h-screen">
      <div className="sticky top-0 z-10">
        <TopBar />
        <NavigationBar />
      </div>
      <Gallary/>
    
      <Info />
      {/* <Carousel 
      onSlideClick={handleSlideClick}
      imageOne="/photos/home/carousel/Asif-Sir.jpg"
      imageTwo="/photos/home/carousel/Asvisor.jpg"
      imageThree="/photos/home/carousel/President.jpg"
      imageFour="/photos/home/carousel/GS.jpg"

      /> */}
      <Footer />
    </div>
  );
};

export default home;