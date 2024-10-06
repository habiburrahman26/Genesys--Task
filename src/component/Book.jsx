import book1 from "../assets/image/Choose-Your-Enemies.png";
import book2 from "../assets/image/Front.png";
import patt from "../assets/image/Group 229.png";
import people from "../assets/image/pat-home-hero 1.png";
import quote from "../assets/image/quotes.png";

const Book = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col xl:flex-row xl:justify-between justify-center items-center bg-black px-2 sm:px-4 xl:px-16 2xl:px-[148px] pt-24 pb-28">
        <div>
          <h2 className="text-white font-medium text-2xl md:text-4xl pb-4">
            Patrick Bet-David's
          </h2>
          <h2 className="text-red font-bold text-3xl md:text-6xl pb-12">
            Signed Collection
          </h2>
          <button className="bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 hover:gap-3 transition-all hover:ring-2 ring-red">
            <span className="font-medium">SHOP NOW</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <img src={patt} alt="pat" className="w-3/4 pt-4" />
        </div>
        <div className="flex">
          <img src={book1} alt="book" className="w-36 sm:w-full sm:h-full" />
          <img src={book2} alt="book" className="w-36 sm:w-full h-full" />
        </div>
      </div>
      <div className="grid grid-cols-3 items-center bg-[#EC3339] px-2 sm:px-4 xl:px-16 2xl:px-[148px] h-[577px]">
        <h2 className="relative col-span-2 font-bold text-5xl text-white whitespace-pre-line">
          Our mission is to enlighten, entertain
          and empower current and future
          leaders around the world.
          <img
            src={quote}
            alt="quote"
            className="absolute -top-36 -left-10"
          />
        </h2>
        <img
          src={people}
          alt="hero img"
          className="absolute bottom-0 right-10 float-left shape"
        />
      </div>
    </section>
  );
};

export default Book;

