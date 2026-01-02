'use client';

import { useEffect, useState } from 'react';

export default function Intro() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 애니메이션 시작
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-160 w-full overflow-hidden">
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/top_img.jpg')" }}
      >
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 콘텐츠 */}
      <div className="grid grid-cols-6 h-full">
        {/* 슬로건 - 2칸 */}
        <div className="col-span-3 relative z-10 flex w-full h-full flex-col items-center justify-center text-center text-white">
          {/* 메인 슬로건 - reveal 애니메이션 (위에서부터 드러남) */}
          <div className="overflow-hidden">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ease-out"
              style={{
                clipPath: isLoaded 
                  ? 'inset(0 0 0 0)' 
                  : 'inset(0 0 100% 0)'
              }}
            >
              회사 슬로건
            </h1>
          </div>
            
          {/* 서브 텍스트 - 약간 딜레이된 reveal */}
          <div className="overflow-hidden">
            <p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto transition-all duration-1000 ease-out"
              style={{
                clipPath: isLoaded 
                  ? 'inset(0 0 0 0)' 
                  : 'inset(0 0 100% 0)',
                transitionDelay: '0.3s'
              }}
            >
              더 나은 미래를 위한 혁신적인 솔루션
            </p>
          </div>
        </div>
            
        {/* 이미지 - 4칸 */}
        <div className="col-span-3 flex justify-center items-center w-full h-full z-10">
          <img 
            src="/img/img_4.svg" 
            alt="Intro Image" 
            className="h-80"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 20%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)'
            }}
          />
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1s' }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
