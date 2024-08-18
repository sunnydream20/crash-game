/** @format */

import { Select } from "antd";

import btcSvg from "../assets/btc.svg";
import ethSvg from "../assets/eth.svg";
import ltcSvg from "../assets/ltc.svg";
import tethSvg from "../assets/teth.svg";
import tronSvg from "../assets/tron.svg";
import rubSvg from "../assets/rub.svg";

const source = [
  {
    value: "btc",
    label: (
      <div className="flex">
        <img className="inline mr-[10px]" src={btcSvg} alt="...loading btc" />
        <span style={{ fontSize: 18 }}>Bitcoin (BTC)</span>
      </div>
    ),
  },
  {
    value: "eth",
    label: (
      <div className="flex">
        <img className="inline mr-[10px]" src={ethSvg} alt="...loading eth" />
        <span style={{ fontSize: 18 }}>Ethereum (ETH)</span>
      </div>
    ),
  },
  {
    value: "ltc",
    label: (
      <div className="flex">
        <img className="inline mr-[10px]" src={ltcSvg} alt="...loading ltc" />
        <span style={{ fontSize: 18 }}>LiteCoin (LTC)</span>
      </div>
    ),
  },
  {
    value: "teth",
    label: (
      <div className="flex">
        <img className="inline mr-[10px]" src={tethSvg} alt="...loading teth" />
        <span style={{ fontSize: 18 }}>Tether USD (USDT)</span>
      </div>
    ),
  },
  {
    value: "tron",
    label: (
      <div className="flex">
        <img className="inline mr-[10px]" src={tronSvg} alt="...loading tron" />
        <span style={{ fontSize: 18 }}>TRON (TRX)</span>
      </div>
    ),
  },
  {
    value: "aed",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          AED
        </p>
        <span style={{ fontSize: 18 }}>UAE Dirham (AED)</span>
      </div>
    ),
  },
  {
    value: "amd",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          AMD
        </p>
        <span style={{ fontSize: 18 }}>American dram (AMD)</span>
      </div>
    ),
  },
  {
    value: "ars",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          ARS
        </p>
        <span style={{ fontSize: 18 }}>Argentine peso (ARS)</span>
      </div>
    ),
  },
  {
    value: "as",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          A$
        </p>
        <span style={{ fontSize: 18 }}>Australian dollar (AUD)</span>
      </div>
    ),
  },
  {
    value: "azn",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          AZN
        </p>
        <span style={{ fontSize: 18 }}>Azerbaijani manat (AZN)</span>
      </div>
    ),
  },
  {
    value: "bdt",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          BDT
        </p>
        <span style={{ fontSize: 18 }}>Bangladeshi taka (BDT)</span>
      </div>
    ),
  },
  {
    value: "rs",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          R$
        </p>
        <span style={{ fontSize: 18 }}>Brazilian real (BRL)</span>
      </div>
    ),
  },
  {
    value: "byn",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          BYN
        </p>
        <span style={{ fontSize: 18 }}>Belarusian ruble (BYN)</span>
      </div>
    ),
  },
  {
    value: "cas",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          CA$
        </p>
        <span style={{ fontSize: 18 }}>Canadian dollar (CAD)</span>
      </div>
    ),
  },
  {
    value: "clp",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          CLP
        </p>
        <span style={{ fontSize: 18 }}>=Chilean Peso (CLP)</span>
      </div>
    ),
  },
  {
    value: "cop",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          COP
        </p>
        <span style={{ fontSize: 18 }}>Colombian peso (COP)</span>
      </div>
    ),
  },
  {
    value: "crc",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          CRC
        </p>
        <span style={{ fontSize: 18 }}>Costa Rican colon (CRC)</span>
      </div>
    ),
  },
  {
    value: "cup",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          CUP
        </p>
        <span style={{ fontSize: 18 }}>Cuban peso (CUP)</span>
      </div>
    ),
  },
  {
    value: "czk",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          CZK
        </p>
        <span style={{ fontSize: 18 }}>Czech crown (CZK)</span>
      </div>
    ),
  },
  {
    value: "dzd",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          DZD
        </p>
        <span style={{ fontSize: 18 }}>Algerian dinar (DZD)</span>
      </div>
    ),
  },
  {
    value: "egp",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          EGP
        </p>
        <span style={{ fontSize: 18 }}>Egyptian pound (EGP)</span>
      </div>
    ),
  },
  {
    value: "euro",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          €
        </p>
        <span style={{ fontSize: 18 }}>Euro (EUR)</span>
      </div>
    ),
  },
  {
    value: "gel",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          GEL
        </p>
        <span style={{ fontSize: 18 }}>Georgian lari (GEL)</span>
      </div>
    ),
  },
  {
    value: "ghs",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          GHS
        </p>
        <span style={{ fontSize: 18 }}>Ghanian Cedi (GHS)</span>
      </div>
    ),
  },
  {
    value: "hks",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          HK$
        </p>
        <span style={{ fontSize: 18 }}>Hong Kong dollar (HKD)</span>
      </div>
    ),
  },
  {
    value: "idr",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          IDR
        </p>
        <span style={{ fontSize: 18 }}>Indonesian rupiah (IDR)</span>
      </div>
    ),
  },
  {
    value: "inr",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          ₹
        </p>
        <span style={{ fontSize: 18 }}>Indian rupee (INR)</span>
      </div>
    ),
  },
  {
    value: "iqd",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          IQD
        </p>
        <span style={{ fontSize: 18 }}>Iraqi dinar (IQD)</span>
      </div>
    ),
  },
  {
    value: "irr",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          IRR
        </p>
        <span style={{ fontSize: 18 }}>Iranian rial (IRR)</span>
      </div>
    ),
  },
  {
    value: "jod",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          JOD
        </p>
        <span style={{ fontSize: 18 }}>Jordianian dinar (JOD)</span>
      </div>
    ),
  },
  {
    value: "yen",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          ¥
        </p>
        <span style={{ fontSize: 18 }}>Japanese Yen (JPY)</span>
      </div>
    ),
  },
  {
    value: "kes",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          KES
        </p>
        <span style={{ fontSize: 18 }}>kenyan shilling (KES)</span>
      </div>
    ),
  },
  {
    value: "kgs",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          KGS
        </p>
        <span style={{ fontSize: 18 }}>Kyrgyz som (KGS)</span>
      </div>
    ),
  },
  {
    value: "won",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          ₩
        </p>
        <span style={{ fontSize: 18 }}>South Korea (KRW)</span>
      </div>
    ),
  },
  {
    value: "kwd",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          KWD
        </p>
        <span style={{ fontSize: 18 }}>Kuwaiti dinar (KWD)</span>
      </div>
    ),
  },
  {
    value: "kzt",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          KZT
        </p>
        <span style={{ fontSize: 18 }}>Kazakhstani tenge (KZT)</span>
      </div>
    ),
  },
  {
    value: "lkr",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          LKR
        </p>
        <span style={{ fontSize: 18 }}>Sri Lankan rupee (LKR)</span>
      </div>
    ),
  },
  {
    value: "mdl",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          MDL
        </p>
        <span style={{ fontSize: 18 }}>Moldovan leu (MDL)</span>
      </div>
    ),
  },
  {
    value: "mmk",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          MMK
        </p>
        <span style={{ fontSize: 18 }}>Myanmar Kyat (MMK)</span>
      </div>
    ),
  },
  {
    value: "mxs",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          MX$
        </p>
        <span style={{ fontSize: 18 }}>Mexian peso (MXN)</span>
      </div>
    ),
  },
  {
    value: "myr",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          MYR
        </p>
        <span style={{ fontSize: 18 }}>Malaysian ringgit (MYR)</span>
      </div>
    ),
  },
  {
    value: "ngn",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          NGN
        </p>
        <span style={{ fontSize: 18 }}>Nigerian naira (NGN)</span>
      </div>
    ),
  },
  {
    value: "npr",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          NPR
        </p>
        <span style={{ fontSize: 18 }}>Nepalese rupee (NPR)</span>
      </div>
    ),
  },
  {
    value: "omr",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          OMR
        </p>
        <span style={{ fontSize: 18 }}>Omani rial (OMR)</span>
      </div>
    ),
  },
  {
    value: "pab",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          PAB
        </p>
        <span style={{ fontSize: 18 }}>Panamanian balboa (PAB)</span>
      </div>
    ),
  },
  {
    value: "pen",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          PEN
        </p>
        <span style={{ fontSize: 18 }}>Peruvian nuevo sol (PEN)</span>
      </div>
    ),
  },
  {
    value: "php",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          ₱
        </p>
        <span style={{ fontSize: 18 }}>Philippine peso (PHP)</span>
      </div>
    ),
  },
  {
    value: "pkr",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          PKR
        </p>
        <span style={{ fontSize: 18 }}>Pakistani rupee (PKR)</span>
      </div>
    ),
  },
  {
    value: "pln",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          PLN
        </p>
        <span style={{ fontSize: 18 }}>Polish zloty (PLN)</span>
      </div>
    ),
  },
  {
    value: "qar",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          QAR
        </p>
        <span style={{ fontSize: 18 }}>Qatari rial (QAR)</span>
      </div>
    ),
  },
  {
    value: "rub",
    label: (
      <div className="flex">
        <img className="inline mr-[10px]" src={rubSvg} alt="... loading rub" />
        <span style={{ fontSize: 18 }}>российский рубль (RUB)</span>
      </div>
    ),
  },
  {
    value: "rwf",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          RWF
        </p>
        <span style={{ fontSize: 18 }}>Rwandan franc (RWF)</span>
      </div>
    ),
  },
  {
    value: "sek",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          SEK
        </p>
        <span style={{ fontSize: 18 }}>Swedish krona (SEK)</span>
      </div>
    ),
  },
  {
    value: "sgd",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          SGD
        </p>
        <span style={{ fontSize: 18 }}>Singapore dollar (SGD)</span>
      </div>
    ),
  },
  {
    value: "sos",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          SOS
        </p>
        <span style={{ fontSize: 18 }}>Somali shilling (SOS)</span>
      </div>
    ),
  },
  {
    value: "thb",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          THB
        </p>
        <span style={{ fontSize: 18 }}>Thai baht (THB)</span>
      </div>
    ),
  },
  {
    value: "tjs",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          TJS
        </p>
        <span style={{ fontSize: 18 }}>Tajik somoni (TJS)</span>
      </div>
    ),
  },
  {
    value: "try",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          TRY
        </p>
        <span style={{ fontSize: 18 }}>Turkish Lira (TRY)</span>
      </div>
    ),
  },
  {
    value: "tzs",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          TZS
        </p>
        <span style={{ fontSize: 18 }}>Tanzanian shilling (TZS)</span>
      </div>
    ),
  },
  {
    value: "uah",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          UAH
        </p>
        <span style={{ fontSize: 18 }}>Ukrainian hryvnia (UAH)</span>
      </div>
    ),
  },
  {
    value: "ugx",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          UGX
        </p>
        <span style={{ fontSize: 18 }}>Ugandan shilling (UGX)</span>
      </div>
    ),
  },
  {
    value: "usd",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          $
        </p>
        <span style={{ fontSize: 18 }}>US dollar (UGX)</span>
      </div>
    ),
  },
  {
    value: "uzs",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          UZS
        </p>
        <span style={{ fontSize: 18 }}>Uzbek sum (UZS)</span>
      </div>
    ),
  },
  {
    value: "vnd",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          ₫
        </p>
        <span style={{ fontSize: 18 }}>Vietnamese dong (VND)</span>
      </div>
    ),
  },
  {
    value: "fcfa",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          FCFA
        </p>
        <span style={{ fontSize: 18 }}>Central African Franc (CFA XAF)</span>
      </div>
    ),
  },
  {
    value: "fcfa_w",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          F CFA
        </p>
        <span style={{ fontSize: 18 }}>West African franc (XOF)</span>
      </div>
    ),
  },
  {
    value: "zar",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          ZAR
        </p>
        <span style={{ fontSize: 18 }}>South African rand (ZAR)</span>
      </div>
    ),
  },
  {
    value: "zmw",
    label: (
      <div className="flex">
        <p
          className="inline mr-[10px]"
          style={{ fontSize: 18, fontWeight: "bold", color: "#aaa" }}
        >
          ZMW
        </p>
        <span style={{ fontSize: 18 }}>Zambian kwacha (ZMW)</span>
      </div>
    ),
  },
];

export const CurrencySelector = ({ sendValue }) => {
  return (
    <Select
      defaultValue="rub"
      className="sm:h-[37px] sm:rounded-[10px] xl:h-[52px] xl:rounded-[20px]"
      style={{ width: "100%" }}
      options={source}
      listHeight={200}
    />
  );
};
