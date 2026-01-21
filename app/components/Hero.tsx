export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-28">
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 max-w-3xl">
          Học trực tuyến <br />
          theo cách đơn giản và hiệu quả
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Nền tảng E-Learning giúp bạn học kỹ năng công nghệ
          với lộ trình rõ ràng và thực tế.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md text-sm">
            Bắt đầu học
          </button>
          <button className="text-sm underline underline-offset-4">
            Xem khóa học
          </button>
        </div>
      </div>
    </section>
  );
}