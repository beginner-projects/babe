import { NavCompany } from "./NavigationData";

const NavigationBar = () => {
  return (
    <div className="Nagation w-[85%] py-4 flex justify-between">
      <div className="">
        {NavCompany.logo}
        {NavCompany.title}
      </div>
      <div className=""></div>
    </div>
  );
};

export default NavigationBar;
