/** @format */
import { Input } from "antd";
import btn1 from "../assets/tv2_btn1.png";
import btn2 from "../assets/tv2_btn2.png";
import btn3 from "../assets/tv2_btn3.png";
import btcSvg from "../assets/btc.svg";
import etherSvg from "../assets/eth.svg";
import tronSvg from "../assets/tron.svg";
import binanSvg from "../assets/binance.svg";
import usdSvg from "../assets/usdcoin.svg";
import tetherSvg from "../assets/tv2_tether.svg";
import moneroSvg from "../assets/monero.svg";
import dogeSvg from "../assets/doge.svg";
import btccashSvg from "../assets/btc_cash.svg";
import liteSvg from "../assets/litecoin.svg";
import cardSvg from "../assets/cardano.svg";
import zCashSvg from "../assets/zcash.svg";
import manAva from "../assets/tv2_man1.png";

const coinArr = [
  {
    src: `${btcSvg}`,
    value: "Bitcoin",
  },
  {
    src: `${etherSvg}`,
    value: "Ethereum",
  },
  {
    src: `${tronSvg}`,
    value: "Tron",
  },
  {
    src: `${binanSvg}`,
    value: "Binance",
  },
  {
    src: `${usdSvg}`,
    value: "USD Coin",
  },
  {
    src: `${tetherSvg}`,
    value: "Tether",
  },
  {
    src: `${moneroSvg}`,
    value: "Monero",
  },
  {
    src: `${dogeSvg}`,
    value: "Doge",
  },
  {
    src: `${btccashSvg}`,
    value: "BTC cash",
  },
  {
    src: `${liteSvg}`,
    value: "Litecoin",
  },
  {
    src: `${cardSvg}`,
    value: "Cardano",
  },
  {
    src: `${zCashSvg}`,
    value: "Z Cash",
  },
];

function Replacement() {
  return (
    <div className="sm:relative sm:w-full sm:h-screen xl:relative xl:w-full xl:h-screen bg-[#00a2ea]">
      <div className="sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[95%] sm:h-[550px] sm:flex xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 xl:w-[802px] xl:h-[607px] xl:mx-auto bg-white xl:flex">
        <div className="sm:w-[153px] bg-[#EEF1F8] xl:w-[343px] xl:p-[25px]">
          <div className="flex flex-wrap sm:justify-between sm:p-[4px]">
            <button className="bg-[#67B0FC] text-white sm:w-[51px] sm:h-[36px] sm:rounded-[4px] sm:py-[6px] sm:px-[6px] xl:rounded-[10px] xl:text-[16px] xl:py-[8px] xl:px-[10px] xl:mr-[12px] text-white mb-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.1),0_12px_24px_rgba(0,0,0,0.1)]">
              Все
            </button>
            <button className="sm:w-[60px] sm:h-[36px] xl:text-[16px] xl:py-[8px] xl:px-[10px] bg-white text-[#8D8D8D] xl:rounded-[10px] mb-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.1),0_12px_24px_rgba(0,0,0,0.1)]">
              Банки
            </button>
            <button className="sm:text-[11px] sm:w-[100%] sm:px-[4px] sm:py-[6px] sm:mx-auto  xl:text-[16px] xl:py-[8px] xl:px-[10px] bg-white text-[#8D8D8D] xl:rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.1),0_12px_24px_rgba(0,0,0,0.1)]">
              Электронные деньги
            </button>
          </div>
          <div className="sm:p-[6px] mt-[17px] flex flex-wrap justify-between">
            <img
              className="xl:w-[48%] sm:mb-[10px]"
              src={btn1}
              alt="...loading png"
            />
            <img
              className="xl:w-[48%] sm:mb-[10px]"
              src={btn2}
              alt="...loading png"
            />
            <img
              className="xl:w-[48%] xl:mt-[12px]"
              src={btn3}
              alt="...loading png"
            />
          </div>
        </div>
        <div className="xl:py-[25px] xl:w-[459px] xl:px-[13px]">
          <div className="sm:p-[6px] xl:w-[416px] xl:h-[118px]">
            <div className="flex justify-between">
              <p className="sm:text-[13px] xl:text-[21px]">пОПОЛНЕНИЕ</p>
              <div className="flex">
                <span className="sm:text-[13px] mr-[6px] text-[#bdbdbd] xl:text-[14px]">
                  ID:XXXXXX
                </span>
                <button className="sm:w-[25px] sm:h-[20px] w-[30px] h-[25px] bg-[#EEF1F8] rounded-[6px]"></button>
              </div>
            </div>
            <div className="xl:mt-[15px]">
              <p className="sm:text-[8px] xl:text-[15px]">
                пОПОЛНЕНИЕ ЧЕРЕЗ КРИПТОВАЛЮТУ
              </p>
            </div>
            <div className="xl:mt-[15px]">
              <Input
                className="xl:text-[18px] sm:text-[12px] xl:h-[46px] sm:h-[37px]"
                style={{
                  borderRadius: 10,
                  paddingLeft: 14,
                }}
              />
            </div>
          </div>
          <div className="sm:flex sm:p-[6px] sm:flex-wrap sm:w-[220px] sm:mx-auto sm:justify-between xl:mt-[18px] xl:flex flex-wrap justify-between">
            {coinArr.map((val) => (
              <div className="sm:mb-[8px] sm:p-[8px] w-[48%] xl:h-[80px] bg-[#EEf1f8] rounded-[10px] xl:pt-[7px] xl:pl-[17px] xl:mb-[12px] sm:flex sm:justify-between sm:align-center">
                <img className="xl:w-[33px] sm:w-[16px]" src={val.src} />
                <p className="xl:mt-[8px] sm:text-[14px] xl:text-[18px]">
                  {val.value}
                </p>
              </div>
            ))}
          </div>
          <div className="xl:mt-[30px] sm:flex sm:justify-end">
            <p className="sm:hidden text-[12px]">
              вСЕ ПРАВА ЗАЩИЩЕННЫ И ОХРАНЯЮТСЯ ЗАКОНОМ.
            </p>
            <img
              src={manAva}
              className="xl:hidden sm:block sm:w-[120px] sm:h-[160px]"
              alt="...loading"
            />
          </div>
          <div>
            <p className="xl:hidden sm:block sm:text-[8px] sm:ml-[10px] sm:mt-[5px] sm:text-[blue]">
              вСЕ ПРАВА ЗАЩИЩЕННЫ И ОХРАНЯЮТСЯ ЗАКОНОМ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Replacement;
