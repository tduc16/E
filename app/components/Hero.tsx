export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Nền tảng học trực tuyến <br />
          <span className="text-yellow-300">thế hệ mới</span>
        </h1>

        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
          Học kỹ năng công nghệ, lập trình, AI, Data… từ giảng viên hàng đầu
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow hover:scale-105 transition">
            Bắt đầu học
          </button>
          <button className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
            Xem khóa học
          </button>
        </div>
      </div>
    </section>
  );
}