import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Subjects from './components/Subjects';
import Features from './components/Features';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import Enroll from './components/Enroll';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Subjects />
        <Programs />
        <Features />
        <Testimonials />
        <Enroll />
      </main>
      <Footer />
    </>
  );
}
