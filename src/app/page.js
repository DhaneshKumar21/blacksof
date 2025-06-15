import ProductView from "./components/productView";
import Footer from "./components/Footer";
import GetInTouch from "./components/getInTouch";
import Header from "./components/header/Header";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <MainSection />
      <ProductView/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}
