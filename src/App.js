import './App.css';
import Hero from './components/Hero';
import Program from './components/program';
import Reason from './components/Reason';
import Plans from './components/plans';
import Testimonial from './components/testimonial';
import Join from './components/join';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reason/>
          <Plans/>
          <Testimonial/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
