export const Footer = () => {
  return (
    <footer className="bg-[#6b730d] w-full static bottom-0">
      <div className=" flex justify-around py-10">
        <div>
          <h1 className="font-bold font-palanquin uppercase text-[18px] mb-5">
            Destinations
          </h1>
          <div className="text-[17px]">
            <p>Abuja</p>
            <p>Ekiti</p>
            <p>Osun</p>
            <p>Lagos</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold font-palanquin uppercase text-[18px] mb-5">
            Interests
          </h1>
          <div className="text-[17px]">
            <p>Adventure travel</p>
            <p>Beaches</p>
            <p>Budget travel</p>
            <p>Omotade Planning</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold font-palanquin uppercase text-[18px] mb-5">
            Travel Booking
          </h1>
          <div className="text-[17px]">
            <p>Hotels</p>
            <p>Flight</p>
            <p>Insurance</p>
            <p>Locations</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold font-palanquin uppercase text-[18px] mb-5">
            Subscribe
          </h1>
          <div className="text-[17px]">
            <p className="text-black mb-5">Get 20% off at our online shop</p>
            <input className="border-gray-400slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 w-full h-[40px] px-5 bg-gray-300 rounded-md" />
          </div>
        </div>
      </div>
    </footer>
  );
};
