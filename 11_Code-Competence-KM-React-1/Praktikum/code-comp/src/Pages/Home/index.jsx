import HomeBanner from "./home-banner";
import HomeComment from "./home-comment";
import HomeConnect from "./home-connect";
import HomeProducts from "./home-products";

export default function Home() {
  return(
    <section>
      <HomeBanner/>
      <HomeProducts/>
      <HomeComment/>
      <HomeConnect/>
    </section>
  )
}