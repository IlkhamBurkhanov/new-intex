import React from "react";

import Image from "next/image";
import Money from "../../public/Assets/Images/HeaderAndHeroImg/Money.svg";
import UzCard from "../../public/Assets/Images/HeaderAndHeroImg/UZcard.svg";

function Order() {
  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-2xl">Oформлению заказа</h2>
        <div className="grid grid-cols-3 mx-20 pr-20">
          <div className="col-span-2">
            <h1 className=" text-lg font-500">1. Личные данные</h1>
            <div className="flex justify-between">
              <label>
                <h2 className="mt-5 text-[#24283A] font-[550]">Имя</h2>
                <input
                  className="w-[408px] h-12 border px-3 rounded-lg mt-3"
                  placeholder="Введите ваше имя"
                />
              </label>
              <label>
                <h2 className="mt-5 text-[#24283A] font-[550]">
                  Номер телефона
                </h2>
                <div className=" flex items-center pl-4  mt-3 w-[408px] h-48 text-base rounded-lg p-1 outline-none border  border-gray-input_radius mb-4 sm:mb-6">
                  <Image
                    src={"/Assets/Images/BuyAll/Flag.svg"}
                    className="w-auto h-auto"
                    width={22}
                    height={15}
                    alt="site_logo"
                  />
                  <span className="text-base text-black ml-1">+998</span>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="(90) 123 45 67"
                    className=" outline-none w-full sm:ml-4 h-full  "
                  />
                </div>
                {/* <input
                  className="w-[408px] h-12 border px-3 rounded-lg mt-3"
                  placeholder="Введите ваше имя"
                /> */}
              </label>
            </div>
            <h2 className="font-500 text-lg mt-1">2. Выберите способ оплаты</h2>
            <div className="flex justify-between mt-5">
              <button className="flex justify-center items-center w-[260px] border rounded-md h-14 gap-2 hover:bg-[#605dec14]">
                <Image src={Money} /> Наличными
              </button>
              <button className="flex justify-center items-center w-[260px] border rounded-md h-14 gap-2 hover:bg-[#605dec14]">
                <Image src={UzCard} /> Uzcard/Humo
              </button>
              <button className=" flex justify-center items-center w-[260px] border rounded-md h-14 gap-2 hover:bg-[#605dec14]">
                <Image src={UzCard} /> Payme/Click
              </button>
            </div>
            <h3 className="font-500 text-lg mt-7">3. Ваши детали доставки</h3>
            <div className="flex justify-between mt-5">
              <label className="">
                <h2>Регион</h2>
                <select className="w-[408px] border h-12 mt-3 rounded-lg px-4">
                  <option>Uzbekistan</option>
                </select>
              </label>
              <label>
                <h2>Город</h2>
                <select className="w-[408px] border h-12 mt-3 rounded-lg px-4">
                  <option>Qoqon</option>
                </select>
              </label>
            </div>
          </div>
          <div>Summa</div>
        </div>
      </div>
    </div>
  );
}

export default Order;
