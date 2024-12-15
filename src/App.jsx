import Faq from "./Sections/Faq";
import Features from "./Sections/Features";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Pricing from "./Sections/Pricing";

const App = () => {
  return (
  
  <main className=" overflow-hidden">
    <Header/>
    <Hero/>
    <Features/>
    <Pricing/>
    <Faq/>
    <Footer/>
  </main>
  );
};

export default App;
