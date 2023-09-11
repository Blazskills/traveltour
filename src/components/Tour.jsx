import { mg1, mg11, mg2, mg3, mg4, mg5 } from "../assets/images";

export const Tour = () => {
  return (
    <div className="grid mobile425down:grid-cols-1 tablet768up:grid-cols-2  py-5 mx-2 gap-2">
      <div className="relative">
        <div className=" bg-black cursor-pointer">
          <img
            src={mg1}
            alt={mg1}
            className="hover:opacity-[0.9] opacity-40 laptop1440up:w-full"
          />
          <div className="flex flex-col absolute bottom-5 left-10">
            <p className="font-bold text-white uppercase">Abuja</p>
            <p className="font-bold text-slate-500 ">20 Destinations</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className=" bg-black cursor-pointer">
          <img
            src={mg2}
            alt={mg2}
            className="hover:opacity-[0.9] opacity-40 object-cover laptop1440up:w-full"
          />
          <div className="flex flex-col absolute bottom-5 left-10">
            <p className="font-bold text-white uppercase">Lagos</p>
            <p className="font-bold text-slate-500 ">10 Destinations</p>
          </div>
        </div>
      </div>

      {/* <div
        className="flex flex-col  tablet768up:gap-y-2 tablet768up:overflow-y-auto h-auto tablet768up:ml-2 scroll-smooth mobile425down:mb-2 mobile425down:gap-2"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#003520",
        }}
      >
        <div className="relative">
          <div className=" bg-black cursor-pointer">
            <img
              src={mg3}
              alt={mg3}
              className="hover:opacity-[0.9] opacity-40 "
            />
            <div className="flex flex-col absolute bottom-5 left-10">
              <p className="font-bold text-white uppercase">Cross River</p>
              <p className="font-bold text-slate-500 ">5 Destinations</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className=" bg-black cursor-pointer">
            <img
              src={mg6}
              alt={mg6}
              className="hover:opacity-[0.9] opacity-40 "
            />
            <div className="flex flex-col absolute bottom-5 left-10">
              <p className="font-bold text-white uppercase">Benin</p>
              <p className="font-bold text-slate-500 ">15 Destinations</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className=" bg-black cursor-pointer">
            <img
              src={mg7}
              alt={mg7}
              className="hover:opacity-[0.9] opacity-40 "
            />
            <div className="flex flex-col absolute bottom-5 left-10">
              <p className="font-bold text-white uppercase">Enugu</p>
              <p className="font-bold text-slate-500 ">19 Destinations</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative">
        <div className=" bg-black cursor-pointer">
          <img
            src={mg4}
            alt={mg4}
            className="hover:opacity-[0.9] opacity-40 laptop1440up:w-full"
          />
          <div className="flex flex-col absolute bottom-5 left-10">
            <p className="font-bold text-white uppercase">Ekiti</p>
            <p className="font-bold text-slate-500 ">12 Destinations</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className=" bg-black cursor-pointer">
          <img
            src={mg5}
            alt={mg5}
            className="hover:opacity-[0.9] opacity-40 laptop1440up:w-full"
          />
          <div className="flex flex-col absolute bottom-5 left-10">
            <p className="font-bold text-white uppercase">Osun</p>
            <p className="font-bold text-slate-500 ">50 Destinations</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className=" bg-black cursor-pointer">
          <img
            src={mg3}
            alt={mg3}
            className="hover:opacity-[0.9] opacity-40 laptop1440up:w-full"
          />
          <div className="flex flex-col absolute bottom-5 left-10">
            <p className="font-bold text-white uppercase">Ogun</p>
            <p className="font-bold text-slate-500 ">3 Destinations</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className=" bg-black cursor-pointer">
          <img
            src={mg11}
            alt={mg11}
            className="hover:opacity-[0.9] opacity-40 laptop1440up:w-full"
          />
          <div className="flex flex-col absolute bottom-5 left-10">
            <p className="font-bold text-white uppercase">Cross River</p>
            <p className="font-bold text-slate-500 ">9 Destinations</p>
          </div>
        </div>
      </div>
    </div>
  );
};
