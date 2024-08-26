/** @format */
import { useState } from "react";
import { AnimatedTabs, Fast, Social } from "./components/index";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/slices/authSlice";

import { useNavigate } from "react-router-dom"; // Importing useNavigate

function Register() {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.auth.loading);

  const navigate = useNavigate(); // Initializing navigate

  const [compStatus, SetCompStatus] = useState("social");
  const CompStatus = (value) => {
    SetCompStatus(value);
  };
  const getData = async (value) => {
    const resultAction = await dispatch(signUp(value));
    if (signUp.fulfilled.match(resultAction)) {
      navigate("/crash");
    }
  };
  return (
    <div className="xl:relative h-screen">
      <div className="sm:relative sm:bg-[url('../../assets/tv1_mob_land.png')] sm:h-screen sm:bg-cover sm:bg-no-repeat sm:bg-right xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 xl:w-[1280px] xl:mx-auto xl:bg-[url('../../assets/tv1_back.jpg')] xl:h-[720px] xl:bg-cover xl:bg-no-repeat xl:bg-center xl:flex">
        <div className="xl:flex-1"></div>
        <div className="sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:mx-auto sm:w-[90%] xl:flex-1 xl:flex xl:justify-center xl:items-center">
          <div className="xl:w-[409px] bg-white rounded-[20px] p-[14px_22px_18px_20px]">
            <div className="text-[28px] bg-gradient-to-b from-black to-[#ccc] text-transparent bg-clip-text ">
              регистрация
            </div>
            <div>
              <AnimatedTabs sendData={CompStatus} />
              <div>
                {compStatus === "social" ? (
                  <Social toSignup={getData} />
                ) : (
                  <Fast />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
