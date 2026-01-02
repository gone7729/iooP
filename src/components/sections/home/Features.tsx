export default function Features() {
  return (
    <section className="py-30 bg-gray-100">
      <div className="flex flex-row">
        <div className="container mx-auto px-4 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              주요 기능
            </h2>
            <div className="group/cards flex flex-col md:flex-row gap-8 w-240">
                <div className="flex-1 bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:scale-130 hover:z-10 hover:shadow-2xl group-hover/cards:blur-[2px] group-hover/cards:opacity-50 hover:!blur-none hover:!opacity-100">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-gray-400">아이콘</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">기능 1</h3>
                    <p className="text-gray-600">기능에 대한 설명을 작성하세요.</p>
                </div>
                <div className="flex-1 bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:scale-130 hover:z-10 hover:shadow-2xl group-hover/cards:blur-[2px] group-hover/cards:opacity-50 hover:!blur-none hover:!opacity-100">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-gray-400">아이콘</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">기능 2</h3>
                    <p className="text-gray-600">기능에 대한 설명을 작성하세요.</p>
                </div>
                {/* <div className="flex-1 bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:scale-130 hover:z-10 hover:shadow-2xl group-hover/cards:blur-[2px] group-hover/cards:opacity-50 hover:!blur-none hover:!opacity-100">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-gray-400">아이콘</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">기능 3</h3>
                    <p className="text-gray-600">기능에 대한 설명을 작성하세요.</p>
                </div> */}
            </div>
        </div>
      </div>
    </section>
  );
}