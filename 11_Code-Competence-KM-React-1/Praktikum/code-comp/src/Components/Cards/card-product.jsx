import Button from "../Button";
import { formatPrice } from "../../Utils/Helper/formatNumber";

export default function CardProduct({ image, name, desc, price }) {
  return (
    <div className="flex flex-col items-center gap-2 w-[300px] h-[525px] bg-transparent">
      <div className="w-full h-40">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-t-md" />
      </div>
      <div className="flex flex-col justify-between items-center px-6 py-6 flex-grow">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold pb-6">{name}</h3>
          <p className="text-center">{desc}</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p>{formatPrice(price)}</p>
          <Button>Order</Button>
        </div>
      </div>
    </div>
  );
}
