const features = [
  { title: "Học đúng trọng tâm", desc: "Nội dung được tinh gọn, dễ hiểu" },
  { title: "Lộ trình rõ ràng", desc: "Phù hợp sinh viên & người mới" },
  { title: "Thực hành thực tế", desc: "Áp dụng ngay sau khi học" },
];

export default function Features() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">
            Học tập hiệu quả hơn
          </h2>
          <p className="text-gray-600">
            Tập trung vào những gì quan trọng nhất cho người học.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white p-8 border rounded-xl hover:shadow-md transition"
            >
    
              <span className="text-4xl font-semibold text-gray-200 group-hover:text-gray-300 transition">
                {`0${i + 1}`}
              </span>
              <h3 className="text-lg font-medium mt-6 mb-3">
                {f.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
