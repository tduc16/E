const features = [
  { title: "Học mọi lúc", desc: "Truy cập bài học 24/7 trên mọi thiết bị" },
  { title: "Giảng viên chất lượng", desc: "Chuyên gia nhiều năm kinh nghiệm" },
  { title: "Chứng chỉ uy tín", desc: "Nâng cao hồ sơ nghề nghiệp" },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Vì sao chọn E-Learning?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}