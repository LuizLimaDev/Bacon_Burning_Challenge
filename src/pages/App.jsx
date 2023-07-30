import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Showcase from "components/Showcase/Showcase";
import TheProgram from "components/TheProgram/TheProgram";
import Plan from "components/Plan/Plan";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "components/Footer/Footer";

export default function App() {
  return (
    <main className='w-screen h-screen'>
      <Header />
      <Hero />
      <Showcase />
      <TheProgram />
      <Plan />
      <Newsletter />
      <Footer />
    </main>
  );
}
