import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-6">
            Nền tảng học trực tuyến <br />
            <span className="text-blue-600">dành cho người mới bắt đầu</span>
          </h1>
          <p className="text-gray-600 max-w-md mb-10 leading-relaxed">
            Học lập trình, công nghệ và kỹ năng số với lộ trình rõ ràng, thực
            hành thực tế, dễ tiếp cận.
          </p>

          <div className="flex gap-4">
           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              Bắt đầu học
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
              Xem khóa học
            </button>
          </div>
        </div>
        <Image
          src="/hero-elearning.jpg"
          alt="E-learning platform"
          width={600}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
