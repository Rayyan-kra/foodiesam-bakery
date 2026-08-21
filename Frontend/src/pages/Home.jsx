import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CakeSection from "../components/CakeSection";
import CookieSection from "../components/CookieSection";
import ContactSection from "../components/ContactSection";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CakeSection />
      <CookieSection/>
      <ContactSection />
      <ReviewSection />
      <Footer />
    </>
  );
}

export default Home;
