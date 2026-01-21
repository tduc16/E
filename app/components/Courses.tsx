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
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-12">
          Khóa học nổi bật
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group border rounded-lg p-6 hover:bg-white hover:shadow-sm transition"
            >
              <p className="text-xs text-gray-500 mb-2">
                {course.category}
              </p>

              <h3 className="font-medium mb-3 group-hover:underline">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600 mb-6">
                {course.desc}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {course.price}
                </span>
                <span className="text-sm text-gray-500">
                  Xem →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
