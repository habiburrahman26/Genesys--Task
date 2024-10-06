import img1 from '../assets/image/img (9).png';
import img2 from '../assets/image/img (10).png';
import img3 from '../assets/image/img (11).jpeg';
import img4 from '../assets/image/img (11).png';
import futureImg from '../assets/image/futurelooksbrights.png';

const IMAGE = [img1, img2, img3, img4, img3];

const Hero = () => {
  return (
    <section className="px-2 md:px-6 xl:px-32 2xl:px-[148px] pt-28 sm:pt-32 md:pt-60 bg-red pb-24">
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-3 -mt-10 ml-0 xl:ml-5 z-0">
        {IMAGE.map((item, i) => (
          <div key={i} className="font-inter text-white">
            <img
              src={item}
              alt="image"
              className="rounded-xl h-[300px] w-full"
            />
            <div className="pt-1">
              <p>Army Green Active Short Sleeve</p>
              <p className="text-lg">
                $34.55 <span className="ml-2 line-through">$34.55</span>
              </p>
            </div>
          </div>
        ))}

        <img src={futureImg} alt="future bright image" className="absolute -top-8 sm:-top-16 left-0 md:-left-4 -z-10 w-full md:w-3/4" />
      </div>
    </section>
  );
};

export default Hero;
