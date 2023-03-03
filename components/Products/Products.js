import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import Card from "../Card/Card";
import { setCategoryId } from "../../redux/siteDataReducer";
import { useEffect } from "react";
import axios from "axios";
import { Spinner } from "../Spinner/Spinner";

const env = process.env.NEXT_PUBLIC_TOKEN;

export default function Products({ data }) {
  const [loader, setLoader] = useState(false);
  const search = useSelector((state) => state.data.search);
  const lang = useSelector((state) => state.data.lang);
  const languages = useSelector((state) => state.data.localization);
  const categoryId = useSelector((state) => state.data.categoryId);
  const dispatch = useDispatch();
  const [heading, setHeading] = useState({});
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const [rotateEl, setRotateEl] = useState(false);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  // --- Get Products
  useEffect(() => {
    setLoader(true);
    axios
      .get(`${env}categories`)
      .then((res) => setHeading(res?.data.find((el) => el.id == categoryId)))
      .catch((err) => console.error(err))
      .finally(() => setLoader(false));
  }, [categoryId]);

  // --- Search
  function searchProduct(inputValue, data) {
    let regex = new RegExp(inputValue, "gi");
    const filterInput = data.filter((product) =>
      product[`name_${lang}`].match(regex)
    );

    return filterInput;
  }
  console.log(heading);
  const handleClick = () => {
    setRotateEl(!rotateEl);
  };
  return (
    <section className="mt-7 md:mt-32">
      <div className="max-w-container mx-auto w-full px-5">
        <div className="">
          <p className="flex items-center text-base text-black-black_thin">
            <Link
              href={`/`}
              className="text-blue-accent"
              onClick={() => dispatch(setCategoryId(0))}
            >
              {languages[lang].naduvniy.route}
            </Link>
            <Image
              className="mx-1"
              src={"/Assets/Images/NaduvniyImg/down.svg"}
              width={24}
              height={24}
              alt="Arrow_down"
            />
            {lang === "ru"
              ? heading.category_ru
              : lang === "uz"
              ? heading.category_uz
              : heading.category_en}
          </p>
          <h2 className="font-bold text-xl md:text-3xl text-black-black_dark mt-5 md:mt-6 mb-5">
            {lang === "ru"
              ? heading.category_ru
              : lang === "uz"
              ? heading.category_uz
              : heading.category_en}
          </h2>
          <div className="">
            {loader ? (
              <div className="w-16 h-20 md:w-[1185px] md:h-[200px] flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 text-[#464A4D]">
                <div className=" col-span-1 border">
                  <div className="flex justify-between border-b-1 m-4 pb-4 ">
                    <h1 className=" font-bold text-lg">Фильтр</h1>
                    <p className="text-[#109EF4] font-bold text-sm">
                      Сбросить(11)
                    </p>
                  </div>
                  <div className="mx-4 text-[#464A4D] border-b-1 pb-4">
                    <h2 className="font-bold text-lg">Категории</h2>
                    <label className="flex gap-2 mt-4">
                      <input className="w-4 h-4 mt-1" type="checkbox" />
                      <p className=" font-500">Надувные бассейны</p>
                    </label>
                    <label className="flex gap-2 mt-4">
                      <input className="w-4 h-4 mt-1" type="checkbox" />
                      <p className=" font-500">Каркасные бассейны</p>
                    </label>
                    <label className="flex gap-2 mt-4">
                      <input className="w-4 h-4 mt-1" type="checkbox" />
                      <p className=" font-500">Все чистки бассейна</p>
                    </label>
                    <label className="flex gap-2 mt-4">
                      <input className="w-4 h-4 mt-1" type="checkbox" />
                      <p className=" font-500">Аксессуары для бассейна</p>
                    </label>
                  </div>
                  <div className="mx-4 mt-4 border-b-1 pb-4 ">
                    <h2 className=" font-bold text-lg">Цена</h2>
                    <label className="flex justify-between mt-3">
                      <p className="text-sm text-[#828282] mt-1">
                        Выберите валюту
                      </p>
                      <select className=" text-sm py-2 bg-[#F2F2F2] rounded-md">
                        <option>СУМ</option>
                        <option>ДОЛЛ</option>
                        <option>РУБ</option>
                      </select>
                    </label>
                    <label className="flex mt-5">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        step="50"
                        value={minValue}
                        onChange={(e) => set_minValue(e.target.value)}
                        className=" z-30"
                      />
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        step="50"
                        value={maxValue}
                        onChange={(e) => set_maxValue(e.target.value)}
                        className="-ml-10 z-20"
                      />
                    </label>
                    <label className="flex gap-2.5 mt-6">
                      <input
                        type="number"
                        value={100}
                        className="p-2.5 w-full rounded-md bg-[#F2F2F2]"
                      />
                      <input
                        type="number"
                        value={500}
                        className="p-2.5 w-full rounded-md bg-[#F2F2F2]"
                      />
                    </label>
                  </div>
                  <div className="mx-4 mt-4">
                    <h2 className="font-bold text-lg">По типам</h2>

                    <div className=" max-w-738 mx-auto py-7 cursor-pointer border-b-2">
                      <div
                        onClick={handleClick}
                        className={`flex mb-4 sm:mb-0`}
                      >
                        <input type="checkbox" className="w-4 h-4 mt-1" />
                        <span className="ml-2">Все типы</span>
                        <div className={`relative hidden sm:flex`}>
                          <span
                            className={`inline-block absolute w-5 h-0.5 `}
                          ></span>
                          <span
                            className={`inline-block absolute  ${
                              rotateEl ? "" : "rotate-90"
                            }  w-5 h-0.5 duration-300 `}
                          ></span>
                        </div>
                      </div>
                      <div
                        className={`duration-300 ${
                          rotateEl
                            ? "  pt-4 sm:overflow-auto "
                            : " sm:h-0 sm:overflow-hidden"
                        }`}
                      >
                        <ul className="px-5">
                          <li>
                            <input type="checkbox" className="w-4 h-4 mt-1" />
                            <span className="ml-2">Хит продаж</span>
                          </li>
                          <li className="mt-4">
                            <input type="checkbox" className="w-4 h-4 mt-1" />
                            <span className="ml-2">Новинки</span>
                          </li>
                          <li className="mt-4">
                            <input type="checkbox" className="w-4 h-4 mt-1" />
                            <span className="ml-2">Скидка</span>
                          </li>
                          <li className="mt-4">
                            <input type="checkbox" className="w-4 h-4 mt-1" />
                            <span className="ml-2">Pекомендуем</span>
                          </li>
                          <li className="mt-4">
                            <input type="checkbox" className="w-4 h-4 mt-1" />
                            <span className="ml-2">Обичные</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 w-full grid grid-cols-3 gap-5">
                  {search.length > 0
                    ? searchProduct(search, data).map((el) => {
                        return (
                          <Card
                            key={el?.id}
                            id={el?.id}
                            data={data}
                            image={el?.image}
                            attributes={el?.attributes}
                            sub_attributes={el?.sub_attributes}
                            status_ru={el?.status_ru}
                            status_en={el?.status_en}
                            status_uz={el?.status_uz}
                            name_ru={el?.name_ru}
                            name_en={el?.name_en}
                            name_uz={el?.name_uz}
                            price={el?.price}
                            sale={el?.discount_price}
                          />
                        );
                      })
                    : data.map((el) => {
                        return (
                          <Card
                            key={el?.id}
                            id={el?.id}
                            data={data}
                            image={el?.image}
                            attributes={el?.attributes}
                            sub_attributes={el?.sub_attributes}
                            status_ru={el?.status_ru}
                            status_en={el?.status_en}
                            status_uz={el?.status_uz}
                            name_ru={el?.name_ru}
                            name_en={el?.name_en}
                            name_uz={el?.name_uz}
                            price={el?.price}
                            sale={el?.discount_price}
                          />
                        );
                      })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
