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
import Carousel from "@/components/Home/Carousel/Carousel";

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
      <div className="bg-white">
        <h2 className="font-bold md:text-3xl text-slate-800 text-center pt-5">Moderator, advisor, president and general secretary&apos;s word</h2>
        <hr />
      </div>
      <Carousel />
      <Footer />
    </div>
  );
};

export default home;
