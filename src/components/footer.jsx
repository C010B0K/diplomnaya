import Inst from "../img/inst.svg";
import Wc from "../img/WC.svg";
import Tg from "../img/tg.svg"

export function Footer(){
  return(
    <footer className="bg-[#1E1E1E]  py-[50px] px-[100px] lp:pl-[50px] lp:pr-0 ">
      <span className="flex justify-between md:flex-col">

      <div>
        <h5 className="text-[#FFD600] text-[25px] font-html">Ссылки</h5>
        <div>
        <ul className="text-[#fff] text-[18px] font-html">
          <li><a href="">О нас</a></li>
          <li><a href="">Наши отзывы</a></li>
          <li></li>
        </ul>
      </div>
      </div>


      <div>
        <h5 className="text-[#FFD600] text-[25px] font-html">Контакты</h5>
        <div>
        <ul className="text-[#fff] text-[18px] font-html">
          <li><a target="_blank" href="https://yandex.ru/maps/39/rostov-na-donu/house/budyonnovskiy_prospekt_12_56/Z0AYcQdpTkAPQFptfX5wd3RgbQ==/?ll=39.709385%2C47.216775&z=21">Будённовский проспект, 12/56</a></li>
          <li><a href="mailto:okylovskaaanna87@gmail.com" target="_blank">okylovskaaanna87@gmail.com</a></li>
          <li><a target="_blank" href="tel:+79189997484">Телефон: +7 (918) 999-74-84</a></li>
        </ul>
      </div>
      </div>
      
      <div>
        <h5 className="text-[#FFD600] text-[25px] font-html">Мы в сети</h5>
        <div>
        <ul className="text-[#fff] text-[18px] font-html flex gap-[8px] flex-row">
          <li><a target="_blank" href="https://www.instagram.com/zootaxi_rostov/?igshid=NTc4MTIwNjQ2YQ%3D%3D"><img src={Inst} alt="" /></a></li>
          <li><a target="_blank" href="https://t.me/zootaxi_otlov_rostov"><img src={Wc} alt="" /></a></li>
          <li><a target="_blank" href="https://t.me/zootaxi_otlov_rostov"><img src={Wc} alt="" /></a></li>
        </ul>
      </div>
      </div>
      </span>

    </footer>
  )
}