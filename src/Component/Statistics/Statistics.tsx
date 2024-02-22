import { FaHeartPulse } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { HiBuildingOffice, HiMiniUserGroup } from "react-icons/hi2";

const Statistics = () => {
  return (
    <div className="my-5">
      <div className="">
        <h3 className="font-bold bg-[#850000] border text-center text-white py-5 text-3xl mb-5">
          Statistics
        </h3>
        <div className="grid border text-white  md:grid-cols-4 lg:px-0">
          <div className="flex flex-col justify-center items-center  py-16 rounded-xl gap-3">
            <FaHeartPulse className="text-4xl"></FaHeartPulse>
            <h5 className="text-[#FE3942] text-4xl font-semibold">75</h5>
            <h6 className="font-bold text-xl">Success Smile</h6>
          </div>
          <div className="flex flex-col justify-center items-center  py-16 rounded-xl gap-3">
            <FaStethoscope className="text-4xl"></FaStethoscope>
            <h5 className="text-[#FE3942] text-4xl font-semibold">40</h5>
            <h6 className="font-bold text-xl">Happy Donors</h6>
          </div>
          <div className="flex flex-col justify-center items-center  py-16 rounded-xl gap-3">
            <HiMiniUserGroup className="text-4xl"></HiMiniUserGroup>
            <h5 className="text-[#FE3942] text-4xl font-semibold">80</h5>
            <h6 className="font-bold text-xl">Happy Recipient</h6>
          </div>
          <div className="flex flex-col justify-center items-center  py-16 rounded-xl gap-3">
            <HiBuildingOffice className="text-4xl"></HiBuildingOffice>
            <h5 className="text-[#FE3942] text-4xl font-semibold">10</h5>
            <h6 className="font-bold text-xl">Total Awards</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
