import React from "react";
import Image from "next/image";
import fakeData from "../../public/Assets/Images/HeaderAndHeroImg/Fakedata.png";
import Trash from "../../public/Assets/Images/HeaderAndHeroImg/trash.svg";
import { useState } from "react";
import Link from "next/link";

const Basket = () => {
  const [numberProduct, setNumberProduct] = useState(8);
  const data = false;
  const fakeDatas = [
    {
      img: fakeData,
      name: "Каркасный прямоугольный бассейн ",
      size: "260х160х65см, 2282л",
      summa: "1290000 sum",
      count: 1,
    },
    {
      img: fakeData,
      name: "Каркасный прямоугольный бассейн ",
      size: "260х160х65см, 2282л",
      summa: "1290000 sum",
      count: 1,
    },
  ];

  return (
    <>
      {data ? (
        <div className=" text-center mx-auto w-[628px]">
          <div className="flex flex-col">
            <Image
              className="mx-auto"
              src={"/Assets/Images/HeaderAndHeroImg/Design.png"}
              width={194}
              height={192}
              alt="About Basket Img"
            />
            <h1 className=" text-2xl font-bold mt-8 text-[#000000de]">
              В корзине пока ничего нет
            </h1>
            <p className=" font-normal mt-6 text-lg text-[#00000061]">
              Вы можете начать свой выбор с нашего каталога продукции или
              воспользоваться поиском, если вы ищете что-то конкретное
            </p>
          </div>
        </div>
      ) : (
        <div className="mx-20">
          <h2 className=" font-bold text-2xl text-center mb-14">Корзина</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              {fakeDatas?.map((item, intex) => {
                return (
                  <div className=" flex border-b-1 mt-8">
                    <Image className="w-[100px] h-[94px]" src={item.img} />
                    <div className="flex flex-col ml-6">
                      <h2 className=" font-[550] text-lg">{item.name}</h2>
                      <p className="mt-2 text-sm">{item.size}</p>
                      <p className="mt-2 text-sm">{item.summa}</p>
                    </div>
                    <div className="flex flex-row w-[32px] mt-6 h-[32px] ml-24">
                      <button
                        onClick={() =>
                          numberProduct == 1
                            ? setNumberProduct(numberProduct)
                            : setNumberProduct(numberProduct - 1)
                        }
                        className="px-2 ml-1.5 py-px border rounded-l-[5px]"
                      >
                        -
                      </button>
                      <h3 className="px-2 border text-center text-xl  text-black">
                        {numberProduct}
                      </h3>
                      <button
                        onClick={() => setNumberProduct(numberProduct + 1)}
                        className="px-2  border rounded-r-[5px]"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex justify-end text-right  ml-[260px]">
                      <Image
                        className="w-6 h-[26px] mt-6 "
                        src={Trash}
                        alt="del"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="px-8 border rounded-lg text-[#000000de]">
              <div className="pt-32 flex justify-between px-7">
                <h2 className=" text-lg">В корзине 2</h2>
                <p className="text-lg"> 1 290 000 сум</p>
              </div>
              <div className="flex justify-between px-7">
                <h2 className="text-lg">Скидка:</h2>
                <p className="text-lg"> 1 290 000 cyм</p>
              </div>
              <p className="text-center mt-7 text-lg text-[#000000de]  font-semibold">
                Есть промо код ?
              </p>
              <div className="flex justify-between border p-[14px] mx-5 mt-3">
                <p className=" text-lg text-[#000000de]">45544WSDS54</p>
                <Link href="#">
                  <p className="text-blue-600">Применять</p>
                </Link>
              </div>
              <h1 className=" border-y-1 py-7 px-1.5 mt-7 mx-5 text-[22px]">
                Всего к оплате : <span className="pl-6"> 1 290 000 sum</span>
              </h1>
              <button className="px-[42px] py-3 mb-8 mt-5 mx-[30px] bg-[#2B3D90] rounded-xl text-white text-lg">
                Перейти к оформлению заказа
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Basket;
