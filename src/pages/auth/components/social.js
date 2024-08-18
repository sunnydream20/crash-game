/** @format */

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Checkbox } from "antd";
import { PlusOutlined, CloseCircleOutlined } from "@ant-design/icons";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { CurrencySelector } from "../../../components/currencyselecte";
import "./custom.css";

export const Social = () => {
  const [phone, setPhone] = useState("");
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
      <div className="mt-[17px]">
        <CurrencySelector />
      </div>
      <div className="mt-[8px]">
        <PhoneInput
          defaultCountry="ru"
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
      </div>
      <div className="mt-[12px]">
        <Input
          className="xl:rounded-[18px] sm:rounded-[10px 10px] xl:text-[18px] sm:text-[12px] xl:h-[46px] sm:h-[37px]"
          style={{
            paddingLeft: 14,
          }}
          placeholder="Почта"
        />
      </div>
      <div className="mt-[12px]">
        <Input
          className="xl:rounded-[18px] sm:rounded-[10px] xl:text-[18px] sm:text-[12px] xl:h-[46px] sm:h-[37px]"
          style={{
            paddingLeft: 14,
          }}
          placeholder="Пароль"
        />
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
            backgroundColor: "#A1DABA",
            //backgroundColor: "#73E0A3", // strong
            height: 44,
            color: "white",
            fontSize: 24,
          }}
        >
          Зарегистрироваться
        </Button>
      </div>
      <div className="mt-[10px] text-[16px] text-center">
        <span style={{ color: "#8D8D8D" }}>Уже есть аккаунт?</span>
        <Link style={{ color: "#0474E4" }} to="/">
          Войти
        </Link>
      </div>
    </div>
  );
};
