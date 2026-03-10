import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="bg-wisps min-h-screen">
      <Navbar />
      <main>
        <Hero />
        {/* Next: updates/projects bento grid, about, resume, contact */}
      </main>
    </div>
  );
}
