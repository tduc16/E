export default function Courses() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Khóa học nổi bật
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((c) => (
            <div
              key={c}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
            >
              <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Lập trình Web Fullstack
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  NextJS, NestJS, PostgreSQL
                </p>

                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600">Miễn phí</span>
                  <button className="text-sm font-semibold hover:underline">
                    Chi tiết →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}