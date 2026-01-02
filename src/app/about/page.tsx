import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/sections/about/Intro";

export default function index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Intro />
      </main>
      <Footer />
    </div>
  );
}
