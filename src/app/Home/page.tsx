import Image from 'next/image';

const HeroSection = () => {
  const images = [
    { src: "/pic1.png", width: 350, height: 500 },
    { src: "/pic2.png", width: 400, height: 500 },
    { src: "/pic3.png", width: 400, height: 500 },
    { src: "/pic4.png", width: 250, height: 100 },
    { src: "/pic5.png", width: 400, height: 500 },
    { src: "/pic6.png", width: 310, height: 500 },
    { src: "/pic7.png", width: 330, height: 500 },
    { src: "/pic8.png", width: 500, height: 500 },
    { src: "/pic9.png", width: 310, height: 500 },
    { src: "/pic10.png", width: 320, height: 500 },
    { src: "/pic11.png", width: 350, height: 500 },
    { src: "/pic12.png", width: 220, height: 500 },
    { src: "/pic13.png", width: 300, height: 500 },
    { src: "/pic14.png", width: 300, height: 500 },
    { src: "/pic15.png", width: 300, height: 500 },
    { src: "/pic16.png", width: 270, height: 500 },
    { src: "/pic17.png", width: 320, height: 500 },
    { src: "/pic18.png", width: 400, height: 500 },
  ];

  return (
    <div className="bg-[#F5E5E5]">
      {/* HERO SECTION  */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        <Image
          src="/picture.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
      </div>
      <h1 className="md:text-7xl text-3xl font-bold text-center mt-20 mb-10 text-[#86404a] relative z-10">
        OUR BEST PRODUCTS
      </h1>

      {/* PRODUCTS */}
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
        {images.map((img, index) => (
          <div key={index} className="flex justify-center items-center">
            {/* Card with bg-[#F5E5E5] */}
            <div className="bg-[#F5E5E5] p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={img.src}
                alt={`Product Image ${index + 1}`}
                width={img.width}
                height={img.height}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
