import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-[#F5E5E5] min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-[#8B4E61] font-serif">
        About Us
      </h1>

      {/* Image */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/aboutpic.png"
          alt="About Image"
          width={900}
          height={1200}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Text */}
      <div className="text-center max-w-4xl">
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#8B4E61] leading-relaxed">
          Welcome to our website! We are passionate about delivering the best
          products and services to our customers. Our team is dedicated to
          providing exceptional experiences and ensuring customer satisfaction.
          Our journey has been exciting, and we look forward to growing and
          innovating further. Thank you for being a part of our community.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
