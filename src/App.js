import './App.css';
import About from './Compo/About';
import Background from './Compo/Background';
import Footer from './Compo/Footer';
import Home from './Compo/Home';
import Information from './Compo/Information';
import Menu from './Compo/Menu';
import Nav from './Compo/Nav';
import Review from './Compo/Review';
import Shef from './Compo/Shef';


function App() {
  return (
    <>
      <Nav />
      <Home />
      <Menu />
      <About />
      <Information />
      <Shef />
      <Background />
      <Review />
      <Footer/>
    </>
  );
}

export default App;
