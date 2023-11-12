import Banner from "@/components/Banner";
import Depoiments from "@/components/Depoimentos";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Numbers from "@/components/Numbers";
import Services from "@/components/Services";
import Sobre from "@/components/Sobre";

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
    </>
  );
}
