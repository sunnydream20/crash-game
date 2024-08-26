/** @format */
import { useState } from "react";
import { Input, Button } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import googleSvg from "../../assets/google1.svg";
import w1Svg from "../../assets/w1.svg";
import telSvg from "../../assets/tel.svg";
import cornSvg from "../../assets/corn1.svg";
import r1Svg from "../../assets/r1.svg";
import man1Svg from "../../assets/man1.svg";
import { Link } from "react-router-dom";
import { signIn } from "../../redux/slices/authSlice";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

function SignIn() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate(); // Initializing navigate
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //socket part
  // const [socket, setSocket] = useState(null);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  // signin action
  const signin = async () => {
    const data = {
      email,
      password,
    };
    const resultAction = await dispatch(signIn(data));
    if (signIn.fulfilled.match(resultAction)) {
      // Create your wsLoginReq object
      const wsLoginReq = {
        msgId: 101,
        data: {
          token: resultAction.payload.token,
        },
      };
      if (socket) {
        socket.emit("wsLogin", wsLoginReq); // Emit the wsLogin event with your structured data
        socket.on("loginSuccess", async (user) => {
          console.log("login Sucess", user);
        });
      }
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
              авторизоваться
            </div>
            <div>
              <div className="mt-[17px] flex justify-between mb-[20px]">
                <div className="xl:w-[48px] xl:h-[48px] sm:w-[40px] sm:h-[40px] flex justify-center items-center bg-[#F2F2F2] rounded-[6px]">
                  <img
                    className="sm:w-[30px] sm:h-[30px]"
                    src={googleSvg}
                    alt="... loading img"
                  />
                </div>
                <div className="xl:w-[48px] xl:h-[48px] sm:w-[40px] sm:h-[40px] flex justify-center items-center bg-[#F2F2F2] rounded-[6px]">
                  <img
                    className="sm:w-[30px] sm:h-[30px]"
                    src={w1Svg}
                    alt="... loading img"
                  />
                </div>
                <div className="xl:w-[48px] xl:h-[48px] sm:w-[40px] sm:h-[40px] flex justify-center items-center bg-[#F2F2F2] rounded-[6px]">
                  <img
                    className="sm:w-[30px] sm:h-[30px]"
                    src={telSvg}
                    alt="... loading img"
                  />
                </div>
                <div className="xl:w-[48px] xl:h-[48px] sm:w-[40px] sm:h-[40px] flex justify-center items-center bg-[#F2F2F2] rounded-[6px]">
                  <img
                    className="sm:w-[30px] sm:h-[30px]"
                    src={cornSvg}
                    alt="... loading img"
                  />
                </div>
                <div className="xl:w-[48px] xl:h-[48px] sm:w-[40px] sm:h-[40px] flex justify-center items-center bg-[#F2F2F2] rounded-[6px]">
                  <img
                    className="sm:w-[30px] sm:h-[30px]"
                    src={r1Svg}
                    alt="... loading img"
                  />
                </div>
                <div className="xl:w-[48px] xl:h-[48px] sm:w-[40px] sm:h-[40px] flex justify-center items-center bg-[#F2F2F2] rounded-[6px]">
                  <img
                    className="sm:w-[30px] sm:h-[30px]"
                    src={man1Svg}
                    alt="... loading img"
                  />
                </div>
              </div>
            </div>
            <div className="border-t border-[#ccc]">
              <div className="mt-[20px]">
                <Input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="xl:rounded-[18px] sm:rounded-[10px 10px] xl:text-[18px] sm:text-[12px] xl:h-[46px] sm:h-[37px]"
                  style={{
                    paddingLeft: 14,
                  }}
                  placeholder="Электронная почта"
                />
                {error && error.email}
              </div>
              <div className="mt-[20px]">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={visible ? "text" : "password"}
                  className="xl:rounded-[18px] xl:text-[18px] sm:text-[12px] xl:h-[46px] sm:h-[37px]"
                  style={{
                    paddingLeft: 14,
                  }}
                  addonAfter={
                    !visible ? (
                      <EyeOutlined onClick={toggleVisibility} />
                    ) : (
                      <EyeInvisibleOutlined onClick={toggleVisibility} />
                    )
                  }
                  placeholder="парольа"
                />
                {error && error.password}
              </div>
            </div>
            <div className="mt-[10px] text-right">
              <Link className="sm:text-[14px] text-[#aaa]" to="/auth/forget">
                Forget Password?
              </Link>
            </div>
            <div className="mt-[12px]">
              <Button
                className="sm: rounded-[10px]"
                style={{
                  width: "100%",
                  backgroundColor: "#33cc33",
                  //backgroundColor: "#73E0A3", // strong
                  height: 44,
                  color: "white",
                  fontSize: 24,
                }}
                onClick={signin}
              >
                авторизоваться
              </Button>
              {error ? error.message : ""}
            </div>
            <div className="mt-[10px] text-[16px] text-center">
              <span style={{ color: "#8D8D8D" }}>еще не аккаунт?</span>
              <Link style={{ color: "#0474E4" }} to="/auth/signup">
                авторизоваться
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
