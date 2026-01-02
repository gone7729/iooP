import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/sections/home/Intro";
import Item from "@/components/sections/home/Item";
import Features from "@/components/sections/home/Features";
import { supabase } from '@/lib/DB/local'

export default async function index() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Intro />
        <Item />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
