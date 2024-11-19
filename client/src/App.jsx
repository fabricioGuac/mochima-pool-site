// Imports the necessary hooks
import { useState, useEffect } from "react";

// Imports the necessary components
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import NavLinks from "./components/NavLinks";



export default function App() {
  // Defines a state variable to track the side nav menu's open or closed state
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Effect hook to close the side nav menu on resize if it is larger than 768 pixels
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    // Adds the event listener for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove  the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])



  return (
    <div className="relative min-h-screen bg-gray-100 font-sans flex flex-col ">

      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-teal-700 text-white transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <NavLinks className={"p-6"} setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      </aside>

      <div
        className={`flex flex-col flex-grow transform transition-transform duration-300 ${isMenuOpen ? "-translate-x-64" : ""
          }`}
      >
        <header className="p-4 bg-teal-700 text-white shadow-md">
          <Header setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
        </header>

        <main className="flex-grow">
          <section id="about" className="p-8 bg-white flex justify-center items-center">
            <AboutUs />
          </section>

          <section id="services" className="p-8 bg-gray-50 flex justify-center items-center">
            <Services />
          </section>

          <section id="testimonials" className="p-8 bg-white flex justify-center items-center">
            <Testimonials />
          </section>

          <section id="contact" className="p-8 bg-gray-50 flex justify-center items-center">
            <Contact />
          </section>
        </main>


        <footer className="p-4 bg-teal-700 text-white text-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

