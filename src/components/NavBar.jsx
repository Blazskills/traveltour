import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex items-center gap-x-10 pl-5 bg-[#052f16] h-20 shadow-lg">
      <Link
        to="."
        className="tracking-normal font-montserrat font-bold text-[19px] hover:border-b-4  border-green-100 text-[#ffffff]"
      >
        Home
      </Link>
      <Link
        to="map"
        className="tracking-normal font-montserrat font-bold text-[19px] hover:border-b-4  border-green-100 text-[#ffffff]"
      >
        Map
      </Link>
    </div>
  );
};
