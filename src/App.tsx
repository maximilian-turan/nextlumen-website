import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}
