export default function Intro() {
  return (
    <section className="py-30 bg-gray-100">
      <div className="flex flex-row">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
          회사 문구
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          소개 문구
          </p>
        </div>
        <div className="container mx-auto px-4 text-center flex justify-center">
          <div>
            <img src="/path/to/image.jpg" alt="사진" className="w-128 h-64 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
