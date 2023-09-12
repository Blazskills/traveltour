import { Footer, Tour } from "../../components";

export const NigeriaMapPage = () => {
  return (
    <section className=" w-full h-screen bg-green-50 ">
      <div className=" xl:min-h-[80vh] bg-primary bg-hero bg-cover bg-center text-white my-auto flex flex-col justify-center items-center laptop1024up:min-h-[100vh]">
        <div className="mobile425down:w-full w-3/5 tablet768up:w-4/5 laptop1024up:w-[75%]  h-[50vh] laptop1024up:h-[64vh] flex flex-col justify-center items-start gap-y-5  backdrop-filter bg-opacity-40 p-5 rounded-sm tablet768up:backdrop-blur-md">
          <h1 className="dark:text-white text-[24px]  tablet768up:text-[40px] laptop1024up:text-[80px] laptop1024up:leading-[90px] tablet768up:leading-[40px] uppercase font-palanquin font-bold screen2550up:text-[150px] screen2550up:leading-[150px]">
            Awaken to a different world in Nigeria Travel Level
          </h1>
          <p className="text-white dark:text-white font-palanquin font-semibold w-4/5 leading-19 mb-5 screen2550up:text-[30px] screen2550up:leading-[40px]">
            Move your imagination, discover the unexpected and experience
            happiness on earth with a this simple web app helps you visualize
            how well-traveled you are in the Nigeria.
          </p>
        </div>
      </div>
      <div className="bg-slate-300 pb-[50px]">
        <div className="max-container">
          <div className="pt-10">
            <p className="text-black font-extrabold text-[25px] uppercase mb-5 ml-2  ">
              Explore Nigeria By states
            </p>
            <div className="flex mobile425down:hidden  justify-between tablet768up:pr-2 tablet768up:pl-1 ">
              <div className="flex gap-x-32 mb-5 mobile425down:flex-col tablet768up:gap-x-[50px] tablet768down:mr-10 tablet768up:items-center">
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
            <Tour />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
