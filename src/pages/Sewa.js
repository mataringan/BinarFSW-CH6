import "../styles/App.css";
import Navigation from "../components/Navigation";
import Heading from "../components/Heading";
import FormFilter from "../components/FormFilter";
import ResultFilter from "../components/ResultFilter";
import Footer from "../components/Footer";

function Sewa() {
  return (
    <div className="sewa-page">
      <Navigation />
      <Heading />
      <FormFilter />
      <ResultFilter />
      <Footer />
    </div>
  );
}

export default Sewa;
