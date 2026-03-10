import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Updates } from "@/components/updates";

export default function Home() {
  return (
    <div className="bg-wisps min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Updates />
        {/* Next: about, resume, contact */}
      </main>
    </div>
  );
}
