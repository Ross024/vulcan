import Header from "./components/Header";
import NavMain from "./components/NavMain";
import Customized from "./components/Customized";
import ProductAdvisor from "./components/ProductAdvisor";
import AboutUs from "./components/AboutUs";
import Media from "./components/Media";
import SignUp from "./components/SignUp";
import SpecInstall from "./components/SpecInstall";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <NavMain />
      <Customized />
      <ProductAdvisor />
      <AboutUs />
      <Media />
      <SignUp />
      <SpecInstall />
      <Footer />
    </div>
  );
}

export default App;
