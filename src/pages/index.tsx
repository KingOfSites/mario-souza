import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Depoiments from "../components/Depoimentos";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Numbers from "../components/Numbers";
import Services from "../components/Services";
import Sobre from "../components/Sobre";

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
