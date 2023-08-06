import Image from "next/image";

export const Carousel = () => {
  return (
    <div className="w-screen">
      <div className="carousel py-10 h-1/2 bg-white">
        <div className="carousel-item gap-5">
          <div className="image-container">
            <Image
              layout="intrinsic"
              className="rounded-box md:px-5 px-2"
              src="/photos/home/carousel/asifSir.png"
              alt="Burger"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="carousel-item gap-5">
          <div className="image-container">
            <Image
              layout="intrinsic"
              className="rounded-box md:px-5 px-2"
              src="/photos/home/carousel/alaminBro.png"
              alt="Burger"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="carousel-item gap-5">
          <div className="image-container">
            <Image
              layout="intrinsic"
              className="rounded-box md:px-5 px-2"
              src="/photos/home/carousel/mendi.png"
              alt="Burger"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="carousel-item gap-5">
          <div className="image-container">
            <Image
              layout="intrinsic"
              className="rounded-box md:px-5 px-2"
              src="/photos/home/carousel/ezu.png"
              alt="Burger"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
