import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import FAQ from "./Components/Faq";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function QuizGameApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FAQ />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
