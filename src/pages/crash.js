/** @format */
import strongLine from "../assets/tv3_line_strong.svg";
import lightLine from "../assets/tv3_line_light.svg";
import question from "../assets/tv3_question.svg";
import vectorSvg from "../assets/tv3_vector.svg";
import dotsSvg from "../assets/tv3_dots.svg";
import flyingSvg from "../assets/flying1.png";
import graph from "../assets/tv3_graph.svg";
import { useNavigate } from "react-router-dom"; // Importing useNavigate

// import loading component
import Loading from "../components/loading/loading";

//
import "./auth/components/custom.css";

import { io } from "socket.io-client";
import { useEffect, useState } from "react";
const useSocket = () => {
  const socket = io("http://localhost:8000");

  const disconnectSocket = () => {
    socket.disconnect();
  };

  return { socket, disconnectSocket };
};
const btnArr = [
  { value: "XX.XXx", color: "#FF00FF" },
  { value: "XX.XXx", color: "#FFB500" },
  { value: "XX.XXx", color: "#FF00FF" },
  { value: "XX.XXx", color: "#FF00FF" },
  { value: "XX.XXx", color: "#00FFA4" },
  { value: "XX.XXx", color: "#00FFA4" },
  { value: "XX.XXx", color: "#FF00FF" },
  { value: "XX.XXx", color: "#FFB500" },
  { value: "XX.XXx", color: "#FF00FF" },
  { value: "XX.XXx", color: "#FF00FF" },
  { value: "XX.XXx", color: "#00FFA4" },
  { value: "XX.XXx", color: "#00FFA4" },
  { value: "XX.XXx", color: "#00FFA4" },
];

