import img1 from '../assets/image/img (4).jpeg';
import img2 from '../assets/image/img (5).jpeg';
import img3 from '../assets/image/img (6).jpeg';
import img4 from '../assets/image/img (6).jpeg';

const IMAGE = [img1, img4, img3, img2];

const Product = () => {
  return (
    <section className="px-2 md:px-6 xl:px-32 2xl:px-[148px] pt-[100px] bg-light pb-24">
      <h2 className="font-montserrat font-medium text-2xl md:text-3xl xl:text-5xl uppercase pb-1">
        Buy 1 get 1 Free
      </h2>
      <h2 className="heading-second font-montserrat font-medium text-2xl md:text-3xl xl:text-5xl uppercase bg-light pb-12">
        ON best selling products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {IMAGE.map((item, i) => (
          <div
            key={i}
            className="font-inter text-black p-3 bg-white rounded-xl "
          >
            <img
              src={item}
              alt="image"
              className="rounded-xl h-[333px] w-full"
            />
            <div className="pt-1">
              <p>Army Green Active Short Sleeve</p>
              <p className="text-lg">
                $34.55 <span className="ml-2 line-through">$34.55</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
