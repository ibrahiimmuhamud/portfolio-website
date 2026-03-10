import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero";
import {
  About,
  Projects,
  Experience,
  Resume,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#000000]">
      {/* Fixed background image bleeds through entire page */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[100px]" />
        <div
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{
            opacity: 0.06,
            backgroundImage: "url('/noise.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