function Crash() {
  // crash number
  const navigate = useNavigate(); // Initializing navigate
  const { socket, disconnectSocket } = useSocket();

  // button status
  const [btnName, setBtnName] = useState("Bet");
  const [crashNum, setCrashNum] = useState("1.00");
  const [loading, setLoading] = useState(false);

  // crashing number and amount
  const [crashNumber, setCrashNumber] = useState(1);
  const [crashAmount, setCrashAmount] = useState(0);

  // crash button status
  const [crashStatus, setCrashStatus] = useState(false);

  // crashed result
  const [crashed, setCrashed] = useState("0");

  const enterGame = () => {
    if (socket) {
      socket.emit("enterGame");
      socket.on("enterSucess", () => {});
      socket.on("loading", () => {
        setBtnName("Bet");
        setCrashStatus(false);
        setLoading(true);
      });
      socket.on("crashingnumber", (crashingNum) => {
        setLoading(false);
        setBtnName("Crash");
        setCrashNum(crashingNum.toString());
      });
    }
  };

  const leaveGame = () => {
    socket.emit("leaveGame");
    socket.on("leaveSucess", () => {
      localStorage.removeItem("token");
      disconnectSocket();
      navigate("/auth/signin");
    });
  };
  useEffect(() => {
    enterGame();

    return () => {
      // Remove any listeners
      socket.off("enterSucess");
      socket.off("loading");
      socket.off("crashingnumber");
      socket.off("leaveSucess"); // Clean up leave event
    };
  }, []);

  const betAction = () => {
    switch (btnName) {
      case "Bet":
        if (socket) {
          let data = {
            crashAmount,
            crashNumber,
          };
          socket.emit("bet", data);
          socket.on("result", (res) => {
            setCrashed(res.resultAmount.toFixed(2).toString());
          });
        }
        break;
      case "Crash":
        if (socket) {
          let data = {
            crashAmount,
            crashNumber,
          };
          socket.emit("crash", data);
          socket.on("crashingRes", (winning) => {
            setCrashStatus(true);
            setCrashed(winning.toFixed(2).toString());
          });
        }
        break;
    }
  };

  return (
    <div className="xl:relative xl:w-full xl:h-screen bg-[#005ec0]">
      <div className="xl:absolute xl:w-[858px] h-screen mx-auto xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 xl:w-[1280px] xl:h-[720px] sm:flex sm:flex-col sm:justify-center">
        <div className="xl:h-[122px] sm:h-[122px] bg-[#003569] flex flex-col">
          <div className="xl:flex xl:flex-1 xl:justify-end xl:items-center sm:flex sm:flex-1 sm:justify-center sm:items-center pr-[10px] ">
            <div className="flex justify-between items-center w-[272px] h-[30px]">
              <div className="bg-[#0082FF] w-[64px] h-[30px] rounded-[4px] flex justify-between p-[2px] items-center">
                <button className="w-[25px] h-[25px] bg-[url('assets/tv3_spearker.svg')] bg-center bg-no-repeat bg-contain"></button>
                <img src={strongLine} alt="...loading" />
                <button className="w-[25px] h-[25px] bg-[url('assets/tv3_melody1.svg')] bg-center bg-no-repeat bg-contain"></button>
              </div>
              <img
                className="h-[10px] w-[4px]"
                src={lightLine}
                alt="...loading"
              />
              <div className="w-[100px] h-[30px] bg-[#0082FF] rounded-[4px] flex justify-between p-[4px] items-center">
                <img src={question} alt="... loading" />
                <p className="text-white text-[10px]">КАК ИГРАТЬ?</p>
              </div>
              <img
                className="h-[10px] w-[4px]"
                src={lightLine}
                alt="...loading"
              />
              <div className="w-[55px] h-[30px] bg-[#0082FF] rounded-[4px] flex justify-center p-[4px] items-center">
                <img src={vectorSvg} alt="..loading vector" />
                <p className="text-white ml-[8px]">0$</p>
              </div>
              <img
                className="h-[10px] w-[4px]"
                src={lightLine}
                alt="...loading"
              />
              <div className="w-[30px] h-[30px] p-[4px] bg-[#0082FF] rounded-[4px]">
                <img onClick={leaveGame} src={dotsSvg} alt="...laoding" />
              </div>
            </div>
          </div>
          <div className="pl-[15px] flex-1 flex items-center sm:w-[320px] sm:mx-auto overflow-auto">
            {btnArr.map((val, index) => (
              <button
                key={index}
                className="h-[33px] rounded-[4px] mr-[6px] p-[4px]"
                style={{
                  backgroundColor: val.color,
                }}
              >
                {val.value}
              </button>
            ))}
          </div>
        </div>
        <div className="xl:h-[450px] xl:bg-[url('assets/tv3_landing2.png')] xl:bg-cover sm:h-[400px] sm:bg-[url('assets/tv3_landing2.png')] sm:bg-cover sm:flex sm:flex-col sm:justify-end">
          <div className="flex">
            {loading ? <Loading /> : ""}
            <p className="xl:pt-[60px] xl:w-[250px] sm:w-[100px] xl:pl-[75px] xl:text-[70px] xl:text-white sm:pt-[20px] sm:pl-[25px] sm:text-[30px] sm:text-white">
              {crashNum}
            </p>
            <img
              className="xl:w-[250px] xl:h-[160px] sm:w-[177px] sm:h-[105px]"
              src={flyingSvg}
              alt="..."
            />
          </div>
          <div>
            <img className="xl:h-[288px]" src={graph} alt="..." />
          </div>
          {/* <canvas className="xl:w-full xl:h-[450px]"></canvas> */}
        </div>
        <div className="xl:h-[148px] bg-[#003569] xl:p-[15px] sm:p-[10px] sm:pb-[1px] xl:flex justify-between">
          <div className="xl:w-[400px] sm:w-[98%] xl:h-[118px]  bg-white xl:rounded-[8px] sm:mb-[10px] sm:rounded-[6px]">
            <div className="xl:h-[40px] bg-white xl:rounded-[8px] xl:p-[8px] sm:rounded-[8px] sm:p-[8px] flex justify-between">
              <div className="flex justify-center items-center">
                <button className="w-[16px] h-[17px] bg-white border-2 border-[#008ED9]"></button>
                <p className="text-[#008ED9] text-[14px] mx-[4px]">
                  winning: {crashed}
                </p>
                <button className="w-[16px] h-[17px] bg-white border-2 border-[#008ED9]"></button>
              </div>
              <button className="bg-[#008ED9] w-[100px] h-[25px] text-white rounded-[4px]">
                * 2.00
              </button>
            </div>
            <div className="xl:h-[78px] xl:rounded-[8px] sm:rounded-[6px] bg-gradient-to-r from-[#0090EE] to-[#00CCF3] p-[6px] flex justify-between">
              <div className="bg-white rounded-[6px] xl:w-[190px] p-[6px]">
                <div className="flex justify-between border-b-2 border-[#00A3F0]">
                  <button className="bg-[#00A3F0] w-[22px] h-[25px] text-white text-[16px]">
                    -
                  </button>
                  <div className="w-[100px] flex justify-start">
                    <input
                      value={crashAmount}
                      onChange={(e) => {
                        setCrashAmount(e.target.value);
                      }}
                      type="number"
                      className="w-[80px] text-right text-[18px]"
                      disabled={!loading ? true : false}
                    />
                    <span className="text-[18px]">$</span>
                  </div>
                  <button className="bg-[#00A3F0] w-[22px] h-[25px] text-white text-[16px]">
                    +
                  </button>
                </div>
                <div className="flex justify-between pt-[4px]">
                  <button className="bg-[#00A3F0] w-[22px] h-[25px] text-white text-[16px]">
                    -
                  </button>
                  <div className="w-[100px] flex justify-start">
                    <input
                      value={crashNumber}
                      onChange={(e) => {
                        setCrashNumber(e.target.value);
                      }}
                      type="number"
                      className="w-[80px] text-right text-[18px]"
                      disabled={!loading ? true : false}
                    />
                    <span className="text-[18px]">X</span>
                  </div>
                  <button className="bg-[#00A3F0] w-[22px] h-[25px] text-white text-[16px]">
                    +
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-[6px] xl:w-[190px] p-[6px]">
                <button
                  onClick={betAction}
                  disabled={crashStatus}
                  className="xl:w-full h-[100%] bg-gradient-to-r from-[#00CCF3] to-[#0090EE] rounded-[6px] text-white text-[36px] sm:w-[100px] sm:text-[18px] text-center"
                >
                  {btnName}
                </button>
              </div>
            </div>
          </div>
          <div className="xl:w-[400px] sm:hidden sm:w-[98%] xl:h-[118px]  bg-white xl:rounded-[8px] sm:mb-[10px] sm:rounded-[6px]">
            <div className="xl:h-[40px] bg-white xl:rounded-[8px] xl:p-[8px] sm:rounded-[8px] sm:p-[8px] flex justify-between">
              <p className="text-[#008ED9] text-[14px] mx-[4px]">Winning:</p>
              <button className="bg-[#008ED9] w-[100px] h-[25px] text-white rounded-[4px]">
                * 2.00
              </button>
            </div>
            <div className="xl:h-[78px] xl:rounded-[8px] sm:rounded-[6px] bg-gradient-to-r from-[#0090EE] to-[#00CCF3] p-[6px] flex justify-between">
              <div className="xl:flex xl:justify-center xl:items-center bg-white rounded-[6px] xl:w-[190px] p-[6px]">
                <p>Winning</p>
              </div>
              <div className="bg-white rounded-[6px] xl:w-[190px] p-[6px]">
                <div className="w-full h-[54px] bg-gradient-to-r from-[#00CCF3] to-[#0090EE] rounded-[6px] text-white text-[36px] text-center">
                  {crashed}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crash;
