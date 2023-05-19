import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import Service from "../components/Service";
import WhyUs from "../components/WhyUs";
import Testi from "../components/Testi";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="home-page">
      <Navigation />
      <Heading />
      <Service />
      <WhyUs />
      <Testi />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
