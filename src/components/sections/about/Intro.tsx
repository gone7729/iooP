'use client';

import { useEffect, useRef, useState } from 'react';

export default function Intro() {
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setIsVisible((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.2 }  // 20% 보이면 트리거
    );

    [ref1, ref2, ref3, ref4].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-100 py-12 overflow-hidden">
      <div className="container mx-auto px-16 text-center mb-24">
        <div className="relative">
          <img
            src="/img/top_img.jpg"
            alt="딜로스 이미지"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div>

        <div className="w-full h-full flex justify-center mb-16 pb-16 gap-80 px-24 border-b-2 border-[#050322]">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-4xl text-[#050322] font-bold">BIG STEP</p>
            <p className="text-4xl text-black">2023</p>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-4xl text-[#050322] font-bold">PERFOMANSE</p>
            <p className="text-4xl text-black">59+</p>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-4xl text-[#050322] font-bold">COOPERATION</p>
            <p className="text-4xl text-black">16</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <div className="flex gap-8 mb-8">
          {/* 1번: 왼쪽 텍스트 - 왼쪽에서 등장 */}
          <div
            ref={ref1}
            data-id="section1"
            className={`flex-1 transition-all duration-1000 ease-out ${
              isVisible.section1
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-gray-800 mb-4">
              모든 장애물을 함께 넘는 개발자 파트너십.
              우리의 과거가 내일의 혁신을 이끕니다.
            </p>
            <p className="text-gray-600">
              이우파트너스는 획일화된 서비스를 제공하기 위해 개발자와 함께 수 많은 전장을 넘어왔으며 
              그 기록들은 성장 배경에 고스란히 남아 더 찬란한 다음을 기약할 수 있는 원동력이 되어 
              더 편리하고 더욱 완성도 높은 서비스를 개발할 수 있게 하였다.
            </p>
          </div>

          {/* 2번: 오른쪽 이미지 - 오른쪽에서 등장 */}
          <div
            ref={ref2}
            data-id="section2"
            className={`flex-1 transition-all duration-1000 ease-out delay-200 ${
              isVisible.section2
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="h-80 bg-white rounded-xl grid grid-cols-4 gap-4 text-gray-500 shadow-lg">
              <img src="/img/img_1.png" alt="About Us Image" className="col-span-3 w-full h-full object-cover rounded-xl" />
              <div className="col-span-1 gap-4 p-4 flex flex-col justify-center">
                <p className="bg-[#050322] text-xl font-bold text-white text-center">재무설계</p>
                <p className="text-l font-bold text-gray-400 text-center">자동화를 통한 <br /> 고급 전략 분석</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-25 items-center">
          {/* 3번: 왼쪽 작은 이미지 - 왼쪽에서 등장 */}
          <div
            ref={ref3}
            data-id="section3"
            className={`w-40 h-64 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500 -ml-16 border-4 border-[#050322] shadow-lg transition-all duration-1000 ease-out ${
              isVisible.section3
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <img src="/img/img_2.png" alt="About Us Image" className="w-full h-full object-cover rounded-xl" />
          </div>

          {/* 4번: 중앙 GIS - 왼쪽에서 등장 */}
          <div
            className={`flex-1 h-72 bg-white rounded-xl grid grid-cols-6 gap-4 text-gray-500 shadow-lg transition-all duration-1000 ease-out delay-200 ${
              isVisible.section3
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <img src="/img/img_4.svg" alt="About Us Image" className="col-span-4 w-full h-full object-cover rounded-xl" />
            <div className="col-span-2 gap-4 p-4 flex flex-col justify-center">
              <p className="bg-[#050322] text-xl font-bold text-white text-center">GIS Program</p>
              <p className="text-l font-bold text-gray-400 text-center">고정밀 데이터 <br /> 수집 및 정재</p>
            </div>
          </div>

          {/* 5번: 오른쪽 이미지 - 오른쪽에서 등장 */}
          <div
            ref={ref4}
            data-id="section4"
            className={`flex-1 h-64 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500 shadow-lg mr-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible.section4
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
          >
            <img src="/img/img_3.png" alt="About Us Image" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}