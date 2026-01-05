import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/sections/home/Intro";
import Item from "@/components/sections/home/Item";
import Features from "@/components/sections/home/Features";
import Count from "@/components/sections/home/count";
import { supabase } from '@/lib/DB/local'
import '@/styles/carousel.css';

export default async function index() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Intro />
        <section className="py-20 bg-gray-100">
          <div className="grid grid-cols-6 h-full">
          
            {/* 캐러셀 - 3칸 */}
            <div className="col-span-3 flex justify-center items-center">
              <Item />
            </div>

            {/* 문구 - 3칸 */}
            <div className="col-span-3 flex flex-col items-center justify-center text-center text-white">
              <Count 
                to={89000}           // 필수: 목표 숫자
                from={1}           // 시작 숫자 (기본 0)
                duration={6}       // 애니메이션 시간 (초)
                className="text-gray-800 text-8xl mb-8"
              />
              <p className="text-2xl font-bold text-gray-600">
                수집한 데이터의 크기는 정밀함을 나타내는 지표.
              </p>
            </div>
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
}
