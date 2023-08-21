import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Header from './components/Header'
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <Main />
      {/* <main>
        <Header />
        <Specials />
        <Testimonials />
        <About />
      </main> */}
      <Footer />


      {/* <div className="App">
        Homepage
    </div> */}
    </>
  );
}

export default App;
