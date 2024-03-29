import CardProduct from "../../Components/Cards/card-product";
import Vietnamese from "../../assets/Img/vietnamese.jpg"
import Latte from "../../assets/Img/latte.jpg"
import Tubruk from "../../assets/Img/tubruk.jpg"
import Tropical from "../../assets/Img/tropical.jpg"
import Americano from "../../assets/Img/americano.jpg"
import Japanese from "../../assets/Img/japanese.jpg"


export default function HomeProducts() {
  const products = [
    {
      id: 1,
      name: 'Vietnamese Coffee',
      img: Vietnamese,
      desc: 'Vietnamese coffee is often made using a special drip filter called a "phin." Coarsely ground coffee beans are placed in the phin, which sits atop a cup or glass. Hot water is poured over the grounds, allowing the coffee to slowly drip through.',
      price: 10000
    },
    {
      id: 2,
      name: 'Tubruk Coffee',
      img: Tubruk,
      desc: 'Tubruk coffee originates from Indonesia and is made by boiling finely ground coffee beans with water and sugar in a pot or saucepan. The mixture is simmered until it reaches a thick and concentrated consistency.',
      price: 6000
    },
    {
      id: 3,
      name: 'Latte Coffee',
      img: Latte,
      desc: 'A Latte is made by combining a shot of espresso with steamed milk and a thin layer of milk foam. The process begins with brewing a shot of espresso using an espresso machine. Meanwhile, milk is steamed to create a creamy texture and microfoam.',
      price: 15000
    },
    {
      id: 4,
      name: 'Americano',
      img: Americano,
      desc: 'An Americano is made by diluting a shot of espresso with hot water. The process involves pulling a shot of espresso using an espresso machine and then adding hot water to the espresso in a ratio of 1:1 to 1:3, depending on the desired strength.',
      price: 15000
    },
    {
      id: 5,
      name: 'Tropical',
      img: Tropical,
      desc: 'The Tropical Blend coffee is made using a blend of coffee beans sourced from tropical regions around the world. These beans are typically medium to dark roasted to enhance their natural flavors.',
      price: 15000
    },
    {
      id: 5,
      name: 'Japanese',
      img: Japanese,
      desc: 'Japanese coffee culture is known for its meticulous attention to detail and precision in brewing techniques. One popular method is the pour-over method, often using devices like the Hario V60 or Kalita Wave.',
      price: 15000
    },
  ]
  return (
    <section className="bg-black">
      <div className="bg-white md:rounded-tl-[300px]">
        <div className="container mx-auto flex flex-col gap-9 py-14">
          <h1 className="text-6xl font-bold text-center pb-14">Our Top Products</h1>
          <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-x-4 gap-y-4">
            {products.map((product, i) => (
              <CardProduct key={i} image={product.img} name={product.name} desc={product.desc} price={product.price}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}