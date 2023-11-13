import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Depoiments from "../Components/Depoimentos";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import Header from "../Components/Header";
import Numbers from "../Components/Numbers";
import Services from "../Components/Services";
import Sobre from "../Components/Sobre";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <Numbers />
      <Services />
      <Depoiments />
      <Form />
      <Blog />
      <Footer />
    </>
  );
}
