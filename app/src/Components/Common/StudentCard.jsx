import React from "react";
import personImg from "../../assets/vector/person.png";
import { IoIosArrowForward } from "react-icons/io";

const StudentCard = () => {
  return (
    <>
      <div class="relative flex flex-col mt-6 bg-white border border-slate-200 rounded-lg w-full shadow-lg">
        <div class="p-4 grid grid-cols-3">
          <div class="mb-2 text-slate-800 text-xl font-semibold grid content-around">
            <img src={personImg} alt="" className=" w-20 h-20 " />
          </div>
          <div class="text-slate-600 leading-normal font-light col-span-2">
            <p className="font-medium">Mentor Name: Charan</p>
            <p className="font-medium">Qualification: Btech CSE</p>
            <p className="font-medium">Email: charan@gmail.com</p>
            <p className="font-medium">Conatct No.: 1234567890</p>
            <p className="font-medium">Expertice: Software Engineer</p>
            <p className="font-medium">Industry: IT & development</p>
          </div>
        </div>
        <div class="mx-3 border-t border-slate-200 pb-3 pt-2 px-1 flex justify-end">
          <b class="text-sm text-blue-500 flex">
            View Details <IoIosArrowForward />
          </b>
        </div>
      </div>
    </>
  );
};

export default StudentCard;
