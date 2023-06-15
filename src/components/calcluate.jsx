import React, { useState, useEffect } from "react";
import { Button } from "./button";
import Whatsapp from "./whatsapp";

export function Calculate() {
  const [priceList, setPriceList] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/price")
      .then((response) => response.json())
      .then((data) => {
        setPriceList(data);
      });
  }, []);

  const calculateTotalPrice = () => {
    let sum = selectedOptions.reduce((acc, optionId) => {
      const option = priceList.find((item) => item.id === optionId);
      if (option) {
        return acc + parseInt(option.price);
      } else {
        return acc;
      }
    }, 0);
    if (sum !== 0) {
      setTotalPrice(sum);
    } else {
      setTotalPrice(0);
    }
  };

  const handleOptionClick = (option) => {
    const optionId = parseInt(option);
    if (selectedOptions.includes(optionId)) {
      return;
    }
    setSelectedOptions((prev) => [...prev, optionId]);
  };

  return (
    <div className="bg-backgroundAus bg-no-repeat bg-cover bg-opacity-20 bg-[#36363604] pb-[70px]">
      <div className="flex flex-col items-center gap-[30px]">
        <h5 className="mt-[10px] mb-[100px] text-[#fff] text-[30px] font-html font-bold sm:text-center sm:w-[280px]">
          Калькулятор зоотакси по Ростову
        </h5>
        <div className="flex justify-between w-full flex-col lg:items-center lg:gap-[100px]">
          <div>
            <div className="flex justify-around sm:w-[280px] gap-y-[30px]">
              <Button name="По городу" size="small" onClick={() => handleOptionClick(1)} />
              <Button name="В аэропорт" size="small" onClick={() => handleOptionClick(2)} />
            </div>
            <div>
              <h6 className="mt-[100px] mb-[20px] text-[30px] text-[#fff] lg:my-[20px] sm:text-center sm:w-[280px] text-center">
                Дополнительные опции
              </h6>
              <span className="flex justify-around">
              <ul className="flex flex-col gap-[30px]">
                <li className="w-[410px] sm:w-[280px]">
                  <Button name="День" onClick={() => handleOptionClick(3)} />
                </li>
                <li className="w-[410px] sm:w-[280px]">
                  <Button
                    name="С владельцем"
                    onClick={() => handleOptionClick(4)}
                  />
                </li>
                <li className="w-[410px] sm:w-[280px]">
                  <Button
                    name="В одну сторону"
                    onClick={() => handleOptionClick(5)}
                  />
                </li>
                <li className="w-[410px] sm:w-[280px]">
                  <Button
                    name="Пред-заказ"
                    onClick={() => handleOptionClick(6)}
                  />
                </li>
              </ul>
              <ul className="flex flex-col gap-[30px]">
              <li className="w-[410px] sm:w-[280px]">
                  <Button name="Ночь" onClick={() => handleOptionClick(7)} />
                </li>
                <li className="w-[410px] sm:w-[280px]">
                  <Button
                    name="Без владельца"
                    onClick={() => handleOptionClick(8)}
                  />
                </li>
                <li className="w-[410px] sm:w-[280px]">
                  <Button
                    name="Туда и обратно"
                    onClick={() => handleOptionClick(9)}
                  />
                </li>
                <li className="w-[410px] sm:w-[280px]">
                  <Button
                    name="Срочный заказ"
                    onClick={() => handleOptionClick(10)}
                  />
                </li>
              </ul>
              </span>

            </div>
          </div>
          <div className="flex lg:gap-[30px] flex-row-reverse justify-around gap-[105px] mt-[50px]">
            <div className="inline-grid w-[410px] sm:w-[280px] gap-y-[30px]">
              <Button name="Забронировать" onClick={calculateTotalPrice} />
            </div>
            <h5 className="pb-[30px] text-[#fff] text-[23px] sm:text-center sm:w-[280px]">
              Расчёт стоимости поездки: <span>{totalPrice}</span>
            </h5>
          </div>
        </div>
        <p className="max-w-[500px] text-[#E6B818] text-[19px] font-html sm:text-center sm:w-[280px]">
          * Указанная цена является приблизительной. Точную стоимость в сможете
          узнать по телефону или WhatsApp:  <Whatsapp name='+7 (918) 999-74-84' />
        </p>
      </div>
    </div>
  );
}
