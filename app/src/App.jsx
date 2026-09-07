import {
  About,
  Contact,
  Experience,
  Exploring,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Exploring />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

export default App;
