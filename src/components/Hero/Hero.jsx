import { IoIosSearch } from 'react-icons/io';
import bannerImag from '../../assets/banner.png';
const Hero = () => {
  return (
    <section
      className="bg-cover bg-center relative text-white  h-screen px-4 md:px-0"
      style={{ backgroundImage: `url(${bannerImag})` }}
    >
      <div className="md:pt-48 pt-24 text-center md:w-1/2 mx-auto space-y-4 md:space-y-8">
        <h1 className="text-white font-medium md:text-6xl text-3xl md:leading-snug leading-tight">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-lg md:text-2xl font-normal md:w-1/2 text-white mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        <div className="relative inline-block z-3">
          <input
            type="text"
            placeholder="Search furniture"
            className="py-2 px-6 bg-white/25 rounded-full border-gray-300 focus:outline-none"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-secondary cursor-pointer rounded-full text-lg">
            <IoIosSearch />
          </div>
        </div>
      </div>
      {/* Bluer Effect  */}
      <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'>

      </div>
    </section>
  );
};

export default Hero;
