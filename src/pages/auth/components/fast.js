/** @format */

import { Link } from "react-router-dom";
import { Button, Input, Checkbox } from "antd";
import { PlusOutlined, CloseCircleOutlined } from "@ant-design/icons";
import googleSvg from "../../../assets/google1.svg";
import w1Svg from "../../../assets/w1.svg";
import telSvg from "../../../assets/tel.svg";
import cornSvg from "../../../assets/corn1.svg";
import r1Svg from "../../../assets/r1.svg";
import man1Svg from "../../../assets/man1.svg";

import { CurrencySelector } from "../../../components/currencyselecte";
import { useState } from "react";

export function Fast() {
  const [promo, setPromo] = useState(0);
  const [accept, setAccept] = useState(0);

  const changePromo = (value) => {
    setPromo(value);
  };

  const changeAccept = () => {
    setAccept(!accept);
  };

  return (
    <div>
      <div className="mt-[17px] flex justify-between">
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
      <div className="mt-[24px]">
        <CurrencySelector />
      </div>
      {promo === 0 ? (
        <div>
          <span className="text-[14px]">Промокод</span>
          <Button
            id="closeBtn"
            type="primary"
            style={{ height: 14, marginLeft: 2 }}
            shape="circle"
            onClick={() => changePromo(1)}
            icon={<PlusOutlined style={{ width: 8 }} />}
          />
        </div>
      ) : (
        <div className="mt-[12px]">
          <Input
            id="promoIn"
            style={{
              height: 46,
              borderRadius: 18,
              paddingLeft: 14,
              fontSize: 18,
            }}
            addonAfter={
              <div onClick={() => changePromo(0)}>
                <CloseCircleOutlined />
              </div>
            }
            placeholder="Введите свой промокод"
          />
        </div>
      )}

      <div className="flex">
        <Checkbox onChange={changeAccept}></Checkbox>
        <p className="inline leading-[1.2] sm:text-[10px] xl:text-[12px] ml-[4px]">
          Я потверждаю, что я ознакомлен и полностью согласен <br />
          условиями Соглашения использовании сайта
        </p>
      </div>
      <div className="mt-[12px]">
        <Button
          style={{
            width: "100%",
            backgroundColor: accept ? "#33cc33" : "#A1Daba", // strong
            //backgroundColor: "#73E0A3", // strong
            height: 44,
            color: "white",
            fontSize: 24,
          }}
          disabled={!accept}
        >
          Зарегистрироваться
        </Button>
      </div>
      <div className="mt-[10px] text-[16px] text-center">
        <span style={{ color: "#8D8D8D" }}>Уже есть аккаунт?</span>
        <Link style={{ color: "#0474E4" }} to="/auth/signin">
          Войти
        </Link>
      </div>
    </div>
  );
}
