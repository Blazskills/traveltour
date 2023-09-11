export const Footer = () => {
  return (
    <footer className="bg-[#6b730d]">
      <div className=" flex mobile425down:flex-col justify-around py-10 mobile425down:gap-y-5 mobile425down:px-2">
        <div>
          <h1 className="font-bold font-palanquin uppercase text-[18px] screen2550up:text-[50px] mb-5">
            Destinations
          </h1>
          <div className="text-[17px] screen2550up:text-[30px]">
            <p>Abuja</p>
            <p>Ekiti</p>
            <p>Osun</p>
            <p>Lagos</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold font-palanquin uppercase text-[18px] screen2550up:text-[50px] mb-5">
            Interests
          </h1>
          <div className="text-[17px] screen2550up:text-[30px]">
            <p>Adventure travel</p>
            <p>Beaches</p>
            <p>Budget travel</p>
            <p>Omotade Planning</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold font-palanquin uppercase text-[18px] screen2550up:text-[50px] mb-5">
            Travel Booking
          </h1>
          <div className="text-[17px] screen2550up:text-[30px]">
            <p>Hotels</p>
            <p>Flight</p>
            <p>Insurance</p>
            <p>Locations</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold font-palanquin uppercase text-[18px] screen2550up:text-[50px] mb-5">
            Subscribe
          </h1>
          <div className="text-[17px] flex flex-col">
            <p className="text-black mb-5 font-palanquin text-[20px] font-semibold screen2550up:text-[30px]">Get 20% off at our online shop</p>
            <input
              className=" screen2550up:placeholder:text-[25px] mb-5 border-gray-400slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 w-full h-[40px] screen2550up:h-[80px] px-5 bg-gray-300 rounded-md  screen2550up:rounded-xl"
              placeholder="Subscribe to tourist newsletter"
            />

            <button className="bg-[#000000] text-white w-fit m-auto px-10 py-2 rounded-lg animate-pulse screen2550up:text-[30px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
