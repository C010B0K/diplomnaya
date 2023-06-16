import Photo1 from "../img/photo1.png"
import Photo2 from "../img/photo2.png"
import Photo3 from "../img/photo3.png"


export function Reviews() {
  return (
    <div className="flex flex-wrap gap-5 justify-center my-14">
      <div className="flex flex-col items-center w-80 text-center">
        <div className="">
          <img src={Photo3} alt="image" className="rounded-full whitespace-break-spaces" />
        </div>
        <h1 className="text-[20px] font-bold my-4">Заголовок</h1>
        <p className="text-[18px] font-light">Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectetur </p>
      </div>
      <div className="flex flex-col items-center w-80 text-center">
        <div className="">
          <img src={Photo3} alt="image" className="rounded-full whitespace-break-spaces" />
        </div>
        <h1 className="text-[20px] font-bold my-4">Заголовок</h1>
        <p className="text-[18px] font-light">Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectetur </p>
      </div>
      <div className="flex flex-col items-center w-80 text-center">
        <div className="">
          <img src={Photo3} alt="image" className="rounded-full whitespace-break-spaces" />
        </div>
        <h1 className="text-[20px] font-bold my-4">Заголовок</h1>
        <p className="text-[18px] font-light">Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectetur </p>
      </div>
      <div className="flex flex-col items-center w-80 text-center">
        <div className="">
          <img src={Photo3} alt="image" className="rounded-full whitespace-break-spaces" />
        </div>
        <h1 className="text-[20px] font-bold my-4">Заголовок</h1>
        <p className="text-[18px] font-light">Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur dolor sit amet, consectetur </p>
      </div>
    </div>
  )
}