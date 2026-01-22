const courses = [
  {
    id: 1,
    category: "Web Development",
    title: "Lập trình Web với NextJS",
    desc: "Xây dựng web hiện đại với App Router",
    price: "Miễn phí",
  },
  {
    id: 2,
    category: "Backend",
    title: "NestJS cho người mới bắt đầu",
    desc: "REST API, Auth, PostgreSQL",
    price: "499.000đ",
  },
  {
    id: 3,
    category: "AI & Data",
    title: "Nhập môn Machine Learning",
    desc: "Nền tảng ML với Python",
    price: "699.000đ",
  },
];

export default function Courses() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-10 hover:shadow-md transition">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">
            Khóa học nổi bật
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition"
              >
                <p className="text-xs text-gray-500 mb-2">
                  {course.category}
                </p>

                <h3 className="text-gray-900 font-medium mb-3">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {course.desc}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">
                    {course.price}
                  </span>
                  <span className="text-sm font-medium text-blue-500">
                    Xem chi tiết →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
