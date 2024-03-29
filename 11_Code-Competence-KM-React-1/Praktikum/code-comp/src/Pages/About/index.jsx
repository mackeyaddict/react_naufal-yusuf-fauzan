import AboutUsImg from  "../../assets/Img/about-us-img.jpg"

export default function About() {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center h-[calc(100vh-72px)] gap-8 md:gap-40 px-4 md:px-0">
        <div className="w-full md:w-1/2 shadow-2xl">
          <img src={AboutUsImg} alt="about us image" className="w-full h-auto" />
        </div>
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="font-bold text-4xl md:text-6xl text-center md:text-left">About Us</h1>
          <h3 className="text-xl md:text-2xl text-center md:text-left">Crafting Coffee Stories with Passion</h3>
          <p className="text-sm md:text-base text-center md:text-left">At <b>Homie Coffee House</b>, coffee isn&rsquo;t just a beverage; it&rsquo;s a journey of discovery and passion. With roots deeply embedded in the artistry of coffee culture, we are dedicated to sourcing the finest beans, roasting them to perfection, and brewing unforgettable experiences, one cup at a time. Our commitment to quality and craftsmanship extends beyond the coffee itself; it&rsquo;s about the people, the stories, and the communities we serve. Join us as we embark on this flavorful adventure, fueled by a love for coffee and a desire to share its magic with the world.</p>
        </div>
      </div>
    </section>
  )
}