import Accordian from "./Accordian";
import Button from "./Button";
import icon from "../Media/Icon1.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#101517] text-white">
      <div className="p-10">
        <h1 className="text-4xl">LetsBlog.com</h1>
        <Accordian />
      </div>

      <div className="w-full flex justify-center p-4">
        <select
          name="language"
          id="language"
          className="p-4 mt-4 w-2/3 cursor-pointer border rounded"
        >
          <option value="hindi" className="text-black">Hindi</option>
          <option value="english" className="text-black">English</option>
          <option value="spanish" className="text-black">Spanish</option>
          <option value="japanese" className="text-black">Japanese</option>
        </select>
      </div>

      {/* Buttons that navigate to /editor */}
      <div className="flex justify-around p-4">
        <Button
          text="Instagram"
          bgColor="bg-red-400"
          onClick={() => navigate("/editor")}
        />
        <Button
          text="LinkedIn"
          bgColor="bg-blue-400"
          onClick={() => navigate("/editor")}
        />
      </div>

      <div className="flex justify-center mt-4 pb-7">
        <img src={icon} alt="" className="h-12" />
        <img src={icon} alt="" className="h-12" />
        <img src={icon} alt="" className="h-12" />
        <img src={icon} alt="" className="h-12" />
      </div>

      <div className="text-center p-5">
        <h2>
          LetsBlog.com <br /> By Abhinav Raman
        </h2>
      </div>
    </section>
  );
};

export default Footer;
