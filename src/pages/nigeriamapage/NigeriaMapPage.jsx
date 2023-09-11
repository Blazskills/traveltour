import { mg1, mg2, mg3, mg4, mg5, mg6, mg7 } from "../../assets/images";
import { Footer } from "../../components";

export const NigeriaMapPage = () => {
  return (
    <section className="w-full h-screen bg-green-50">
      <div className=" xl:min-h-[80vh] bg-primary bg-hero bg-cover bg-center text-white my-auto flex flex-col justify-center items-center">
        <div className="w-3/5  h-[50vh] flex flex-col justify-center items-start gap-y-5 bg-blur backdrop-blur-md backdrop-filter bg-opacity-40 p-5 rounded-sm">
          <h1 className="text-[24px]  lg:text-[90px] uppercase font-palanquin font-bold leading-[90px]">
            Awaken to a different world in Nigeria Travel Level
          </h1>
          <p className="text-white font-palanquin font-semibold w-4/5 leading-19 mb-5">
            Move your imagination, discover the unexpected and experience
            happiness on earth with a this simple web app helps you visualize
            how well-traveled you are in the Nigeria.
          </p>
        </div>
      </div>
      <div className="bg-slate-300 h-full">
        <div className="max-container">
          <div className="pt-10">
            <p className="text-black font-extrabold text-[25px] uppercase mb-5   ">
              Explore Nigeria By states
            </p>
            <div className="flex justify-between">
              <div className="flex gap-x-32 mb-5 ">
                <p className="cursor-pointer hover:text-[green]">
                  Akwa Ibom(10)
                </p>
                <p className="cursor-pointer hover:text-[green]">Lagos(10)</p>
                <p className="cursor-pointer hover:text-[green]">Abuja(10)</p>
                <p className="cursor-pointer hover:text-[green]">
                  Cross River(10)
                </p>
                <p className="cursor-pointer hover:text-[green]">Benin(10)</p>
                <p className="cursor-pointer hover:text-[green]">Enugu(10)</p>
              </div>
              <div>
                <p className="cursor-pointer ">More Cities</p>
              </div>
            </div>
            <div className="grid grid-cols-3 h-[700px] py-5">
              <div className="flex flex-col  gap-y-5">
                <div className="relative">
                  <div className=" bg-black cursor-pointer">
                    <img
                      src={mg1}
                      alt={mg1}
                      className="hover:opacity-[0.9] opacity-40 "
                    />
                    <div className="flex flex-col absolute bottom-5 left-10">
                      <p className="font-bold text-white uppercase">Abuja</p>
                      <p className="font-bold text-slate-500 ">
                        20 Destinations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className=" bg-black cursor-pointer">
                    <img
                      src={mg2}
                      alt={mg2}
                      className="hover:opacity-[0.9] opacity-40 object-cover"
                    />
                    <div className="flex flex-col absolute bottom-5 left-10">
                      <p className="font-bold text-white uppercase">Lagos</p>
                      <p className="font-bold text-slate-500 ">
                        10 Destinations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col gap-y-2 overflow-y-auto h-auto ml-2 scroll-smooth"
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
                      <p className="font-bold text-white uppercase">
                        Cross River
                      </p>
                      <p className="font-bold text-slate-500 ">
                        5 Destinations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className=" bg-black cursor-pointer">
                    <img
                      src={mg6}
                      alt={mg1}
                      className="hover:opacity-[0.9] opacity-40 "
                    />
                    <div className="flex flex-col absolute bottom-5 left-10">
                      <p className="font-bold text-white uppercase">Benin</p>
                      <p className="font-bold text-slate-500 ">
                        15 Destinations
                      </p>
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
                      <p className="font-bold text-slate-500 ">
                        19 Destinations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col  gap-y-5">
                <div className="relative">
                  <div className=" bg-black cursor-pointer">
                    <img
                      src={mg4}
                      alt={mg4}
                      className="hover:opacity-[0.9] opacity-40 "
                    />
                    <div className="flex flex-col absolute bottom-5 left-10">
                      <p className="font-bold text-white uppercase">Ekiti</p>
                      <p className="font-bold text-slate-500 ">
                        12 Destinations
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className=" bg-black cursor-pointer">
                    <img
                      src={mg5}
                      alt={mg5}
                      className="hover:opacity-[0.9] opacity-40 "
                    />
                    <div className="flex flex-col absolute bottom-5 left-10">
                      <p className="font-bold text-white uppercase">Osun</p>
                      <p className="font-bold text-slate-500 ">
                        50 Destinations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
